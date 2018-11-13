import superagent from 'superagent';
import * as routes from '../routes';

export const set = token => ({
  type: 'SYMPTOM_RESULTS',
  payload: token,
});

export const searchSymptoms = query => (store) => {
  return superagent.post(`${API_URL}${routes.DIAGNOSIS}`) // eslint-disable-line
    .send(query)
    .then((response) => {
      return store.dispatch(set(response.text));
    });
};
