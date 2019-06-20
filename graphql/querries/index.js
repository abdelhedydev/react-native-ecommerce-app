import gql from 'graphql-tag';

const GET_PRODUCTS = gql`
  {
  products{
    title
  }
}
`;
export default GET_PRODUCTS;
