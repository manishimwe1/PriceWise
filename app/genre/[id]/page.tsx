import MoviesCarousel from "@/components/MoviesCarousel";
import { getDiscoverMovies } from "@/lib/getMovies";

type Props = {
	params: {
		id: string;
	};
	searchParams: { genre: string };
};

const GenrePage = async ({
	params: { id },
	searchParams: { genre },
}: Props) => {
	const movies = await getDiscoverMovies(id, genre);
	return (
		<div className='mt-36 container px-10'>
			<h1 className='text-2xl font-bold text-muted-foreground'>
				Results For:
				<span className='text-3xl uppercase to-gray-50 underline underline-offset-4 decoration-4'>
					{" "}
					{genre}
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
};

export default GenrePage;
