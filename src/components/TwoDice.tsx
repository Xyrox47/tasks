import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [dL, setLeftValue] = useState<number>(0);
    const [dR, setRightValue] = useState<number>(4);
    function setLeft(): void {
        setLeftValue(d6());
    }
    function setRight(): void {
        setRightValue(d6());
    }
    return (
        <div>
            <span data-testid="left-die">{dL}</span>
            <span data-testid="right-die">{dR}</span>
            <Button onClick={setLeft}>Roll Left</Button>
            <Button onClick={setRight}>Roll Right</Button>
            {dL === 1 && dR === 1 ?
                <div>Lose</div>
            : dL === dR ?
                <div>Win</div>
            :   <div>Try Again!</div>}
        </div>
    );
}
