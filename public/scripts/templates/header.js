import { html } from 'https://unpkg.com/lit-html?module';
import { logOut } from '../services/auth.js';

const submitHandlerLogOut = async (event) => {
  event.preventDefault();
  try {
    await logOut();
  } catch (err) {
    throw new Error('Oops! Something went wrong...');
  }
};

const header = () => {
  return html`
    <header>
      <button type="button" @click=${submitHandlerLogOut}>
        Salir
      </button>
    </header>
  `;
};
export default header;
