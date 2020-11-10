const {
  formatError,
  formatOutput,
} = require('../../../libs/utils/formatOutput');

const Raffle = require('../../../libs/models/Raffle');
const facebookApi = require('../../../libs/clients/facebook');

const updateRaffle = async (event) => {
  try {
    const data = JSON.parse(event.body);
    if ('id' in data) {
      const raffle = await Raffle.findById(data.id);
      const updateDict = {};
      if ('title' in data) {
        updateDict.title = data.title;
      }
      if ('description' in data) {
        updateDict.description = data.description;
      }
      if ('end' in data && !raffle.winner) {
        const comments = await facebookApi.getInstagramPostComments(
          raffle.postId,
        );
        const userNames = [];
        for (let c = 0; c < comments.length; c += 1) {
          if (userNames.indexOf(comments[c].username) === -1) {
            userNames.push(comments[c].username);
          }
        }
        updateDict.winner =
          userNames[Math.floor(Math.random() * userNames.length)];
      }
      await raffle.update(updateDict);
      return formatOutput(200, raffle.toFrontend);
    }
    return formatError(400, 'Missing parameter (id)');
  } catch (e) {
    return formatError(500, 'Unexpected error');
  }
};

module.exports = updateRaffle;
