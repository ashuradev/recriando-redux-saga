export const Types = {
  INCREMENT: 'counter/INCREMENT',
  DECREMENT: 'counter/DECREMENT',
  INCREMENT_REQUEST: 'counter/INCREMENT_REQUEST',
  DECREMENT_REQUEST: 'counter/DECREMENT_REQUEST'
};

export const increment = (count = 1) => ({
  type: Types.INCREMENT,
  payload: { count }
});

export const decrement = (count = 1) => ({
  type: Types.DECREMENT,
  payload: { count }
});

export const incrementRequest = (count = 1) => ({
  type: Types.INCREMENT_REQUEST,
  payload: { count }
});

export const decrementRequest = (count = 1) => ({
  type: Types.DECREMENT_REQUEST,
  payload: { count }
});
