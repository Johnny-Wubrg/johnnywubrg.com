import type { GraphQuery } from '$lib/models';

type Gql = {
	<TResponse>(...args: Parameters<typeof String.raw>): GraphQuery<{}, TResponse>;
	<TRequest, TResponse>(...args: Parameters<typeof String.raw>): GraphQuery<TRequest, TResponse>;
};

export const gql: Gql = String.raw;
