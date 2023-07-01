import Prompt from "@models/prompt";
import { connectToDatabase } from "@utils/database";

// GET
export const GET = async (req, { params }) => {
    try {
        await connectToDatabase();

        const prompt = await Prompt.findById(params.id).populate('creator')
        
        if (!prompt) {
            return new Response('Prompt not found', { status: 404 })
        }
        
        return new Response(JSON.stringify(prompt), {
            status: 200,
        })

    } catch (error) {
        return new Response('Failed to fetch prompts', {
            status: 500,
        })
    }
}

// PATCH


// DELETE