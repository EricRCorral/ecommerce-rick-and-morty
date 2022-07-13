import { gql } from "@apollo/client";

export const GET_LOCATIONS = gql`
  query locations($filter: FilterLocation, $page: Int) {
    locations(filter: $filter, page: $page) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        type
        dimension
        residents {
          id
          name
        }
      }
    }
  }
`;
