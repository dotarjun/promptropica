import Prompt from "@models/prompt";
import { connectToDatabase } from "@utils/database";

export const POST = async (req) => {
    const { userId, prompt, tag } = req.json();
    console.log('\n -------- 0 -------- \n', { userId, prompt, tag })

    try {
        await connectToDatabase();

        const newPrompt = new Prompt({
            creator: userId,
            prompt,
            tag,
        });
        console.log('\n -------- 1 -------- \n', newPrompt)

        await newPrompt.save();
        console.log('\n -------- 2 -------- \n', newPrompt)
        return new Response(JSON.stringify(newPrompt), {
            status: 201,
        })

    } catch (error) {
        return new Response("Failed to create a new prompt", {
            status: 500,
        })
    }
}