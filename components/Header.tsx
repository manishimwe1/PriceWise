"use client";
import Image from "next/image";
import Link from "next/link";
import { DarkModeToggle } from "./DarkModeTogler";
import SearchInput from "./SearchInput";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/constants";
import { usePathname } from "next/navigation";
import GenreDropdown from "./GenreDropdown";
import { Genre, Genres } from "@/typings";

const Header = ({
	genreMovies,
}: {
	genreMovies: Genre[];
}) => {
	const pathname = usePathname();
	return (
		<header
			className={cn(
				"fixed w-full z-50 top-0 flex items-center justify-between p-5 bg-gradient-to-t from-gray-900/10 via-gray-900/25 to-gray-900",
			)}>
			<Link href={"/"} className='mr-10'>
				<Image
					src={
						"https://links.papareact.com/a943ae"
					}
					alt='Disney logo'
					width={120}
					height={100}
					className='cursor-pointer invert-0 dark:invert'
				/>
			</Link>
			<ul className='lg:flex gap-6 hidden '>
				{NAV_LINKS.map((link) => {
					let url = "";
					let isActive: boolean =
						link.href === pathname;

					return (
						<div
							key={link.label}
							className={cn(
								"flex gap-2 items-center hover:underline hover:decoration-black/70 hover:decoration-4 hover:underline-offset-4 transition-all ease-in-out delay-200 duration-200 hover:opacity-65 ",
								isActive
									? "underline decoration-black"
									: "",
							)}>
							{
								<link.icon className='h-4 w-4 cursor-pointer' />
							}
							<Link
								href={link.href}
								className='  text-white'>
								{link.label}
							</Link>
						</div>
					);
				})}
			</ul>
			<div className='flex space-x-2'>
				<GenreDropdown genre={genreMovies} />
				<SearchInput />
				<DarkModeToggle />
			</div>
		</header>
	);
};

export default Header;
