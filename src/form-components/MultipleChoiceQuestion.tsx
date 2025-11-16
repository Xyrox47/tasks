import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [answer, setAnswer] = useState<string>(options[0]);
    function updateAnswer(event: React.ChangeEvent<HTMLSelectElement>) {
        setAnswer(event.target.value);
    }

    return (
        <div>
            <Form.Group controlId="userEmotions">
                <Form.Label>Answer the Question</Form.Label>
                <Form.Select value={answer} onChange={updateAnswer}>
                    <option value={options[0]}>{options[0]}</option>
                    <option value={options[1]}>{options[1]}</option>
                    <option value={options[2]}>{options[2]}</option>
                </Form.Select>
            </Form.Group>
            {answer === expectedAnswer ?
                <div>✔️</div>
            :   <div>❌</div>}
        </div>
    );
}
