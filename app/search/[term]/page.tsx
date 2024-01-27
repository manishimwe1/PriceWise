import MovieCard from "@/components/MovieCard";
import MoviesCarousel from "@/components/MoviesCarousel";
import { getSearchedMovies } from "@/lib/getMovies";
import { notFound } from "next/navigation";

type Props = {
	params: { term: string };
};

export default async function page({
	params: { term },
}: Props) {
	if (!term) notFound();

	const termToUse = decodeURI(term);
	const movies = await getSearchedMovies(termToUse);

	return (
		<div className='mt-36 container px-10'>
			{movies.length === 0 && (
				<h1 className=' absolute top-56 flex justify-center items-center text-muted text-slate-500'>
					No Movie found!
				</h1>
			)}
			<h1 className='text-2xl font-bold text-muted-foreground'>
				Results For:{" "}
				<span className='text-3xl uppercase to-gray-50 underline underline-offset-4 decoration-4'>
					{" "}
					{termToUse}
				</span>
			</h1>{" "}
			{movies?.map((movie) => (
				<MoviesCarousel
					key={movie.id}
					movies={movies}
					title={movie.title}
					isVertical
				/>
			))}
		</div>
	);
}
