import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [answer, setAnswer] = useState<string>("0");
    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(event.target.value);
    }
    return (
        <div>
            <Form.Group className="mb-3" controlId="checkAnswer">
                <Form.Label>Answer: </Form.Label>
                <Form.Control
                    type="text"
                    onChange={updateAnswer}
                    placeholder="Enter Answer"
                />
            </Form.Group>
            {answer === expectedAnswer ?
                <div>✔️</div>
            :   <div>❌</div>}
        </div>
    );
}
