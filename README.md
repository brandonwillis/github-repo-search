# Getting Started

## Purpose of This App

Github Search that return's a user's most starred repositories

## To Run This App

Pull down this repo and cd into directory

Run `yarn` to build dependencies

Run `yarn start` and open [http://localhost:3000] in browser

#### Using GitHub GraphQL API

By default this application uses the GitHub's REST API v3

Please note, in order to use GitHub's GraphQL API v4:

https://docs.github.com/en/graphql/guides/forming-calls-with-graphql

1) Follow steps above to create a token
2) Create .env.local file in the root directory and assign your token to a variable called **REACT_APP_GITHUB_TOKEN**
3) Go to SearchContext.js and set the default **graphQLSelected** state to true

## To Test this App

Run `yarn test` to launch the test runner

## If I Had More Time

Pagination for search results

Sort by other criteria 

Better error handling

UI and styling