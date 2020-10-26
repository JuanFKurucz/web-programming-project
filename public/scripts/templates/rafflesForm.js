import { html, nothing } from 'https://unpkg.com/lit-html?module';

const rafflesForm = () => {
  const error = null;

  return html`
    <div class="container">
      <section class="raffles">
        <h1>Crear un nuevo sorteo</h1>
        
          <div class="form-group raffles">
            <button
              class="raffles-button"
              name="Instagram">
              Ingresar su usuario
            </button>
          </div>

          <div class="form-group raffles">
            <button
              class="raffles-button"
              name="Listado por nombres">
              Ingresar su contraseña
              </button>
          </div>

          ${error ? html`<p>${error.message}</p>` : nothing}
        </form>
      </section>
    </div>
  `;
};

export default rafflesForm;
