import { Button } from "@/components/ui/button";
import axios from "axios";
import { Loader2, Loader2Icon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import QuestionListContainer from "./QuestionListContainer";
import { useUser } from "@/app/provider";
import { v4 as uuidv4 } from "uuid";
import { supabase } from "@/services/supabaseClient.js";

const QuestionList = ({ formData,onCreateLink}) => {
  const [loading, setLoading] = useState(true);
  const [questionList, setQuestionList] = useState([]);
  const { user } = useUser();
  const [saveLoading,setSaveLoading] = useState(false);
  useEffect(() => {
    if (formData) {
      GenerateQuestionList();
    }
  }, [formData]);

  const GenerateQuestionList = async () => {
    setLoading(true);
    try {
      const result = await axios.post("/api/ai-model/", {
        ...formData,
      });

      console.log("Full result.data:", result.data);


      console.log("Raw Response:", result.data.content);

      const content = result?.data?.content;

      if (!content) {
        console.error("Raw Response (missing content):", result);
        toast("No content received from the server.");
        setLoading(false);
        return;
      }
      // Remove possible wrapping like ```json ... ```
      const cleaned = content
        .replace(/```json\s*/gi, "")
        .replace(/```/g, "")
        .trim();

      // Optionally, handle non-JSON assignment (e.g. interviewQuestions = [...])
      const jsonStart = cleaned.indexOf("[");
      const jsonEnd = cleaned.lastIndexOf("]");
      const jsonStr = cleaned.slice(jsonStart, jsonEnd + 1);

      const parsed = JSON.parse(jsonStr);

      setQuestionList(parsed);
      setLoading(false);
    } catch (e) {
      console.error("Parsing failed:", e.message);
      toast("Server Error, Try Again!");
      setLoading(false);
    }
  };

  const onFinish = async () => {
    setSaveLoading(true);
    const interview_id = uuidv4();
    const { data, error } = await supabase
      .from("Interviews")
      .insert([
        {
          ...formData,
          questionList: questionList,
          userEmail: user?.email,
          interview_id: interview_id,
        },
      ])
      .select();

      setSaveLoading(false);
      onCreateLink(interview_id);
  };

  return (
    <div>
      {loading && (
        <div className="p-5 bg-blue-50 rounded-xl border border-primary flex gap-5 items-center">
          <Loader2Icon className="animate-spin" />
          <div>
            <h2 className="font-medium">Generating Interview Questions</h2>
            <p className="text-primary">
              Our AI is crafting personalized questions bases on your job
              position
            </p>
          </div>
        </div>
      )}
      {questionList?.length > 0 && (
        <div>
          <QuestionListContainer questionList={questionList} />
        </div>
      )}
      <div className="flex justify-end mt-10">
        <Button onClick={() => onFinish()} disabled={saveLoading}>
          {saveLoading&& <Loader2 className="animate-spin"/>}
          Create Interview Link & Finish</Button>
      </div>
    </div>
  );
};
``;
export default QuestionList;
