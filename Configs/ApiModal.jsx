const {
    GoogleGenerativeAI
  } = require("@google/generative-ai");
  
  const apiKey = process.env.GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash-exp",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: 'application/json',
  };
  
 
    export const AiDesignIdeas = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Based on Logo of type Modern Mascot Logos Generate a text prompt to create Logo for Logo title/Brand name : Indian Spice with decription: Indian Restaurant and refering to prompt: A vibrant logo featuring a friendly, animated character with a playful expression. The character is dressed in a classic uniform, complete with a distinctive accessory that adds personality. In one hand, they hold a signature item that represents the brand, while the other elements of the design—such as small decorative touches or natural accents—enhance the overall look. The background consists of a bold, circular design with subtle accents to highlight the character. Below, the brand name is displayed in bold, stylized lettering, with a slight curve and complementary decorative lines. The overall style is fun, welcoming, and full of character. Give me 4/5 Suggestion of logo idea (each idea with maximum 4-5 words), Result in JSON format with ideas fields"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "Okay, I can help you generate some logo ideas based on your requirements. I understand you are looking for modern mascot logo ideas for an Indian Restaurant named \"Indian Spice\".\n\nHere are 5 logo ideas in JSON format:\n\n```json\n{\n  \"ideas\": [\n    \"Spice Chef Mascot\",\n    \"Friendly Elephant Cook\",\n    \"Smiling Curry Pot Character\",\n    \"Vibrant Indian Spice Genie\",\n    \"Chef Holding Spices Plate\"\n  ]\n}\n```\n\nEach idea aims for a fun, welcoming mascot-style logo, reflecting the Indian Spice brand.\n"},
          ],
        },
      ],
    });
  
    // const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    // console.log(result.response.text());
  