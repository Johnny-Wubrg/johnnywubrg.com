export interface GraphQuery<T> extends String {}

export interface GraphNode<T> {
	node: T;
}

export interface GraphNodes<T> {
	nodes: T[];
}



export type GraphMutationResponse<TKey extends string, T> = {
  clientMutationId: string;
  success: boolean;
} & {
  [key in TKey]: T;
}

export type GraphQueryResponse<TKey extends string, T>  = {
  [key in TKey]: T;
};
