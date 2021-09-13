import { Link } from "react-router-dom";
import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import {useSubmit} from "./components/UseSubmit";
import {useHistory} from "react-router";
import {postJson} from "./components/http";
import {InputField} from "./components/LoginInputField";


//This function renders the login page and handles the submitt button on the login. I takes the user input and matches it with the server username and password. Wrong username og password will give error.
export function LoginPage() {
        const [username, setUsername] = useState("");
        const [password, setPassword] = useState("");
        const history = useHistory();

        const { handleSubmit: handleLogin, submitting, error } = useSubmit(
            async () => {
                await postJson("/api/login", { username, password });
            },
            () => history.push("/introductionPage")
        );

    return (

        <div id={"loginPage-container"}>

            <header>
                <h1 id="logo">beBR!GHT</h1>
            </header>
            <Container className={"login-container"} style={{width: "350px", height: "500px"}}>
                <h1>Log in</h1>
                <form onSubmit={handleLogin}>
                    {submitting && <div>Please wait</div>}
                    {error && <div id="error-txt">Error: Wrong username or password! {/*error.toString()*/} </div>}

                    <InputField
                        label={"Camp"}
                        value={username}
                        onValueChange={setUsername}
                    />

                    <InputField
                        label={"Password"}
                        type="password"
                        value={password}
                        onValueChange={setPassword}
                    />
                    

                    <Button id={"login-btn"} disabled={submitting} type="submit">Login</Button>
                    <Link to={"/adminLoginPage"}><Button id={"user-btn"} type="submit">Admin</Button></Link>
                </form>
            </Container>
            <footer>
                <p style={{color: "white"}}><strong>BRIGHT Products AS:</strong> Holbergs gate 19, 0166 Oslo. Norway | info@bright-products.com | +47 902 14 423<br/>
                    Copyright2021. All rights reserved. | <strong>Disclaimer:</strong> Product information and images may vary from the current product in stock.</p>
            </footer>
        </div>
    );
}
