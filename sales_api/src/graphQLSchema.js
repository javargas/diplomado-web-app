import merge from 'lodash.merge';
import GraphQLJSON from 'graphql-type-json';
import { makeExecutableSchema } from 'graphql-tools';

import { mergeSchemas } from './utilities';

import {
	saleMutations,
	saleQueries,
	saleTypeDef
} from './sales/sales/typeDefs';

import saleResolvers from './sales/sales/resolvers';

// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
	[
		'scalar JSON',
		saleTypeDef
	],
	[
		saleQueries
	],
	[
		saleMutations
	]
);

// Generate the schema object from your types definition.
export default makeExecutableSchema({
	typeDefs: mergedTypeDefs,
	resolvers: merge(
		{ JSON: GraphQLJSON }, // allows scalar JSON
		saleResolvers
	)
});
