const { FB } = require('fb');

const setAccessToken = (token) => {
  FB.setAccessToken(token);
};

const getFacebookPages = async () => {
  return new Promise((resolve, reject) => {
    FB.api('/me/accounts', 'GET', {}, (response) => {
      if (!response || 'error' in response) {
        reject(response.error);
      } else {
        const pages = [];
        Object.keys(response.data).forEach((key) => {
          pages.push(response.data[key].id);
        });
        resolve(pages);
      }
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
        if (!response || 'error' in response) {
          reject(response.error);
        } else {
          resolve(
            response.instagram_business_account
              ? response.instagram_business_account.id
              : null,
          );
        }
      },
    );
  });
};

const getInstagramPosts = async (instagramId) => {
  return new Promise((resolve, reject) => {
    FB.api(
      `/${instagramId}/media`,
      'GET',
      { fields: 'comments_count,timestamp,media_type,media_url' },
      (response) => {
        if (!response || 'error' in response) {
          reject(response.error);
        } else {
          const posts = [];
          Object.keys(response.data).forEach((key) => {
            posts.push(response.data[key]);
          });
          resolve(posts);
        }
      },
    );
  });
};

const getInstagramPost = async (instagramId) => {
  return new Promise((resolve, reject) => {
    FB.api(
      `/${instagramId}`,
      'GET',
      { fields: 'comments_count,timestamp,media_type,media_url' },
      (response) => {
        if (!response || 'error' in response) {
          reject(response.error);
        } else {
          resolve(response);
        }
      },
    );
  });
};

const getInstagramPostComments = async (instagramPostId) => {
  return new Promise((resolve, reject) => {
    FB.api(
      `/${instagramPostId}/comments`,
      'GET',
      { fields: 'username' },
      (response) => {
        if (!response || 'error' in response) {
          reject(response.error);
        } else {
          resolve(response.data);
        }
      },
    );
  });
};

module.exports = {
  getInstagramPostComments,
  getInstagramPosts,
  getInstagramPost,
  getInstagramId,
  getFacebookPages,
  setAccessToken,
};
