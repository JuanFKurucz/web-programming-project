const { formatOutput } = require('../../../libs/utils/formatOutput');
const facebookApi = require('../../../libs/clients/facebook');

/**
 * Gets all raffles from an user
 * Login is required
 */
const getRaffles = async (event, user) => {
  const raffles = await Promise.all(
    user.raffles.map(async (x) => {
      let data = null;
      if (x.postId) {
        try {
          data = await facebookApi.getInstagramPost(x.postId);
        } catch (e) {
          data = null;
        }
      }
      return { ...x.toFrontend, data };
    }),
  );
  return formatOutput(200, raffles);
};

module.exports = getRaffles;
