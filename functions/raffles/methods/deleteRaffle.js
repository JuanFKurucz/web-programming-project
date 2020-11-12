const {
  formatError,
  formatOutput,
} = require('../../../libs/utils/formatOutput');

const Raffle = require('../../../libs/models/Raffle');

const deleteRaffle = async (event, user) => {
  if (user) {
    try {
      const data = JSON.parse(event.body);
      if ('id' in data) {
        await Raffle.findByIdAndRemove(data.id);
      }
      return formatOutput(200, {});
    } catch (e) {
      return formatError(500, 'Unexpected error');
    }
  }
  return formatError(404, 'User not found');
};

module.exports = deleteRaffle;
