import { html, nothing } from 'https://unpkg.com/lit-html?module';
import { navigate } from '../../utils/navigation.js';
import { createRaffle } from '../../services/raffles.js';

const rafflesByNamesForm = () => {
  const error = null;

  const submitHandler = async (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const participantslist = event.target.participants.value;
    try {
      await createRaffle(title, null, participantslist);
    } catch (err) {
      throw new Error('Oops! Something went wrong...');
    }
    navigate('/winRaffle');
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
            <label for="participants">Nombres (separados por coma)</label><br />
            <input
              class="ourInput"
              name="participants"
              type="text"
              placeholder="Ingresar los nombres de los participantes"
            />
          </div>
          <button type="submit" class="raffles-button">
            Generar ganador
          </button>
          ${error ? html`<p>${error.message}</p>` : nothing}
        </form>
      </section>
    </div>
  `;
};

export default rafflesByNamesForm;
