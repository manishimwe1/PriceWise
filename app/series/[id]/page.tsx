import FileMenu from "@/components/FileMenu";
import { Button } from "@/components/ui/button";
import { getImagePath } from "@/lib/getImagePath";
import {
	getDiscoverTV,
	getGenresOfTvSeries,
} from "@/lib/getMovies";
import Image from "next/image";
import Link from "next/link";

type PageProps = {
	params: {
		id: string;
	};
	searchParams: {
		genre: string;
		page?: number;
	};
};
const page = async ({
	params: { id },
	searchParams: { genre, page },
}: PageProps) => {
	const tvSeries = await getDiscoverTV(id, genre, page);
	const genres = await getGenresOfTvSeries();
	console.log({ genre, page });

	return (
		<div className='flex flex-col gap-4  mt-36 mx-auto'>
			<FileMenu genres={genres} />
			<div className=' w-full '>
				<div className='grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-7 gap-3 justify-center items-center w-full px-4'>
					{tvSeries.map((tvSerie) => (
						<Link
							href={`/series/tv/${tvSerie.id}`}>
							<div
								key={tvSerie.id}
								className='relative h-64 w-full rounded-sm shadow-sm shadow-gray-950 cursor-pointer hover:scale-105 transition-all delay-200 duration-200 ease-in hover:filter hover:grayscale'>
								<Image
									src={getImagePath(
										tvSerie.backdrop_path ||
											tvSerie.poster_path,
									)}
									alt={tvSerie.title}
									fill
									className='object-cover rounded-sm object-center'
								/>
								<p className='bg-black/60 h-10 absolute bottom-0 inset-x-0 text-white flex justify-center'>
									{tvSerie?.name}
								</p>
							</div>
						</Link>
					))}
				</div>
			</div>
			<div className='flex gap-0 justify-between w-1/2 mx-auto text-white p-5 mb-20'>
				{tvSeries.map((tv, i) => (
					<div className='bg-[#1a1c29]/10 h-6 w-5 flex items-center justify-center'>
						<Link
							href={`/series/${
								tv.id
							}?genre=${genre}&page=${
								i + 1
							}`}>
							<Button
								variant={"ghost"}
								className='text-xs flex justify-center items-center'>
								{i + 1}
							</Button>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
};

export default page;
