import { NAVICONS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { DarkModeToggle } from "./DarkModeTogler";

function Navbar() {
	return (
		<header className='w-full '>
			<nav className='nav'>
				<Link
					href={"/"}
					className=' flex items-center gap-1'>
					<Image
						src={"/assets/icons/logo.svg"}
						alt='logo'
						width={27}
						height={27}
						className=''
					/>
					<p className='dark:text-slate-100 text-black font-bold text-lg'>
						Price
						<span className='text-primary'>
							Wise
						</span>
					</p>
				</Link>
				<div className='flex items-center gap-5'>
					{NAVICONS.map((navIcon) => (
						<Image
							key={navIcon.alt}
							src={navIcon.src}
							alt={navIcon.alt}
							width={28}
							height={28}
							className='object-contain cursor-pointer'
						/>
					))}
					<DarkModeToggle />
				</div>
			</nav>
		</header>
	);
}

export default Navbar;
