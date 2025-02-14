import React, { useEffect, useState } from "react";
import axios from "axios";
import Prompt from "@/app/_data/Prompt";
import { Loader2Icon } from "lucide-react";
import Lookup from "@/app/_data/Lookup";
import HeadingDescription from "./HeadingDescription";

function LogoIdea({ formData, onHandleInputChange }) {
  const [ideas, setIdeas] = useState([]); // Store logo ideas
  const [loading, setLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState(formData?.idea || "");

  useEffect(() => {
    if (formData?.title && formData?.desc && formData?.design?.title) {
      generateLogoDesignIdea();
    }
  }, [formData]); // Fetch new ideas if formData changes

  
  const generateLogoDesignIdea = async () => {
    try {
      setLoading(true);

      const PROMPT = Prompt.DESIGN_IDEA_PROMPT
        .replace("{logoType}", formData?.design?.title || "")
        .replace("{logoTitle}", formData?.title || "")
        .replace("{logoDesc}", formData?.desc || "")
        .replace("{logoPrompt}", formData?.design?.prompt || "");

      const result = await axios.post("/api/ai-design-ideas", { prompt: PROMPT });

      console.log("AI Response:", result.data);

      if (result.data?.ideas) {
        setIdeas(result.data.ideas);
      }
    } catch (e) {
      console.error("Error generating logo ideas:", e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="my-10">
      <HeadingDescription title={Lookup.LogoStyle} description={Lookup.LogoStyleDes} />

      {/* Loader */}
      {loading && (
        <div className="flex items-center justify-center">
          <Loader2Icon className="animate-spin my-10" />
        </div>
      )}

      {/* Display Logo Ideas */}
      <div className="flex flex-wrap gap-3 mt-6">
        {ideas.map((item, index) => (
          <h2
            key={index}
            onClick={() => {
              setSelectedOption(item);
              // onHandleInputChange(item);
            }}
            className={`p-2 rounded-full border px-3 cursor-pointer hover:border-primary ${
              selectedOption === item && "border-primary"
            }`}
          >
            {item}
          </h2>
        ))}

        {/* AI Auto-Select Option */}
        <h2
          onClick={() => {
            setSelectedOption("Let AI Select the best idea");
            onHandleInputChange("Let AI Select the best idea");
          }}
          className={`p-2 rounded-full border px-3 cursor-pointer hover:border-primary ${
            selectedOption === "Let AI Select the best idea" && "border-primary"
          }`}
        >
          Let AI Select the best idea
        </h2>
      </div>
    </div>
  );
}

export default LogoIdea;
