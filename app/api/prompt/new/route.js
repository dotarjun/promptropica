import Prompt from "@models/prompt";
import { connectToDatabase } from "@utils/database";

export const POST = async (req, res) => {
    const { userId, prompt, tag } = req.json();


    try {
        await connectToDatabase();
        const newPrompt = new Prompt({
            creator: userId,
            prompt: prompt,
            tag: tag
        });
    } catch (error) {

    }
}