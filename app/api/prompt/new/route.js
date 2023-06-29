import Prompt from "@models/prompt";
import { connectToDatabase } from "@utils/database";

export const POST = async (req, res) => {
    const { userId, prompt, tag } = req.json();


    try {
        await connectToDatabase();
        const newPrompt = new Prompt({
            creator: userId,
            prompt,
            tag,
        });
        console.log('newPrompt', newPrompt);
        await newPrompt.save();
        console.log('saved newPrompt')
        return new Response(JSON.stringify(newPrompt), {
            status: 201,
        })

    } catch (error) {
        console.log('------ error ----- \n', error);
        return new Response("Failed to create a new prompt", {
            status: 500,
        })
    }
}