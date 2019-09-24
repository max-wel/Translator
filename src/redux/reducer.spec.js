import reducer from './reducer';
import * as actionType from './actionType';

describe('Reducer Test', () => {
  const initialState = reducer(undefined, {});

  it('returns inital state', () => {
    const result = reducer(initialState, {});
    expect(result).toEqual(initialState);
  });

  it('returns translation', () => {
    const action = { type: actionType.TRANSLATE_SUCCESS, payload: 'something' };
    const result = reducer(initialState, action);
    expect(result).toEqual({ ...initialState, translation: action.payload });
  });

  it('returns translation error', () => {
    const action = { type: actionType.TRANSLATE_ERROR, payload: 'error' };
    const result = reducer(initialState, action);
    expect(result).toEqual({ ...initialState, error: action.payload });
  });
});
