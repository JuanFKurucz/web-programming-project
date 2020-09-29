const { FB } = require('fb');

const setAccessToken = (token) => {
  FB.setAccessToken(token);
};

const getFacebookPages = async () => {
  return new Promise((resolve, reject) => {
    FB.api('/me/accounts', 'GET', {}, (response) => {
      if (!response || response.error) {
        reject(response.error);
      }
      const pages = [];
      Object.keys(response.data).forEach((key) => {
        pages.push(response.data[key].id);
      });
      resolve(pages);
    });
  });
};

const getInstagramId = async (facebookPageId) => {
  return new Promise((resolve, reject) => {
    FB.api(
      `/${facebookPageId}`,
      'GET',
      { fields: 'instagram_business_account' },
      (response) => {
        if (!response || response.error) {
          reject(response.error);
        }
        resolve(
          response.instagram_business_account
            ? response.instagram_business_account.id
            : null,
        );
      },
    );
  });
};

const getInstagramPosts = async (instagramId) => {
  return new Promise((resolve, reject) => {
    FB.api(`/${instagramId}/media`, 'GET', {}, (response) => {
      if (!response || response.error) {
        reject(response.error);
      }
      const posts = [];
      Object.keys(response.data).forEach((key) => {
        posts.push(response.data[key].id);
      });
      resolve(posts);
    });
  });
};

const getInstagramPostComments = async (instagramPostId) => {
  return new Promise((resolve, reject) => {
    FB.api(`/${instagramPostId}/comments`, 'GET', {}, (response) => {
      if (!response || response.error) {
        reject(response.error);
      }
      resolve(response.data);
    });
  });
};

module.exports = {
  getInstagramPostComments,
  getInstagramPosts,
  getInstagramId,
  getFacebookPages,
  setAccessToken,
};
