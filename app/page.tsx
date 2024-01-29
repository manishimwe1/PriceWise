import HeroCarousel from "@/components/HeroCarousel";
import ProductsCard from "@/components/ProductsCard";
import Searchbar from "@/components/Searchbar";
import { getAllProducts } from "@/lib/actions";
import Image from "next/image";
import React from "react";

const Homepage = async () => {
	const allProducts = await getAllProducts();
	return (
		<>
			<section className='px-6  md:px-20 py-24'>
				<div className='flex flex-col lg:flex-row gap-16 '>
					<div className='flex flex-col justify-center lg:-mt-36'>
						<p className='small-text cursor-pointer hover:underline hover:underline-offset-2'>
							Smart Shopping Starts Here:
							<Image
								src='/assets/icons/arrow-right.svg'
								alt='arrow-right'
								width={16}
								height={16}
							/>
						</p>
						<h1 className='head-text'>
							Unleash the power of{" "}
							<span className='text-primary'>
								PriceWise
							</span>
						</h1>
						<p className='mt-6'>
							Powerful,self-serve product and
							growth analytics to help you
							convert, engage, and retain
							more.
						</p>

						<Searchbar />
					</div>

					<HeroCarousel />
				</div>
			</section>
			<section className='trending-section'>
				<h2 className='section-text'>Trending</h2>
				<div className='flex flex-wrap gap-x-8 gap-y-16'>
					{allProducts?.map((product) => (
						<ProductsCard
							key={product.title}
							product={product}
						/>
					))}
				</div>
			</section>
		</>
	);
};

export default Homepage;
