export const saleTypeDef = `
  type Sale {
      id: Int!
      date: String!
      value: Int!
      product_id: Int!
  }
  input SaleInput {
      date: String!
      value: Int!
      product_id: Int! 
  }`;

export const saleQueries = `
      allSales: [Sale]!
      saleById(id: Int!): Sale!
  `;

export const saleMutations = `
    createSale(sale: SaleInput!): Sale!
    updateSale(id: Int!, sale: SaleInput!): Sale!
    deleteSale(id: Int!): Int
`;
