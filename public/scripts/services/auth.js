import { post } from '../utils/api.js';
import { navigate } from '../utils/navigation.js';
import { removeSessionToken, setSessionToken } from '../utils/session.js';
import { emailService } from "./emails.js";

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
  navigate('/login');
};

export const register = async (username, password, email) => {
  // TODO
  console.log('hola1');
  emailService('luciamorenonegro@gmail.com');
  console.log('hola2');
  const { data: session, error } = await post('/sessions', {
    username,
    password,
    email,
  });

  if (error) {
    if (error.status === 401) {
      // TODO throw new Error('Invalid username/password combination.');
    }

    throw new Error('Oops! Something went wrong...');
  }

  setSessionToken(session.token);

  navigate('/');
};
