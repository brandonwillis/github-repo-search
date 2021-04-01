import { gql } from '@apollo/client';

export const FETCH_USER_REPOS = gql`
query($login: String!) {
    repositoryOwner(login: $login) {
      ... on User {
        avatarUrl,
        name,
        repositories(first:100, orderBy: {field:STARGAZERS, direction: DESC}) {
          edges {
            node{
              name,
              id,
              url,
              description,
              primaryLanguage {
                name
              },
              forkCount,
              stargazerCount,
              issues(states: [OPEN]) {
                totalCount
              }
            }
          }
        }
      }
    	... on Organization{
        avatarUrl,
        name,
        repositories(first:100, orderBy: {field:STARGAZERS, direction: DESC}) {
          edges {
            node{
              name,
              id,
              url,
              description,
              primaryLanguage {
                name
              },
              forkCount,
              stargazerCount,
              issues(states: [OPEN]) {
                totalCount
              }
            }
          }
        }
      }
  }
}
`