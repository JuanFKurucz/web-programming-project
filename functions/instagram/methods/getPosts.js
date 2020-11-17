const {
  formatError,
  formatOutput,
} = require('../../../libs/utils/formatOutput');
const facebookApi = require('../../../libs/clients/facebook');

const getUser = async (event, user) => {
  if (!user.accessToken || user.accessToken.length === 0) {
    return formatError(403, 'Forbidden, access token required');
  }
  let posts = [];
  try {
    facebookApi.setAccessToken(user.accessToken);
    const pages = await facebookApi.getFacebookPages();
    const instagramPages = [];
    for (let page = 0; page < pages.length; page += 1) {
      instagramPages.push(facebookApi.getInstagramId(pages[page]));
    }
    const instagramIds = await Promise.all(instagramPages);
    for (let i = 0; i < instagramIds.length; i += 1) {
      posts = [...posts, facebookApi.getInstagramPosts(instagramIds[i])];
    }
    posts = await Promise.all(posts);
    return formatOutput(200, { data: posts[0] });
  } catch (e) {
    return formatError(500, 'Unexpected error');
  }
};

module.exports = getUser;
