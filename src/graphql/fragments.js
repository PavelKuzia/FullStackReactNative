import { gql } from '@apollo/client';

export const ALL_REPOSITORY_FIELDS = gql `
  fragment All_Repository_Fields on Repository {
        ownerAvatarUrl
        fullName
        description
        language
        reviewCount
        ratingAverage
        stargazersCount
        forksCount
  }
`