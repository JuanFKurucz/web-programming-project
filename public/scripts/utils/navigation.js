/**
 * Custom event fired on navigation.
 */
const navEvent = new CustomEvent('nav');

const navigate = async (path) => {
  window.history.pushState({}, '', path);
  window.dispatchEvent(navEvent);
};

document.addEventListener(`click`, (e) => {
  const origin = e.target.closest('a');

  if (origin && window.location.hostname === origin.hostname) {
    e.preventDefault();
    navigate(origin.pathname);
  }
});

// eslint-disable-next-line import/prefer-default-export
export { navigate };
