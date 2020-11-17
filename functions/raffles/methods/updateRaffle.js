const {
  formatError,
  formatOutput,
} = require('../../../libs/utils/formatOutput');

const { Raffle } = require('../../../libs/models/index');

const updateRaffle = async (event) => {
  try {
    const data = JSON.parse(event.body);
    if ('id' in data) {
      const updateDict = {};
      if ('title' in data) {
        updateDict.title = data.title;
      }
      if ('description' in data) {
        updateDict.description = data.description;
      }
      const updatedRaffle = await Raffle.findByIdAndUpdate(
        data.id,
        updateDict,
        { new: true },
      );
      return formatOutput(200, updatedRaffle.toFrontend);
    }
    return formatError(400, 'Missing parameter (id)');
  } catch (e) {
    return formatError(500, 'Unexpected error');
  }
};

module.exports = updateRaffle;
