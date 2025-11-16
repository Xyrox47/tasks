import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [editMode, setMode] = useState<boolean>(false);
    const [role, setRole] = useState<boolean>(false);
    const [username, setUsername] = useState<string>("Your Name");

    function updateRole(): void {
        setRole(!role);
    }

    function updateMode(event: React.ChangeEvent<HTMLInputElement>) {
        setMode(event.target.checked);
    }
    function updateUsername(event: React.ChangeEvent<HTMLInputElement>) {
        setUsername(event.target.value);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            {editMode ?
                <div>
                    {/* Edit Mode 
                        Edit Mode Switch
                    */}
                    <Form.Check
                        type="switch"
                        id="editMode"
                        label="Edit Mode"
                        checked={editMode}
                        onChange={updateMode}
                    />{" "}
                    {/* Is student checkbox */}
                    <Form.Check
                        type="checkbox"
                        id="roleCheck"
                        label="Student"
                        checked={!role}
                        onChange={updateRole}
                    />
                    <Form.Group className="mb-3" controlId="updateUsername">
                        <Form.Label>Answer: </Form.Label>
                        <Form.Control
                            type="text"
                            onChange={updateUsername}
                            placeholder="Enter Username"
                        />
                    </Form.Group>
                </div>
            :   <div>
                    <Form.Check
                        type="switch"
                        id="editMode"
                        label="Edit Mode"
                        checked={editMode}
                        onChange={updateMode}
                    />{" "}
                    {username} {role ? " is not" : " is"} a student
                </div>
            }
        </div>
    );
}
