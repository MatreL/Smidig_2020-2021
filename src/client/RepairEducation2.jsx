import { Link } from "react-router-dom";
import React from "react";
import next from "url:./img/icon4-black.png";
import back from "url:./img/icon1-black.png";
import logOut from "url:./img/logout.png";
import washing from "url:./img/bright_washing.png";
import sun from "url:./img/testbilde2.png";

//this function renders the repair education page. This page is used for pictures to show the user what to do with repairs.
export function RepairEducation2() {
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
                <h1>No Light?</h1>
                <div className="edu-steps">
                    <h4>1. Clean panel if dirty</h4>
                    <img src={washing} className={"edu-img"} />
                </div>
                <div className="edu-steps">
                    <h4>2. Charge in the sun</h4>
                    <img src={sun} className={"edu-img"} />
                </div>

                <Link to={"/repairEducation1"}>
                    <img className={"arrow"} id={"back-arrow"} src={back} />
                </Link>

                <Link to={"/educationPage2"}>
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
