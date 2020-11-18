import { get, post, remove } from '../utils/api.js';

export const createRaffle = async (
  title = '',
  postId = null,
  listNames = null,
) => {
  const { data, error } = await post('/raffles', {
    date: Date.now(),
    title,
    postId,
    listNames,
  });

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

export const obtainLastRaffle = async (requestData) => {
  const { data, error } = await get('/raffles', requestData);

  if (error) {
    if (error.status === 401) {
      throw new Error('Invalid username/password combination.');
    }
    throw new Error('Oops! Something went wrong...');
  }

  let raffle = null;
  let maxDate = 0;

  data.forEach((element) => {
    if (new Date(element.date).getTime() > maxDate) {
      raffle = element;
      maxDate = new Date(element.date).getTime();
    }
  });
  return raffle;
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
