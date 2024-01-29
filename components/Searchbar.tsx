"use client";

import { scrapeAndStoreProduct } from "@/lib/actions";
import { Loader2 } from "lucide-react";
import { FormEvent, useState } from "react";
const isValidAmazonProductUrl = (url: string) => {
	try {
		const parsedURL = new URL(url);
		const hostname = parsedURL.hostname;

		if (
			hostname.includes("amazon.com") ||
			hostname.includes("amazon.") ||
			hostname.includes("amazon")
		) {
			return true;
		}
	} catch (error) {
		return false;
	}
	return false;
};

const Searchbar = () => {
	const [searchPrompt, setSearchPrompt] = useState("");
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (
		event: FormEvent<HTMLFormElement>,
	) => {
		event.preventDefault();
		const isValid =
			isValidAmazonProductUrl(searchPrompt);

		if (!isValid) {
			return alert(
				"Please provide a Valid amazon link",
			);
		}
		try {
			setLoading(true);
			const product = await scrapeAndStoreProduct(
				searchPrompt,
			);
			console.log(product);
		} catch (error) {
			console.log(error, "failed to starting scrape");
		} finally {
			setLoading(false);
		}
	};
	return (
		<form
			className='flex flex-wrap gap-4 mt-12'
			onSubmit={handleSubmit}>
			<input
				type='text'
				placeholder='Enter product Link'
				className='searchbar-input '
				value={searchPrompt}
				onChange={(e) =>
					setSearchPrompt(e.target.value)
				}
			/>
			<button
				type='submit'
				className='searchbar-btn'
				disabled={searchPrompt === ""}>
				{loading ? (
					<div className='flex gap-2 items-center'>
						Search...
						<Loader2 className='h-4 w-4 text-primary animate-spin ' />
					</div>
				) : (
					"Search"
				)}
			</button>
		</form>
	);
};

export default Searchbar;
