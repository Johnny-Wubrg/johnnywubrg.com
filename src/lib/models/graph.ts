export interface GraphQuery<TRequest, TResponse> extends String {}

export interface GraphNode<T> {
	node: T;
}

export interface GraphNodes<T> {
	nodes: T[];
}

export type GraphMutationResponse<TKey extends string, TModel> = {
	clientMutationId: string;
	success: boolean;
} & {
	[key in TKey]: TModel;
};

export type GraphQueryResponse<TKey extends string, TModel> = {
	[key in TKey]: TModel;
};
export type GraphResponse<TKey extends string, TModel> =
	| GraphQueryResponse<TKey, TModel>
	| GraphMutationResponse<TKey, TModel>;
