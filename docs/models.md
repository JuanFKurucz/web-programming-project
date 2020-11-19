# Models

## User

### Columns

- username: username to log in
  - Type: String
  - Required: True
  - Unique: True
  - Additionally: trimmed
- password: password to log in
  - Type: String
  - Required: True
- email: email to be contacted
  - Type: String
  - Required: True
- accessToken: facebook accessToken
  - Type: String
  - Required: False
  - Additionally: default null
- raffles: relationship between user and raffles model.

### Properties

- toFrontend: retrives a json with `username` and `email` properties

## Raffle

### Columns

- postId: instagram post id
  - Type: String
  - Additionally: trimmed
- date: date of raffle creation
  - Type: String
  - Additionally: trimmed
- title: title of the raffle
  - Type: String
  - Additionally: trimmed
- description: description of the raffle
  - Type: String
  - Additionally: trimmed
- winner: name of the winner
  - Type: String
  - Additionally: trimmed and default null
- owner: relationship between raffle and user.

### Properties

- toFrontend: retrives a json with `id`, `date`, `title`, `description`, `postId` and `winner` properties
