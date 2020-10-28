import { html, nothing } from 'https://unpkg.com/lit-html?module';

const rafflesByNamesForm = () => {
  const error = null;

  const submitHandler = async (event) => {
    event.preventDefault();

    // const listNames = event.target.names.value;
  };

  return html`
    <div class="container">
      <section class="login">
        <h1>Sorteo por ingreso de nombres</h1>
        <form @submit=${submitHandler}>
          <div class="form-group">
            <label for="title">Titulo</label><br />
            <input
              class="ourInput"
              name="title"
              type="text"
              placeholder="Ingresar un Titulo"
            />
          </div>

          <div class="form-group password">
            <label for="names">Nombres </label><br />
            <input
              class="ourInput"
              name="names"
              type="names"
              placeholder="Ingresar los nombres de los participantes"
            />
          </div>

          <button class="loginButton">Comenzar</button>
          ${error ? html`<p>${error.message}</p>` : nothing}
        </form>
      </section>
    </div>
  `;
};

export default rafflesByNamesForm;
