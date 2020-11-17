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

const parseQuery = (queryString) => {
  const query = {};
  const pairs = (queryString[0] === '?'
    ? queryString.substr(1)
    : queryString
  ).split('&');
  for (let i = 0; i < pairs.length; i += 1) {
    const pair = pairs[i].split('=');
    query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
  }
  return query;
};

// eslint-disable-next-line import/prefer-default-export
export { navigate, parseQuery };
