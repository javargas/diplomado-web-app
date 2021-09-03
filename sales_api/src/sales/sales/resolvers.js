import { generalRequest, getRequest } from '../../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		allSales: (_) =>
			getRequest(URL, ''),
		saleById: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'GET'),
	},
	Mutation: {
		createSale: (_, { sale }) =>
			generalRequest(`${URL}/`, 'POST', sale),
		updateSale: (_, { id, sale }) =>
			generalRequest(`${URL}/${id}`, 'PUT', sale),
		deleteSale: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'DELETE')
	}
};

export default resolvers;
