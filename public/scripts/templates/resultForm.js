import { html, nothing } from 'https://unpkg.com/lit-html?module';

const resultForm = () => {
  const error = null;

  return html`
    <div class="container">
      <section class="raffles">
        <h1>El ganador del sorteo es</h1>

        ${error ? html`<p>${error.message}</p>` : nothing}
      </section>
    </div>
  `;
};

export default resultForm;
