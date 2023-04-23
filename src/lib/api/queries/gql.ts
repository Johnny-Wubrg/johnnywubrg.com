import type { GraphQuery } from '$lib/models';

export const gql = <T>(...args: Parameters<typeof String.raw>) =>
	String.raw(...args) as GraphQuery<T>;
