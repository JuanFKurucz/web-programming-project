const mongoose = require('mongoose');
const User = require('../../models/User.js');
const Raffle = require('../../models/Raffle.js');

describe('Raffle', () => {
  let raffle;

  beforeEach(() => {
    const user = new User({
      username: 'NombrePrueba ApellidoPrueba',
      password: 'unaPasswordSinHashear',
      email: 'mail@correo.com',
      accessToken: '167727272728',
      raffles: [],
    });

    raffle = new Raffle({
      postId: 123456,
      date: Date.now(),
      title: 'Title prueba',
      description: 'Description prueba',
      winner: 'Winner',
      owner: user,
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
        const user = new User({
          username: 'NombrePrueba ApellidoPrueba',
          password: 'unaPasswordSinHashear',
          email: 'mail@correo.com',
          accessToken: '167727272728',
          raffles: [],
        });

        const raffle2 = new Raffle({
          postId: 123456,
          date: Date.now(),
          title: 'Title prueba 2',
          description: 'Description prueba',
          winner: 'Winner',
          owner: user,
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
