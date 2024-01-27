import { getImagePath } from "@/lib/getImagePath";
import { Movie } from "@/typings";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MovieCard = ({ movie }: { movie: Movie }) => {
	return (
		<Link
			href={`/movie/${movie.id}`}
			className='flex flex-shrink-0 '>
			<div className='relative flex-shrink-0 w-full cursor-pointer transform hover:scale-105 transition duration-200 ease-out hover:drop-shadow-none'>
				<div className='absolute inset-0 bg-gradient-to-b from-gray-200/0 via-gray-900/10 to-gray-300 dark:to-[#1a1c29]/80 z-10' />
				<p className='absolute z-20 bottom-5 left-24 sm:left-10'>
					{movie.title}
				</p>
				<Image
					src={getImagePath(
						movie.backdrop_path ||
							movie.poster_path,
					)}
					alt={movie.title}
					width={1920}
					height={1080}
					key={movie.id}
					className='w-fit mx-auto  lg:min-w-[400px] h-56 sm:object-cover  object-cover sm:object-center shadow-md shadow-gray-800 drop-shadow-xl rounded-sm'
				/>
			</div>
		</Link>
	);
};

export default MovieCard;
