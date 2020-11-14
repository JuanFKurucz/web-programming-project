import { html, nothing } from 'https://unpkg.com/lit-html?module';

import { navigate } from '../utils/navigation.js';

import { logIn } from '../services/auth.js';

const loginForm = () => {
  const error = null;

  const submitHandler = async (event) => {
    event.preventDefault();

    const username = event.target.username.value;
    const password = event.target.password.value;

    try {
      await logIn(username, password);
    } catch (err) {
      throw new Error('Oops! Something went wrong...');
    }
  };

  const submitHandlerRegister = (event) => {
    event.preventDefault();

    navigate('/register');
  };

  return html`
    <div class="container" ;>
      <section class="login">
        <h1>Ingresar</h1>
        <form @submit=${submitHandler}>
          <div class="form-group username">
            <label for="username">Usuario</label><br />
            <input
              class="ourInput"
              name="username"
              type="text"
              placeholder="Ingresar su usuario"
            />
          </div>

          <div class="form-group password">
            <label for="password">Contraseña</label><br />
            <input
              class="ourInput"
              name="password"
              type="password"
              placeholder="Ingresar su contraseña"
            />
          </div>
          <div class="form-group">
            <div>
              <button class="loginButton">Ingresar</button>
            </div>
            <div>
              <p>
                <a class="url" href="register">Olvide mi contraseña</a>
              </p>
            </div>
            <button
              type="button"
              @click=${submitHandlerRegister}
              class="registerButton"
            >
              Registrarse
            </button>
          </div>
          ${error ? html`<p>${error.message}</p>` : nothing}
        </form>
      </section>
    </div>
  `;
};

export default loginForm;
