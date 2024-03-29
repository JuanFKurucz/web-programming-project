import { post } from '../utils/api.js';
import { navigate } from '../utils/navigation.js';
import {
  removeSessionToken,
  setSessionToken,
  removeInstagramPosts,
} from '../utils/session.js';

export const logIn = async (username, password) => {
  const { data: session, error } = await post('/sessions', {
    username,
    password,
  });
  if (error) {
    if (error.status === 401) {
      throw new Error('Invalid username/password combination.');
    }

    throw new Error('Oops! Something went wrong...');
  }

  setSessionToken(session.token);

  navigate('/');
};

export const logOut = () => {
  removeSessionToken();
  removeInstagramPosts();
  navigate('/login');
};

export const register = async (username, email, password) => {
  const { data, error } = await post('/users', {
    username,
    email,
    password,
  });

  if (error) {
    if (error.status === 401) {
      throw new Error('Invalid username/password combination.');
    }

    throw new Error('Oops! Something went wrong...');
  }

  setSessionToken(data.token);

  navigate('/');
};
