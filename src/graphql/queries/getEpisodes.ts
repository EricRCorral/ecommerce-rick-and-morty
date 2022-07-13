import { gql } from "@apollo/client";

export const GET_EPISODES = gql`
  query episodes($filter: FilterEpisode, $page: Int) {
    episodes(filter: $filter, page: $page) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        air_date
        episode
        characters {
          id
          name
        }
      }
    }
  }
`;
