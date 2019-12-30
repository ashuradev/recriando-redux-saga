export default function createSagaMiddleware() {
  this.run = async saga => {
    console.log('running saga');
  };

  return store => dispatch => action => {
    const result = dispatch(action);

    return result;
  };
}
