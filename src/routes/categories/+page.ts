
import { sendQuery } from '@/utils/api';

const gql = String.raw;
const query = gql`
		query getCategories {
			categories(where: { hideEmpty: true, orderby: TERM_ORDER }) {
				nodes {
					name
					uri
					description
				}
			}
		}
	`;

export async function load() {
	const { categories } = await sendQuery(query);

	return {
		categories: categories.nodes
	};
}
