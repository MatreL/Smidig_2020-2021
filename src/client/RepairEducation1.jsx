import { Link } from "react-router-dom";
import React from "react";
import next from "url:./img/icon4-black.png";
import back from "url:./img/icon1-black.png";
import logOut from "url:./img/logout.png";
import plugout from "url:./img/bright_plugout.png";
import washing from "url:./img/bright_washing.png";

//this function renders the repair education page. This page is used for pictures to show the user what to do with repairs.
export function RepairEducation1() {
    return (
        <div id={"educationPage-container"}>
            <header>
                <h1 id="logo"><Link style={{ textDecoration: "none", color: "inherit" }} to={"/frontPage"}>beBR!GHT</Link></h1>

                <Link id="log-out" to={"/"}>
                    <img src={logOut} />
                    Log Out
                </Link>
            </header>
            <main>
                <h1>No charging?</h1>
                <div className="edu-steps">
                    <h4>1. Detach solar panel</h4>
                    <img src={plugout} className={"edu-img"}/>
                </div>
                <div className="edu-steps">
                    <h4>2. Clean panel if dirty</h4>
                    <img src={washing} className={"edu-img"} />
                </div>

                <Link to={"/repairEducation"}>
                    <img className={"arrow"} id={"back-arrow"} src={back} />
                </Link>

                <Link to={"/repairEducation2"}>
                    <img className={"arrow"} id={"next-arrow"} src={next} />
                </Link>

            </main>
            <footer>
                <p style={{color: "white"}}><strong>BRIGHT Products AS:</strong> Holbergs gate 19, 0166 Oslo. Norway | info@bright-products.com | +47 902 14 423<br/>
                    Copyright2021. All rights reserved. | <strong>Disclaimer:</strong> Product information and images may vary from the current product in stock.</p>
            </footer>
        </div>
    );
}
