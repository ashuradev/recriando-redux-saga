import { EventEmitter } from 'events';

const createSagaMiddleware = () => {
  let store;
  let actions = new EventEmitter();

  const sagaMiddleware = currentStore => {
    store = currentStore;

    return dispatch => action => {
      const result = dispatch(action);

      actions.emit(action.type, action);

      return result;
    };
  };

  async function run(saga, ...args) {
    saga = saga(...args);

    let result = saga.next();

    while (result && !result.done) {
      const { type, payload } = result.value;

      switch (type) {
        case 'CALL':
          result = saga.next(await payload.fn(...payload.args));
          break;

        case 'PUT':
          store.dispatch(payload.action);
          result = saga.next();
          break;

        case 'SELECT':
          result = saga.next(payload.selector(store.getState()));
          break;

        case 'TAKE':
          result = saga.next(
            await new Promise(resolve =>
              actions.once(payload.actionType, resolve)
            )
          );
          break;

        case 'FORK':
          result = saga.next(run(payload.saga, ...payload.args));
          break;

        default:
          throw new Error(`Unknown effect type: ${type}`);
      }
    }
  }

  sagaMiddleware.run = run;

  return sagaMiddleware;
};

export default createSagaMiddleware;
