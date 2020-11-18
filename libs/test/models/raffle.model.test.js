const mongoose = require('mongoose');

const Raffle = require('../../models/Raffle.js');

describe('Raffle', () => {
  let raffle;

  beforeEach(() => {
    raffle = new Raffle({
      postId: 123456,
      title: 'Title prueba',
      description: 'Description prueba',
      winner: 'Winner',
    });
  });

  test('is saved successfully', async () => {
    const savedRaffle = await raffle.save();
    expect(savedRaffle).toMatchObject(raffle);
  });

  describe('fields', () => {
    describe('postId', () => {
      test("doesn't allow duplicates", async () => {
        expect.assertions(0);

        await raffle.save();

        const raffle2 = new Raffle({
          postId: 123456,
          title: 'Title prueba',
          description: 'Description prueba',
          winner: 'Winner',
          owner: 'Owner ',
        });

        try {
          await raffle2.save();
        } catch (err) {
          expect(err.name).toBe('MongoError');
          expect(err.code).toBe(11000);
        }
      });
    });

    test('fails if raffles postId is empty', async () => {
      expect.assertions(1);

      raffle.postId = undefined;
      try {
        await raffle.validate();
      } catch (err) {
        expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
      }
    });
  });
});
