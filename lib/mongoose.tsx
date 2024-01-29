import mongoose from "mongoose";

let isConnect = false;

export const connectToDB = async () => {
	mongoose.set("strictQuery", true);

	if (!process.env.MONGODB_URI) {
		return console.log("MONGODB_URI is MissIng!!");
	}

	if (isConnect) {
		return console.log(
			"=> Using existing database connection",
		);
	}

	try {
		await mongoose.connect(process.env.MONGODB_URI!);
		isConnect = true;
		console.log("=> MongoDB connected susessfuly");
	} catch (error: any) {
		console.log(error, "failed to connect to db");
		throw new Error(error.message);
	}
};
