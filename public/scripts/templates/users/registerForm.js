import { html, nothing } from 'https://unpkg.com/lit-html?module';

import { register } from '../../services/auth.js';

const registerForm = () => {
  const error = null;

  const submitHandler = async (event) => {
    event.preventDefault();

    const username = event.target.username.value;
    const password = event.target.password.value;
    const email = event.target.email.value;

    try {
      await register(username, email, password);
    } catch (err) {
      throw new Error('Oops! Something went wrong...');
    }
  };

  return html`
    <div class="container" ;>
      <section class="login">
        <h1>Regístrate</h1>
        <form @submit=${submitHandler}>
          <div class="form-group username">
            <label for="username">Usuario</label><br />
            <input
              class="ourInput"
              name="username"
              type="text"
              placeholder="Ingresar su nombre de usuario"
            />
          </div>
          <div class="form-group username">
            <label for="email">Email</label><br />
            <input
              class="ourInput"
              name="email"
              type="text"
              placeholder="Ingresar su correo electronico"
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

          <div class="form-group password">
            <label for="password">Repita su contraseña</label><br />
            <input
              class="ourInput"
              name="password_verification"
              type="password"
              placeholder="Ingresar su contraseña nuevamente"
            />
          </div>

          <button class="registerButton">Continuar</button>
          ${error ? html`<p>${error.message}</p>` : nothing}
        </form>
      </section>
    </div>
  `;
};

export default registerForm;
