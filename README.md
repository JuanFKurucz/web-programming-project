# proyecto-4

## Facebook Graph API Wrapper

Example usage:

```js
const init = async () => {
  api.setAccessToken(token);
  const pages = await api.getFacebookPages();
  for (let page = 0; page < pages.length; page++) {
    const instagramId = await api.getInstagramId(pages[page]);
    if (instagramId) {
      const posts = await api.getInstagramPosts(instagramId);
      for (let post = 0; post < posts.length; post++) {
        const comments = await api.getInstagramPostComments(posts[post]);
        console.log(comments);
      }
    }
  }
};
```
