export type Movie = {
	adults: boolean;
	backdrop_path: string;
	genre_ids: number[];
	id: number;
	orginal_language: string;
	orginal_title: string;
	overview: string;
	popularity: number;
	poster_path?: string;
	release_date: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
	title: string;
	name: string;
};

export type SearchResults = {
	page: number;
	results: Movie[];
	total_pages: number;
	total_results: number;
};

export type Genre = {
	id: number;
	name: string;
};
export type Genres = {
	genres: Genre[];
};
