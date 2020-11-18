const mongoose = require('mongoose');

const raffleSchema = new mongoose.Schema({
  postId: { type: String, trim: true },
  date: { type: Date, trim: true },
  title: { type: String, trim: true },
  description: { type: String, trim: true },
  winner: { type: String, trim: true, default: null },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});

raffleSchema.index(
  { postId: 1, owner: 1 },
  { unique: true, partialFilterExpression: { postId: { $type: 'string' } } },
);

raffleSchema.virtual('toFrontend').get(function () {
  return {
    id: this.id,
    date: this.date,
    title: this.title,
    description: this.description,
    postId: this.postId,
    winner: this.winner,
  };
});

raffleSchema.pre('remove', async function () {
  this.model('User').update();
});

const Raffle = mongoose.model('Raffle', raffleSchema);

module.exports = Raffle;
