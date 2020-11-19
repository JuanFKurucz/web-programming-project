# Facebook Graph API Wrapper

## Example usage

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

## Methods

### setAccessToken

Sets the access token of the user to use the following methods, recieves a token parameter

### getFacebookPages

Obtains a list of ids of Facebook Pages from the user facebook account.

### getInstagramId

Obtains an associated instagram account id with a facebook page

### getInstagramPosts

Retrieves a list of posts from an instagram account

### getInstagramPost

Retrieves an specific post by id

### getInstagramPostComments

Retrieves a list of comments from an instagram post
