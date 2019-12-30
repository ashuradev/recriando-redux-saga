import { Types } from '../actions/counter';

const INITIAL_STATE = 0;

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.INCREMENT:
      return state + action.payload.count;

    case Types.DECREMENT:
      return state - action.payload.count;

    default:
      return state;
  }
};
