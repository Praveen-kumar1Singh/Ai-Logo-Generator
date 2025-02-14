
import { AiDesignIdeas } from "@/Configs/ApiModal";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const { prompt } = await req.json();

        const result = await AiDesignIdeas.sendMessage(prompt);
        
        // Ensure result.response.text() is awaited properly
        const responseText = await result.response.text();

        let jsonResponse;
        try {
            jsonResponse = JSON.parse(responseText);
        } catch (parseError) {
            console.error("Failed to parse AI response:", parseError);
            return NextResponse.json({ error: "Invalid AI response format" }, { status: 500 });
        }

        return NextResponse.json(jsonResponse);
    } catch (e) {
        console.error("AI API Error:", e);
        return NextResponse.json({ error: e.message || "An error occurred" }, { status: 500 });
    }
}
