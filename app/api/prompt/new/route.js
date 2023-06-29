import { connectToDatabase } from "@utils/database";

export const POST = async (req, res) => {
    const { userId, prompt, tag } = req.json();


    try {
        await connectToDatabase();
    } catch (error) {

    }
}