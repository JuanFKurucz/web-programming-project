import { html } from 'https://unpkg.com/lit-html?module';

const headerUnlogged = () => {
  return html`
    <header>
      <div class="navbar">
        <ul>
          <li><a>KuSilMo</a></li>
          <li><a href="/login">Conectarse</a></li>
          <li><a href="/register">Registrarse</a></li>
        </ul>
      </div>
    </header>
  `;
};
export default headerUnlogged;
