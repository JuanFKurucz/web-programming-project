import { html } from 'https://unpkg.com/lit-html?module';
import { updateUser, getUser } from '../../services/users.js';

import { navigate } from '../../utils/navigation.js';
import { setInstagramPosts } from '../../utils/session.js';
import getPosts from '../../services/instagram.js';

const facebookForm = () => {
  const executeFacebookLogin = async () => {
    const user = await getUser();
    // eslint-disable-next-line
    FB.init({
      appId: '357885441930081',
      autoLogAppEvents: true,
      xfbml: true,
      version: 'v8.0',
    });
    // eslint-disable-next-line
    FB.login((response) => {
      if (response.authResponse) {
        // eslint-disable-next-line
        FB.api('/me', () => {
          // eslint-disable-next-line
          FB.getLoginStatus(async (response) => {
            if (response && response.status === 'connected') {
              try {
                const result = updateUser({
                  accessToken: response.authResponse.accessToken,
                });
                if (result) {
                  const instagramPosts = await getPosts();
                  setInstagramPosts(instagramPosts);
                  navigate('/instagramRaffleForm');
                }
              } catch (e) {
                if (user.hasAccessToken) {
                  navigate('/instagramRaffleForm');
                } else {
                  setTimeout(() => {
                    window.location.reload();
                  }, 1000);
                }
              }
            }
          });
        });
      } else if (user.hasAccessToken) {
        navigate('/instagramRaffleForm');
      } else {
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
    });
  };
  executeFacebookLogin();
  return html`<div class="container">
    <section class="raffles">
      <button
        type="button"
        @click=${executeFacebookLogin}
        class="raffles-button"
      >
        Iniciar sesion en Facebook
      </button>
    </section>
  </div>`;
};

export default facebookForm;
