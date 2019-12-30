import store from './store';

import {
  increment,
  decrement,
  incrementRequest,
  decrementRequest
} from './store/actions/counter';

const { subscribe, dispatch, getState } = store;
const select = selector => document.querySelector(selector);

const display = select('h1');

select('#increment').onclick = () => dispatch(increment());
select('#decrement').onclick = () => dispatch(decrement());
select('#async-increment').onclick = () => dispatch(incrementRequest());
select('#async-decrement').onclick = () => dispatch(decrementRequest());

subscribe(() => {
  display.innerText = getState().counter;
});
