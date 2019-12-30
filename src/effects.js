export const call = (fn, ...args) => ({
  type: 'CALL',
  payload: {
    fn,
    args
  }
});

export const put = action => ({
  type: 'PUT',
  payload: { action }
});

export const select = selector => ({
  type: 'SELECT',
  payload: { selector }
});

export const take = actionType => ({
  type: 'TAKE',
  payload: { actionType }
});

export const fork = (saga, ...args) => ({
  type: 'FORK',
  payload: { saga, args }
});

export const takeEvery = (actionType, saga) =>
  fork(function*() {
    while (true) {
      yield* saga(yield take(actionType));
    }
  });

export const delay = ms =>
  call(() => new Promise(resolve => setTimeout(resolve, ms)));
