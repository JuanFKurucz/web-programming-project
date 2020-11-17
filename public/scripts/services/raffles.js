import { get, post, remove } from '../utils/api.js';

export const createRaffle = async (requestData) => {
  const { data, error } = await post('/raffles', requestData);

  if (error) {
    if (error.status === 401) {
      throw new Error('Invalid username/password combination.');
    }
    throw new Error('Oops! Something went wrong...');
  }
  return data;
};

export const obtainRaffles = async (requestData) => {
  const { data, error } = await get('/raffles', requestData);

  if (error) {
    if (error.status === 401) {
      throw new Error('Invalid username/password combination.');
    }
    throw new Error('Oops! Something went wrong...');
  }
  return data;
};

export const deleteRaffle = async (id) => {
  const { data, error } = await remove('/raffles', { id });

  if (error) {
    if (error.status === 401) {
      throw new Error('Invalid username/password combination.');
    }
    throw new Error('Oops! Something went wrong...');
  }
  return data;
};
