import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [questionType, setType] = useState<QuestionType>(
        "short_answer_question",
    );

    function change(): void {
        if (questionType === "multiple_choice_question") {
            setType("short_answer_question");
        } else {
            setType("multiple_choice_question");
        }
    }
    return (
        <div>
            <Button onClick={change}>Change Type</Button>
            {questionType === "multiple_choice_question" ?
                <div>Multiple Choice</div>
            :   <div>Short Answer</div>}
        </div>
    );
}
