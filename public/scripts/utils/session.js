import { navigate } from './navigation.js';

const tokenStorageKey = 'token';
const instagramPostsStorageKey = 'instagramPosts';
const pastPageStorageKey = 'pastPage';
const errorStorageKey = 'error';

export const getSessionToken = () => {
  return window.localStorage.getItem(tokenStorageKey);
};

export const setSessionToken = (token) => {
  window.localStorage.setItem(tokenStorageKey, token);
};

export const removeSessionToken = () => {
  window.localStorage.removeItem(tokenStorageKey);
};

export const getInstagramPosts = () => {
  return JSON.parse(window.localStorage.getItem(instagramPostsStorageKey));
};

export const setInstagramPosts = (info) => {
  window.localStorage.setItem(instagramPostsStorageKey, JSON.stringify(info));
};

export const removeInstagramPosts = () => {
  window.localStorage.removeItem(instagramPostsStorageKey);
};

export const getError = () => {
  return window.localStorage.getItem(errorStorageKey);
};

export const setError = (info) => {
  window.localStorage.setItem(errorStorageKey, info);
  navigate('/error');
};

export const getPastPage = () => {
  return window.localStorage.getItem(pastPageStorageKey);
};

export const setPastPage = (info) => {
  window.localStorage.setItem(pastPageStorageKey, info);
};
