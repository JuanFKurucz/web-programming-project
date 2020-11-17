import { get, patch } from '../utils/api.js';

export const updateUser = async (requestData) => {
  const { data, error } = await patch('/users', requestData);

  if (error) {
    if (error.status === 401) {
      throw new Error('Invalid username/password combination.');
    }

    throw new Error('Oops! Something went wrong...');
  }
  return data;
};

export const getUser = async () => {
  const { data, error } = await get('/users');

  if (error) {
    if (error.status === 401) {
      throw new Error('Invalid username/password combination.');
    }

    throw new Error('Oops! Something went wrong...');
  }
  return data;
};
