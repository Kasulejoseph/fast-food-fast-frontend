# fast-food-fast-frontend
UI to power api

[![Build Status](https://travis-ci.com/Kasulejoseph/fast-food-fast-frontend.svg?branch=react-redux-branch)](https://travis-ci.com/Kasulejoseph/fast-food-fast-frontend)
[![Maintainability](https://api.codeclimate.com/v1/badges/e4c6c019922882371c2b/maintainability)](https://codeclimate.com/github/Kasulejoseph/fast-food-fast-frontend/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/e4c6c019922882371c2b/test_coverage)](https://codeclimate.com/github/Kasulejoseph/fast-food-fast-frontend/test_coverage)
# Description.
This repository is the react version of fast food fast. Fast food fast is a web-based application that allows users to order for meals at their convenience and be delivered with in the shortest time possible. Users should login via the login page and order for meals of their choice.
Find the hosted app [here](https://fast-foods-react-redux.herokuapp.com/)

## Folder Structure.
```
fast food fast react
│   README.md
│   .gitignore
│   package.json
│   travis.yml
|   server.js
|   Procfile
|   webpack.config.js
|   .babelrc
│   yarn.lock
│
└───public
|   |   index.html 
|   |...
└───src
│   │   index.js
|   |   App.js
|   |  store.js
│   │
│   └───components
│   |   │   components
│   |   │   ...
│   │
│   └───containers
│   |   │   components
│   |   │   ...
|   |   |
│   └───actions
│   |   │   action.js
│   |   │   ...
|   |____router
|   |   |___ router.js
│   │
│   └───reducers
│       │   reducer1.js
│       │   ...
```

## Documentation.
|           End Point                      |     Resource Accessed    |   Access   | Requirements|
|   -------------------------------------- |-----------------------|------------|-------------|
|     /signup               | Register a user   |   PUBLIC   | username, email, password
|     /login       | Login a user   |   PUBLIC | username, password, role |
|    /addmenu  | Add a meal to the menu.    |   ADMIN   | menu_id

### Dependencies

- Install NodeJs

### Getting Started

- Clone the repository locally

  `git clone https://github.com/andela/fast-food-fast-react.git`

- Go to the repo directory

  `cd fast-food-fast-react`

- Install the dependencies.

  run `yarn `

- start the application.

  `yarn start`

## Testing

  `yarn test
