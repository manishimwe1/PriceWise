import { Genres, SearchResults } from "@/typings";

const fetchFromTMDB = async (
	url: URL,
	page?: number,
	cacheTime?: number,
) => {
	url.searchParams.set("include_adult", "true");
	url.searchParams.set("include_video", "true");
	url.searchParams.set("sort_by", "popularity.desc");
	url.searchParams.set(
		"include_null_first_air_dates",
		"false",
	);
	url.searchParams.set("language", "en-us");
	url.searchParams.set("page", `${page ? page : 1}`);

	const options = {
		method: "GET",
		headers: {
			accept: "application/json",
			Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
		},
		next: {
			revalidate: cacheTime || 60 * 60 * 24, //24hors
		},
	};
	const response = await fetch(url.toString(), options);
	const data = (await response.json()) as SearchResults;

	return data;
};

export async function getUpcomingMovies() {
	const url = new URL(
		"https://api.themoviedb.org/3/movie/upcoming",
	);
	const data = await fetchFromTMDB(url);

	return data.results;
}
export async function getTopRatedMovies() {
	const url = new URL(
		"https://api.themoviedb.org/3/movie/top_rated",
	);
	const data = await fetchFromTMDB(url);

	return data.results;
}
export async function getPopularMovies() {
	const url = new URL(
		"https://api.themoviedb.org/3/movie/popular",
	);
	const data = await fetchFromTMDB(url);

	return data.results;
}

export const getDiscoverMovies = async (
	id?: string,
	keywords?: string,
) => {
	const url = new URL(
		"https://api.themoviedb.org/3/discover/movie",
	);

	keywords &&
		url.searchParams.set("with_keywords", keywords);
	id && url.searchParams.set("with_genres", id);

	const data = await fetchFromTMDB(url);
	return data.results;
};
export const getDiscoverTV = async (
	id?: string,
	keywords?: string,
	p?: number,
) => {
	const url = new URL(
		"https://api.themoviedb.org/3/discover/tv",
	);

	keywords &&
		url.searchParams.set("with_keywords", keywords);
	id && url.searchParams.set("with_genres", id);
	p && url.searchParams.set("page", String(p));

	if (p) {
		const data = await fetchFromTMDB(url, 2);
		console.log(data.results, "page:", p);
		return data.results;
	}
	const data = await fetchFromTMDB(url);
	console.log(data.results, "page:", p);
	return data.results;
};

export async function getSearchedMovies(term: string) {
	const url = new URL(
		"https://api.themoviedb.org/3/search/movie",
	);
	url.searchParams.set("query", term);
	const data = await fetchFromTMDB(url);

	return data.results;
}
export async function getTopRatedTvSeries(p: number) {
	const url = new URL(
		"https://api.themoviedb.org/3/tv/top_rated",
	);
	// url.searchParams.set("query", term);
	if (p) {
		const data = await fetchFromTMDB(url, p);
		return data.results;
	}
	const data = await fetchFromTMDB(url);
	return data.results;
}

export const getGenresOfMovie = async () => {
	const url =
		"https://api.themoviedb.org/3/genre/movie/list";
	const options = {
		method: "GET",
		headers: {
			accept: "application/json",
			Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
		},
		next: {
			revalidate: 60 * 60 * 24, //24hors
		},
	};
	const response = await fetch(url, options);
	const data = (await response.json()) as Genres;
	return data.genres;
};
export const getGenresOfTvSeries = async () => {
	const url =
		"https://api.themoviedb.org/3/genre/tv/list";
	const options = {
		method: "GET",
		headers: {
			accept: "application/json",
			Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
		},
		next: {
			revalidate: 60 * 60 * 24, //24hors
		},
	};
	const response = await fetch(url, options);
	const data = (await response.json()) as Genres;
	return data.genres;
};
