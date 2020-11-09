import { html, nothing } from 'https://unpkg.com/lit-html?module';

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
      // TODO: Render error.
    }
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

          <button class="loginButton">Ingresar</button>
          ${error ? html`<p>${error.message}</p>` : nothing}
        </form>
      </section>
    </div>
  `;
};

export default loginForm;
