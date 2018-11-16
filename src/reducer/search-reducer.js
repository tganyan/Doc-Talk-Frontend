const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SYMPTOM_RESULTS':
      return payload;
    case 'GET_TOKEN':
      return payload;
    case 'REFRESH_TOKEN':
      return payload;
    default:
      return state;
  }
};
