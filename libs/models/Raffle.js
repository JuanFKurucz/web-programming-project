const mongoose = require('mongoose');

const raffleSchema = new mongoose.Schema({
  postId: { type: String, required: true, unique: true, trim: true },
  title: { type: String, required: true, trim: true },
  description: { type: String, trim: true },
  winner: { type: String, trim: true },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});

raffleSchema.virtual('toFrontend').get(function () {
  return {
    title: this.title,
    description: this.description,
    postId: this.postId,
    winner: this.winner,
  };
});

const Raffle = mongoose.model('Raffle', raffleSchema);

module.exports = Raffle;
