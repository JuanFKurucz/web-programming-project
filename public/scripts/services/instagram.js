import { get } from '../utils/api.js';

export default async () => {
  const { data, error } = await get('/instagram');

  if (error) {
    if (error.status === 401) {
      throw new Error('Invalid username/password combination.');
    }

    throw new Error('Oops! Something went wrong...');
  }
  return data;
};
