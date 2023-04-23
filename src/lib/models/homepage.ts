import type { GraphQueryResponse } from './graph';
import type { PostsQueryResponse } from './posts';
import type { GeneralSettings } from './settings';

export interface FeaturedCard {
	label: string;
	card_name: string;
	image: string;
	post_uri: string;
	post_title: string;
	archive_uri: string;
}

export type HomepageQueryResponse =
  PostsQueryResponse &
	GraphQueryResponse<'featuredCard', FeaturedCard> &
	GraphQueryResponse<'generalSettings', GeneralSettings>;
