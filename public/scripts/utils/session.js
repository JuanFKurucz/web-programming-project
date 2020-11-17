const tokenStorageKey = 'token';
const instagramPostsStorageKey = 'instagramPosts';

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
