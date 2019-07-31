# FxRates Test

This project was generated with [Facebook Create React App](https://github.com/facebook/create-react-app)

## 1.- Clone repo
  `git clone https://github.com/the-vladman/fxRates.git`

## 2.- Install Dependencies

  `cd tasks && npm install or yarn`

## 3.- Set Env

  `cp .env.example .env`
  Change the value for `REACT_APP_API_KEY` with a valid key of [Fixer](https://fixer.io/)

## 4.- Run Serve

Run `npm start or yarn start` for a dev server. Navigate to `http://localhost:3000/`. The app will automatically reload if you change any of the source files.

## 5.- Build App

Run `npm run build or yarn build` for builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

Can use Dockerfile for quick process for production
`docker build --no-cache -t [tag-image] .`
`docker run --name [name container] -d -p [exposed port]:80 [tag-image]`