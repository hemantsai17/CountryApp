import { gql } from "@apollo/client";

export const CONTINENT_QUERY = gql`
 query Query {
  countries {
    name
    emoji
    currency
    native
    code
    languages {
      name
    }
    continent {
      name
    }
  }
}`;