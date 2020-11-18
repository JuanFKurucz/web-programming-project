const mongoose = require('mongoose');

const User = require('../../models/User.js');

describe('User', () => {
  let user;

  beforeEach(() => {
    user = new User({
      username: 'usuario',
      password: 'unaPasswordSinHashear',
      email: 'noemail',
      accessToken: '167727272728',
      raffles: [],
    });
  });

  test('is saved successfully', async () => {
    const savedUser = await user.save();
    expect(savedUser).toMatchObject(user);
  });

  describe('fields', () => {
    describe('username', () => {
      test("doesn't allow duplicates", async () => {
        expect.assertions(2);

        const user2 = new User({
          username: 'usuario',
          password: 'unaPasswordSinHashear',
          email: 'noemail',
          accessToken: '167727272728',
          raffles: [],
        });

        try {
          await user.save();
          await user2.save();
        } catch (err) {
          expect(err.name).toBe('MongoError');
          expect(err.code).toBe(11000);
        }
      });
    });

    test('has a name virtual field', () => {
      const user2 = new User({
        username: 'NombrePrueba ApellidoPrueba',
        password: 'unaPasswordSinHashear',
        email: 'mail@correo.com',
        accessToken: '167727272728',
        raffles: [],
      });
      expect(user2.username).toBe('NombrePrueba ApellidoPrueba');
    });
  });

  describe('validation', () => {
    test('passes if all required fields are present', async () => {
      await user.validate();
    });

    test('fails if users name is empty', async () => {
      expect.assertions(1);

      user.username = undefined;
      try {
        await user.validate();
      } catch (err) {
        expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
      }
    });

    test('fails if email is empty', async () => {
      expect.assertions(2);

      user.email = undefined;
      try {
        await user.validate();
      } catch (err) {
        expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
        expect(err.errors.email).toBeDefined();
      }
    });

    test('fails if password is empty', async () => {
      expect.assertions(2);

      user.password = undefined;
      try {
        await user.validate();
      } catch (err) {
        expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
        expect(err.errors.password).toBeDefined();
      }
    });
  });
});
