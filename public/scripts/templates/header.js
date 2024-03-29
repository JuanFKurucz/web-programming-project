import { html } from 'https://unpkg.com/lit-html?module';
import { logOut } from '../services/auth.js';
import { setError } from '../utils/session.js';

const submitHandlerLogOut = async (event) => {
  event.preventDefault();
  try {
    await logOut();
  } catch (err) {
    setError('Error al desconetarse');
  }
};

const header = () => {
  return html`
    <header>
      <div class="navbar">
        <ul>
          <li><a>KuSilMo</a></li>
          <li><a href="/rafflesForm">Crear sorteo</a></li>
          <li><a href="/raffles">Sorteos finalizados</a></li>
          <li style="float:right">
            <a href="#" @click=${submitHandlerLogOut}>Salir</a>
          </li>
        </ul>
      </div>
    </header>
  `;
};
export default header;
