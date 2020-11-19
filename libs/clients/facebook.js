const { FB } = require('fb');

/**
 * Sets an access token to use the facebook user information for the following requests
 * @param {string} token - Facebook access token
 */
const setAccessToken = (token) => {
  FB.setAccessToken(token);
};

/**
 * Retrieves a list of facebook pages ids of the account references with the access token
 */
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

/**
 * Retrieves the id of an instagram account associated with a facebook page
 * @param {string} facebookPageId - Facebook page id
 */
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

/**
 * Retrieves a list of instagram posts from an instagram account
 * @param {string} instagramId - Instagram account id
 */
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

/**
 * Retrieves an instagram post by id
 * @param {string} instagramId - Instagram post id
 */
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

/**
 * Retrieves a list of comments from an instagram post
 * @param {string} instagramId - Instagram post id
 */
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
