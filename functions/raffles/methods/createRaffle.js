const {
  formatError,
  formatOutput,
} = require('../../../libs/utils/formatOutput');

const Raffle = require('../../../libs/models/Raffle');

const createRaffle = async (event, user = null) => {
  const data = JSON.parse(event.body);
  if ('postId' in data && 'title' in data) {
    const newRaffle = new Raffle({
      postId: data.postId,
      title: data.title,
      description: data.description ? data.description : '',
      owner: user,
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
