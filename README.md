# README

This repository has all the code necessary for starting a React on Rails application with Redux including testing. To get started, just clone the repository down and get started using
React on Rails like you normally would.

## Areas in the Boilerplate to Update
Be sure to search `boilerplate` within your project and update any references to boilerplate with the name of your application. If you do not follow this step, your application may not behave the way that you expect it to.

## Technologies
* Rails
* React
* Redux
* React Router
* Karma/Jasmine testing

## Setup
To get set up, run the following

```no-highlight
  bundle
  rake db:create
  rails s
```

In a separate terminal tab, run:

```no-highlight
  yarn
  yarn start
```

And navigate to `localhost:3000`.

To run your ruby tests, run `rake` or `rspec`.

To run your Enzyme tests, run `yarn test`.
