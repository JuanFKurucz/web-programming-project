import { html, nothing } from 'https://unpkg.com/lit-html?module';

const rafflesForm = () => {
  const error = null;

  return html`
    <div class="container">
      <section class="raffles">
        <h1>Crear un nuevo sorteo</h1>
        
        <div class="form-group">
            <button class="raffles-button"> Instagram </button>
        </div>
        <div class="form-group">
            <button class="raffles-button"> Listado por nombres </button>
          </div>

          ${error ? html`<p>${error.message}</p>` : nothing}
        </form>
      </section>
    </div>
  `;
};

export default rafflesForm;
