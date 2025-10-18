import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript
            </header>
            <h1>Xander Watkins</h1>
            <div>
                <Container>
                    <Row>
                        <Col>
                            <div>
                                Things to do in Bucksport
                                <ul>
                                    <li>Enjoy icecream at the Dairy Port</li>
                                    <li>Enjoy a walk on the riverwalk</li>
                                    <li>Visit The Tomb of Buck</li>
                                </ul>
                                <Button
                                    onClick={() => {
                                        console.log("Hello World!");
                                    }}
                                >
                                    Log Hello World
                                </Button>
                            </div>
                            <div
                                style={{
                                    backgroundColor: "red",
                                    width: "150px",
                                    height: "100px",
                                }}
                            >
                                RED
                            </div>
                        </Col>
                        <Col>
                            <img
                                src="/assets/images/bridge.jpg"
                                alt="A picture of the Bucksport Bridge"
                            />
                            <div
                                style={{
                                    backgroundColor: "red",
                                    width: "150px",
                                    height: "100px",
                                }}
                            >
                                RED
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default App;
