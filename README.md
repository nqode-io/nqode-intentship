# nQode internship project

This project is created with [Create React App](https://github.com/facebook/create-react-app).
This is starter project for [nQode](https://nqode.io/) front end internship.

## Running project

Project is created using `npm` package manager, so for running it, you will need node installed on your machine.
To start project first move to project directory and then run:

```sh
npm install
npm start
```

This will install all necessary dependencies and run server in the development mode.

## Coding standards

- Component files:

  - All component files should be named in Pascal case (PascalCase), end with `.tsx` extension and be placed inside folder with corresponding `module.scss` file.

    **For example:** Navigation component should be inside folder named `Navigation` with two files `Navigation.tsx` and `Navigation.module.scss`

- Styles
  - For styling components Sass is used in combination with [BEM methodology](https://getbem.com/introduction/) and module files.
    Example for this is in `App.module.scss`

## Code style and format

Inside project there are `.eslint.json` and `.prettierrc` files created to enforce wanted code format and style.

Running `npm run lint` will check code for errors and running `npm run lint:fix` will fix all auto fixable errors.

Running `npm run format` will format code according to prettier configuration.

## Git flow

There should always be two branches `master` and `develop`. All tasks should be implemented on `feature` or `bug` branches. After finishing task, pull request should be opened.
