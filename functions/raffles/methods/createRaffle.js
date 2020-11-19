const {
  formatError,
  formatOutput,
} = require('../../../libs/utils/formatOutput');

const { Raffle } = require('../../../libs/models/index');
const facebookApi = require('../../../libs/clients/facebook');

/**
 * Creates a Raffle and associates it with an user
 * Login is required
 */
const createRaffle = async (event, user = null) => {
  const data = JSON.parse(event.body);
  let winner = null;
  if (data.postId) {
    const comments = await facebookApi.getInstagramPostComments(data.postId);
    const userNames = [];
    if (comments.length === 0) {
      return formatError(400, 'Post has no comments');
    }
    for (let c = 0; c < comments.length; c += 1) {
      if (userNames.indexOf(comments[c].username) === -1) {
        userNames.push(comments[c].username);
      }
    }
    winner = userNames[Math.floor(Math.random() * userNames.length)];
  } else if (data.listNames) {
    const arrayNames = data.listNames.split(',');
    winner = arrayNames[Math.floor(Math.random() * arrayNames.length)];
  }
  const newRaffle = new Raffle({
    postId: data.postId,
    date: data.date,
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
};

module.exports = createRaffle;
