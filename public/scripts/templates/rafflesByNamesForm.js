import { html, nothing } from 'https://unpkg.com/lit-html?module';
import { navigate } from '../utils/navigation.js';
import { post, patch } from '../utils/api.js';

const rafflesByNamesForm = () => {
  const error = null;

  const submitHandler = (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const participantslist = event.target.participants.value;
    const end = true;
    try {
      post('/raffles', {
        title,
      });
      const result = patch('/raffles', {
        end,
        participantslist,
      });
      console.log(result);
    } catch (err) {
      throw new Error('Oops! Something went wrong...');
    }
    navigate('/resultForm');
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
            <label for="participants">Nombres </label><br />
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
