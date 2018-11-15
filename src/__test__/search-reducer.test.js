import searchReducer from '../reducer/search-reducer';

describe('#SearchForm', () => {
  test('Initial state should be an empty object', () => {
    const initialState = searchReducer(undefined, { type: 'INITIAL', payload: null });
    expect(initialState).toEqual({});
  });

  test('')
});
