const mongoose = require('mongoose');

const User = require('../../models/User.js');

describe('User', () => {
  let user;

  beforeEach(() => {
    user = new User({
      user: 'NombrePrueba ApellidoPrueba',
      password: 'unaPasswordSinHashear',
      email: 'mail@correo.com',
      token: '167727272728',
    });
  });

  test('is saved successfully', async () => {
    const savedUser = await user.save();
    expect(savedUser).toMatchObject(user);
  });

  describe('fields', () => {
    describe('email', () => {
      test("doesn't allow duplicates", async () => {
        expect.assertions(2);

        await user.save();

        const user2 = new User({
          name: 'NombrePrueba ApellidoPrueba',
          email: 'mail@correo.com',
          password: 'unaPasswordSinHashear',
          image: '/ruta/a/imagen.jpg',
        });
        try {
          await user2.save();
        } catch (err) {
          expect(err.name).toBe('MongoError');
          expect(err.code).toBe(11000);
        }
      });
    });

    /* Ideas para la password
    describe('password', () => {
        test('is hashed before saving', async() => {
            const plaintextPassword = user.password;
            const savedUser = await user.save();
            expect(savedUser.password).not.toBe(plaintextPassword);
        });

        test('matches when comparing to original plain-text password', async() => {
            const plaintextPassword = user.password;
            const savedUser = await user.save();
            const matches = await savedUser.comparePassword(plaintextPassword);
            expect(matches).toBe(true);
        });

        test("doesn't match when comparing to wrong plain-text password", async() => {
            const savedUser = await user.save();
            const matches = await savedUser.comparePassword('wrong');
            expect(matches).toBe(false);
        });
    });
*/
    test('has a name virtual field', () => {
      expect(user.name).toBe('NombrePrueba ApellidoPrueba');
    });
  });

  describe('validation', () => {
    test('passes if all required fields are present', async () => {
      await user.validate();
    });

    test('fails if users name is empty', async () => {
      expect.assertions(2);

      user.name = undefined;
      try {
        await user.validate();
      } catch (err) {
        expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
        expect(err.errors.name).toBeDefined();
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

    test('fails if token is empty', async () => {
      expect.assertions(2);

      user.token = undefined;
      try {
        await user.validate();
      } catch (err) {
        expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
        expect(err.errors.image).toBeDefined();
      }
    });
  });
});
