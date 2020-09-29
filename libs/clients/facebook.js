const { FB } = require('fb');

const setAccessToken = (token) => {
  FB.setAccessToken(token);
};

const getFacebookPages = async () => {
  return new Promise((resolve) => {
    FB.api('/me/accounts', 'GET', {}, (response) => {
      const pages = [];
      Object.keys(response.data).forEach((key) => {
        pages.push(response.data[key].id);
      });
      resolve(pages);
    });
  });
};

const getInstagramId = async (facebookPageId) => {
  return new Promise((resolve) => {
    FB.api(
      `/${facebookPageId}`,
      'GET',
      { fields: 'instagram_business_account' },
      (response) => {
        resolve(response.instagram_business_account.id);
      },
    );
  });
};

const getInstagramPosts = async (instagramId) => {
  return new Promise((resolve) => {
    FB.api(`/${instagramId}/media`, 'GET', {}, (response) => {
      const posts = [];
      Object.keys(response.data).forEach((key) => {
        posts.push(response.data[key].id);
      });
      resolve(posts);
    });
  });
};

const getInstagramPostComments = async (instagramPostId) => {
  return new Promise((resolve) => {
    FB.api(`/${instagramPostId}/comments`, 'GET', {}, (response) => {
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
