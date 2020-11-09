import { html, nothing } from 'https://unpkg.com/lit-html?module';

const instagramRaffleForm = () => {
  const error = null;

  return html`
    <div class="container">
      <section class="raffles">
        <h1>Sorteo de instagram</h1>
        
        <label for="url">Ingresar url de instagram</label><br />
            <input
              class="ourInput"
              name="url"
              type="url"
              placeholder="Ingresar url de instagram"
            />

        <div class="form-group">
            <button class="loginButton"> Comenzar </button>
          </div>

          ${error ? html`<p>${error.message}</p>` : nothing}
        </form>
      </section>
    </div>
  `;
};

export default instagramRaffleForm;
