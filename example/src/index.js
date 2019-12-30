import store from './store';

import {
  increment,
  decrement,
  incrementRequest,
  decrementRequest
} from './store/actions/counter';

const select = selector => document.querySelector(selector);

const incrementButton = select('#increment');
const decrementButton = select('#decrement');
const asyncIncrement = select('#async-increment');
const asyncDecrement = select('#async-decrement');
const displayer = select('h1');

incrementButton.onclick = () => store.dispatch(increment());
decrementButton.onclick = () => store.dispatch(decrement());
asyncIncrement.onclick = () => store.dispatch(incrementRequest());
asyncDecrement.onclick = () => store.dispatch(decrementRequest());

store.subscribe(() => {
  displayer.innerText = store.getState().counter;
});
