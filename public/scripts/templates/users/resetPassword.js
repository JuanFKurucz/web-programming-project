import { html, nothing } from 'https://unpkg.com/lit-html?module';
import { navigate } from '../../utils/navigation.js';

const resetPassword = () => {
  const error = null;

  const submitHandler = async (event) => {
    event.preventDefault();
  };
  const submitHandlerResetPassword = (event) => {
    event.preventDefault();

    navigate('/login');
  };
  return html`
    <div class="container" ;>
      <section class="login">
        <h1>Ingrese su correo y nos pondremos en contacto</h1>
        <form @submit=${submitHandler}>
          <div class="form-group username">
            <label for="email">Correo</label><br />
            <input
              class="ourInput"
              name="email"
              type="text"
              placeholder="Ingresar su correo electronico"
            />
          </div>
          <button
            type="button"
            @click=${submitHandlerResetPassword}
            class="registerButton"
          >
            Continuar
          </button>
          ${error ? html`<p>${error.message}</p>` : nothing}
        </form>
      </section>
    </div>
  `;
};

export default resetPassword;
