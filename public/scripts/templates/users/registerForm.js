import { html, nothing } from 'https://unpkg.com/lit-html?module';

import { setError } from '../../utils/session.js';

import { register } from '../../services/auth.js';

const validateEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const registerForm = () => {
  const error = null;

  const submitHandler = async (event) => {
    event.preventDefault();

    const username = event.target.username.value;
    const password = event.target.password.value;
    const passwordRepeated = event.target.password_verification.value;
    const email = event.target.email.value;

    if (!validateEmail(email)) {
      setError('El email es incorrecto');
    } else if (password !== passwordRepeated) {
      setError('Las contraseñas no coinciden');
    } else {
      try {
        await register(username, email, password);
      } catch (err) {
        setError('Usuario o email ya existente');
      }
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

          <button class="registerButton">
            Continuar
          </button>
          ${error ? html`<p>${error.message}</p>` : nothing}
        </form>
      </section>
    </div>
  `;
};

export default registerForm;
