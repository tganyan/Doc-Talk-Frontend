import superagent from 'superagent';
import * as routes from '../routes';

export const set = token => ({
  type: 'TOKEN_SET',
  payload: token,
});

export const remove = () => ({
  type: 'TOKEN_REMOVE',
});

export const signupRequest = user => (store) => {
  console.log(`${API_URL}${routes.SIGNUP}, ${user}`);
    return superagent.post(`${API_URL}${routes.SIGNUP}`) // eslint-disable-line
    .send(user)
  // .withCredentials()
    .then((response) => {
      return store.dispatch(set(response.text));
    });
};

export const loginRequest = user => (store) => {
    return superagent.get(`${API_URL}${routes.LOGIN}`) // eslint-disable-line
    .auth(user.username, user.password)
  // .withCredentials()
    .then((response) => {
      return store.dispatch(set(response.text));
    });
};
