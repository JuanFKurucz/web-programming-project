import { html } from 'https://unpkg.com/lit-html?module';
import { updateUser } from '../services/users.js';

import { navigate } from '../utils/navigation.js';
import { setInstagramPosts } from '../utils/session.js';
import getPosts from '../services/instagram.js';

const facebookForm = () => {
  const executeFacebookLogin = () => {
    // eslint-disable-next-line
    FB.init({
      appId: '357885441930081',
      autoLogAppEvents: true,
      xfbml: true,
      version: 'v8.0',
    });
    // eslint-disable-next-line
    FB.login(
      (response) => {
        if (response.authResponse) {
          // eslint-disable-next-line
          FB.api('/me', () => {
            // eslint-disable-next-line
            FB.getLoginStatus(async (response) => {
              if (response && response.status === 'connected') {
                const result = await updateUser({
                  accessToken: response.authResponse.accessToken,
                });
                if (result) {
                  const instagramPosts = await getPosts();
                  setInstagramPosts(instagramPosts);
                  navigate('/instagramRaffleForm');
                }
              }
            });
          });
        }
      },
      {
        scope:
          'email,user_likes,business_management,instagram_basic,instagram_manage_comments,instagram_manage_insights,pages_show_list',
      },
    );
  };
  executeFacebookLogin();
  return html`<div class="container">
    <section class="raffles">
      Loading...
    </section>
  </div>`;
};

export default facebookForm;
