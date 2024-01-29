"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import { HeroImages } from "@/constants";

const HeroCarousel = () => {
	return (
		<div className='hero-carousel'>
			<Carousel
				showThumbs={false}
				autoPlay
				infiniteLoop
				interval={2000}
				showArrows={false}
				showStatus={false}>
				{HeroImages.map((image) => (
					<div key={image.alt}>
						<Image
							src={image.src}
							width={484}
							height={484}
							className='object-contain'
							alt={image.alt}
						/>
					</div>
				))}
			</Carousel>
			<Image
				src={"assets/icons/hand-drawn-arrow.svg"}
				alt='arrow'
				width={175}
				height={175}
				className='max-xl:hidden absolute -left-[15%] bottom-0 '
			/>
		</div>
	);
};

export default HeroCarousel;
