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
function max(element) {
  let raffle = null;
  const maxDate = null;
  console.log(element);
  if (element.date > maxDate) {
    raffle = element;
  }
  return raffle;
}

export const obtainRaffles = async (requestData) => {
  const { data, error } = await get('/raffles', requestData);

  if (error) {
    if (error.status === 401) {
      throw new Error('Invalid username/password combination.');
    }
    throw new Error('Oops! Something went wrong...');
  }
  console.log(data);
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

  return data.forEach(max);
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
