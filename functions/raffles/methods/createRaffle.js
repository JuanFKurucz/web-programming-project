const {
  formatError,
  formatOutput,
} = require('../../../libs/utils/formatOutput');

const { Raffle } = require('../../../libs/models/index');
const facebookApi = require('../../../libs/clients/facebook');

const createRaffle = async (event, user = null) => {
  const data = JSON.parse(event.body);
  if ('postId' in data) {
    let winner = null;
    if (data.postId) {
      const comments = await facebookApi.getInstagramPostComments(data.postId);
      const userNames = [];
      for (let c = 0; c < comments.length; c += 1) {
        if (userNames.indexOf(comments[c].username) === -1) {
          userNames.push(comments[c].username);
        }
      }
      winner = userNames[Math.floor(Math.random() * userNames.length)];
    }
    const newRaffle = new Raffle({
      postId: data.postId,
      title: data.title ? data.title : '',
      description: data.description ? data.description : '',
      owner: user,
      winner,
    });
    try {
      await newRaffle.save();
      user.raffles.push(newRaffle);
      await user.save();
      return formatOutput(200, await newRaffle.toFrontend);
    } catch (error) {
      return formatError(500, 'Unexpected error');
    }
  }
  return formatError(400, 'Missing parameter (postId or title)');
};

module.exports = createRaffle;
