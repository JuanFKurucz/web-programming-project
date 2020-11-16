import { html } from 'https://unpkg.com/lit-html?module';

const facebookForm = () => {
  return html`<script>
      window.fbAsyncInit = function () {
        FB.init({
          appId: '357885441930081',
          autoLogAppEvents: true,
          xfbml: true,
          version: 'v8.0',
        });

        FB.login(function (response) {
          if (response.authResponse) {
            console.log('Welcome!  Fetching your information.... ');
            FB.api('/me', function (response) {
              console.log(response);
              console.log('Good to see you, ' + response.name + '.');
              FB.getLoginStatus(function (response) {
                console.log(response);
              });
            });
          } else {
            console.log('User cancelled login or did not fully authorize.');
          }
        });
      };
    </script>
    <script
      async
      defer
      crossorigin="anonymous"
      src="https://connect.facebook.net/en_US/sdk.js"
    ></script> `;
};

export default facebookForm;
