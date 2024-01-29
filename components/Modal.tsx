"use client";

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { Input } from "./ui/input";
import { FormEvent, useState } from "react";
import { addUserEmailToProduct } from "@/lib/actions";

const Modal = ({ productId }: { productId: string }) => {
	const [email, setEmail] = useState("");
	const [isSubmiting, setIsSubmiting] = useState(false);
	const handleSubmit = async (
		e: FormEvent<HTMLFormElement>,
	) => {
		e.preventDefault();
		setIsSubmiting(true);

		await addUserEmailToProduct(productId, email);
		setIsSubmiting(false);
		setEmail("");
	};
	return (
		<Dialog>
			<DialogTrigger className='w-full' asChild>
				<button
					type='button'
					className='btn w-full'>
					Track
				</button>
			</DialogTrigger>
			<DialogContent className='bg-white rounded-md  flex flex-col justify-center items-center'>
				<DialogHeader className='mt-5 py-3'>
					<DialogTitle>
						<div className='p-3  absolute top-0 '>
							<Image
								src={
									"/assets/icons/logo.svg"
								}
								alt='logo'
								width={28}
								height={28}
							/>
						</div>
					</DialogTitle>
					<DialogDescription>
						<h4 className='dialog-head_text tracking-wide'>
							Stay updated with product
							pricing alerts right in your
							inbox!
						</h4>
						<p className='text-sm text-gray-600 '>
							Never miss a bargain again with
							our timely alerts!
						</p>
						<form
							className='flex flex-col items-start gap-2  mt-5'
							onSubmit={handleSubmit}>
							<label
								htmlFor='email'
								className='text-lg font-bold text-gray-700 justify-self-start'>
								Email adress
							</label>

							<div className='flex flex-1 gap-2 items-center w-full'>
								<Image
									src={
										"/assets/icons/mail.svg"
									}
									alt='mail'
									width={18}
									height={18}
								/>
								<Input
									placeholder='Email adress'
									id='email'
									className='flex-1 w-full bg-transparent'
									value={email}
									onChange={(e) =>
										setEmail(
											e.target.value,
										)
									}
								/>
							</div>
							<button
								className='dialog-btn'
								type='submit'>
								{isSubmiting
									? "Tracking..."
									: "Track"}
							</button>
						</form>
					</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
};

export default Modal;
