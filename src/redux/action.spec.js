import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import * as type from './actionType';
import translate from './action';

const mockStore = configureMockStore([thunk]);
const store = mockStore({});

describe('Action Tests', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  it('should dispatch TRANSLATE_SUCCESS', async () => {
    const response = {
      data: {
        translations: [
          {
            translatedText: 'translated'
          }
        ]
      }
    };
    const expectedActions = [
      { type: type.TRANSLATE_LOADING },
      { type: type.TRANSLATE_SUCCESS, payload: 'translated' }
    ];
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 200, response });
    });
    return store.dispatch(translate('text', 'en', 'fr')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
