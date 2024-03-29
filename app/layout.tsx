import { ThemeProvider } from "@/components/ThemeProvider";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });
const spaceGrotesh = Space_Grotesk({
	subsets: ["latin"],
	weight: ["300", "400", "500", "700"],
});
export const metadata: Metadata = {
	title: "Price Wise",
	description: "Generated by create next app",
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={cn(
					"bg-slate-200 dark:bg-slate-900 text-black",
					inter.className,
				)}>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange>
					<main className='max-w-10xl mx-auto '>
						<Navbar />
						{children}
					</main>
				</ThemeProvider>
			</body>
		</html>
	);
}
