import { Genre, Genres } from "@/typings";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const GenreDropdown = ({ genre }: { genre: Genre[] }) => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger className='text-white flex justify-center items-center'>
				Genre <ChevronDown className='ml-1' />
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuLabel>
					Select a Genre
				</DropdownMenuLabel>
				<DropdownMenuSeparator />
				{genre.map((genre) => (
					<DropdownMenuItem key={genre.id}>
						<Link
							href={`/genre/${genre.id}?genre=${genre.name}`}>
							{genre.name}
						</Link>
					</DropdownMenuItem>
				))}
				<DropdownMenuItem>
					Subscription
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default GenreDropdown;
