import axios from 'axios';
import {
  TRANSLATE_SUCCESS,
  TRANSLATE_LOADING,
  TRANSLATE_ERROR
} from './actionType';

const translate = (text, source, target) => {
  return async dispatch => {
    try {
      dispatch({
        type: TRANSLATE_LOADING
      });
      const { data } = await axios.post(
        'https://translation.googleapis.com/language/translate/v2',
        null,
        {
          params: {
            key: process.env.APIKEY,
            source,
            target: target || 'en',
            format: 'text',
            q: text
          }
        }
      );
      const {
        data: { translations }
      } = data;
      dispatch({
        type: TRANSLATE_SUCCESS,
        payload: translations[0].translatedText
      });
    } catch (error) {
      dispatch({
        type: TRANSLATE_ERROR,
        payload: 'Language pair should not be the same'
      });
    }
  };
};

export default translate;
