"use client";

import { Movie } from "@/typings";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { getImagePath } from "@/lib/getImagePath";
import { useEffect } from "react";

const CarouselBanner = ({
	movies,
}: {
	movies: Movie[];
}) => {
	Autoplay.globalOptions = { delay: 8000 };
	const [emblaRef] = useEmblaCarousel(
		{ loop: true, duration: 100 },
		[Autoplay()],
	);

	return (
		<div
			ref={emblaRef}
			className='overflow-hidden  relative cursor-pointer'>
			<div className='flex'>
				{movies.map((movie) => (
					<div
						key={movie.id}
						className='flex-full min-w-0 relative '>
						<Image
							key={movie.id}
							src={getImagePath(
								movie.backdrop_path,
								true,
							)}
							alt={movie.title}
							width={1920}
							height={1080}
						/>
						<div className='hidden lg:inline absolute mb-0 top-0 pt-[500px] px-20 space-y-10 xl:pt-52 left-0   z-20 h-full w-full bg-gradient-to-r from-gray-900/90 via-transparent to-transparent'>
							<div className='flex flex-col justify-start  space-y-10 pt-40'>
								<h2 className='text-5xl font-bold max-w-xl z-50'>
									{movie.title}
								</h2>
								<p className='max-w-xl line-clamp-3'>
									{movie.overview}
								</p>
								<div className='flex gap-2 text-xs text-muted-foreground'>
									<p>Creator:</p>
									<p>Action</p>
									<p>Duration:</p>
									<p>
										Release date:
										{movie.release_date}
									</p>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
			<div className='absolute inset-0 bg-gradient-to-b from-gray-200/0 via-gray-900/25 to-gray-300 dark:to-[#1a1c29]' />{" "}
		</div>
	);
};

export default CarouselBanner;
