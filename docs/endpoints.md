# Endpoints

## instagram

**Path: `api/instagram`**

### getPosts

- Method: GET
- Query parameters: None
- Path parameters: None
- Body parameters: None
- Login required: True

**Description:** Returns a list of Instagram posts following the next structure:

```
{
    "data":
    [
        {
            "comments_count":<NUMBER OF COMMENTS>,
            "timestamp": <DATE OF POST>,
            "media_type":<MEDIA TYPE>,
            "media_url":<MEDIA URL>,
            "id":<INSTAGRAM POST ID>
        }
    ]
}
```

## raffles

**Path: `api/raffles`**

### createRaffle

- Method: POST
- Query parameters: None
- Path parameters: None
- Body parameters:
    - `postId`: optional (instagram post id)
    - `listNames`: optional (list of participants separated by comma, expected when there is no postId)
    - `title`: raffle name
    - `description`: raffle description
- Login required: True

**Description:** Creates a raffle if a postId is provided it gets the Instagram information of the post and then get the comments to use them as participants, if not it uses the listNames to get the participants. With the participants, it selects a winner randomly. Returns the information of the raffle.

### deleteRaffle

- Method: DELETE
- Query parameters: None
- Path parameters: None
- Body parameters:
    - `id`: raffle id
- Login required: True

**Description:** deletes the raffle

### getRaffles

- Method: GET
- Query parameters: None
- Path parameters: None
- Body parameters: None
- Login required: True

**Description:** lists the user raffles if the raffle is an Instagram post retrieves additional information from the post in a `data` attribute, it follows the same structure from `instagram/getPosts`

### updateRaffles

- Method: PATCH
- Query parameters: None
- Path parameters: None
- Body parameters:
    - `id`: raffle id
    - `title`: new raffle name
    - `description`: new raffle description
    - `end`: if present it selects a winner
    - `listNames`: if `end` is present and the raffle is not an Instagram raffle it's expected to receive this parameter with the list of participants separated by commas.
- Login required: True

**Description:** updates a raffle, if the parameter end is passed it also selects a winner. Returns new raffle information.

## users

**Path: `api/users`**

### createUser

- Method: POST
- Query parameters: None
- Path parameters: None
- Body parameters:
    - `username`: user username
    - `password`: user password
    - `email`: user email
- Login required: False

**Description:** Creates a user in the database, sends a welcome email if the email is a valid one. Returns user information.

### deleteUser

- Method: DELETE
- Query parameters: None
- Path parameters: None
- Body parameters:
- Login required: True

**Description:** deletes the current logged user, returns empty.

### getUser

- Method: GET
- Query parameters: None
- Path parameters: None
- Body parameters: None
- Login required: True

**Description:** gets current logged user information, returns the user information.

### updateUser

- Method: PATCH
- Query parameters: None
- Path parameters: None
- Body parameters:
    - `password`: new password
    - `accessToken`: new Facebook accessToken
- Login required: True

**Description:** updates current logged user, returns the new information.

## sessions

**Path: `api/sessions`**

- Method: POST
- Query parameters: None
- Path parameters: None
- Body parameters:
    - `username`: username
    - `password`: password
- Login required: False

**Description:** endpoint to log in the user, returns a JWT token.
