import {
  TRANSLATE_SUCCESS,
  TRANSLATE_LOADING,
  TRANSLATE_ERROR
} from './actionType';

const initialState = {
  translation: '',
  error: null
};
const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TRANSLATE_SUCCESS:
      return {
        ...state,
        translation: payload,
        error: null
      };
    case TRANSLATE_LOADING:
      return {
        ...state,
        translation: `${state.translation}..`
      };
    case TRANSLATE_ERROR:
      return {
        ...state,
        translation: '',
        error: payload
      };
    default:
      return state;
  }
};

export default reducer;
