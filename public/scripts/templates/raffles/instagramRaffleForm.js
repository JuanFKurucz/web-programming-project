import { html } from 'https://unpkg.com/lit-html?module';

import resolvePromise from '../../directives/resolvePromise.js';
import { navigate } from '../../utils/navigation.js';
import { parseDate } from '../../utils/date.js';
import { setError } from '../../utils/session.js';

import getInstagramPosts from '../../services/instagram.js';
import { createRaffle } from '../../services/raffles.js';

const raffleItems = (raffle) => {
  const handleCreateRaffle = async () => {
    try {
      await createRaffle('', raffle.id);
      navigate('/winRaffle');
    } catch (e) {
      setError('Sorteo ya creado');
    }
  };
  const date = new Date(raffle.timestamp);

  let buttonCreate = html`<button
    class="raffles-button button-inside-container"
    @click=${handleCreateRaffle}
  >
    Ejecutar sorteo
  </button>`;

  if (raffle.comments_count === 0) {
    buttonCreate = html`Espera a tener mas comentarios`;
  }

  return html`<div>
    <img
      class="instagramPic"
      src=${raffle.media_url}
      alt=${raffle.title}
      title=${raffle.title}
    />
    <p>Comentarios: ${raffle.comments_count}</p>
    <p>
      Fecha de publiacion: ${parseDate(date, true)}
    </p>
    ${buttonCreate}
  </div>`;
};

const listRaffles = () => {
  const fetchRaffles = async () => {
    const { data } = await getInstagramPosts();

    if (data.length === 0) {
      return html`<p>No tienes ningun sorteo</p>`;
    }

    return html`<div class="grid">
      ${data.map(raffleItems)}
    </div>`;
  };
  return html` <div class="container">
    <section class="raffles">
      ${resolvePromise(fetchRaffles())}
    </section>
  </div>`;
};

export default listRaffles;
