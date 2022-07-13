import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
  query characters($filter: FilterCharacter, $page: Int) {
    characters(filter: $filter, page: $page) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        status
        species
        type
        gender
        origin {
          id
          name
          type
          dimension
        }
        location {
          id
          name
          type
          dimension
        }
        image
        episode {
          id
          name
        }
      }
    }
  }
`;
