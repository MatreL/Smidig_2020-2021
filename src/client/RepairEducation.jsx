import { Link } from "react-router-dom";
import React from "react";
import next from "url:./img/icon4-black.png";
import back from "url:./img/icon1-black.png";
import logOut from "url:./img/logout.png";
import sunbell from "url:./img/150183_01_SunBell_300-1-150183_1.jpg";
import sunbellLamp from "url:./img/Sunbell Lamp.png";
import sunbellLight from "url:./img/Sunbell Light.png";
import sunbellPanel from "url:./img/Sunbell Panel.png";


//this function renders the repair education page. This page is used for pictures to show the user what to do with repairs.
export function RepairEducation() {
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
                <div className={"sunbell"}>
                    <img className={"sunbell-img"} src={sunbell} />
                    <h1>Sunbell Smart</h1>
                    <p>Learn about Sunbell Smart and how to repair it</p>
                </div>

                <div className={"parts"}>
                <h3>Parts</h3>
                    <img src={sunbellPanel} className={"parts-img"}/>
                    <img src={sunbellLamp} className={"parts-img"}/>
                    <img src={sunbellLight} className={"parts-img"}/>
                </div>

                <Link to={"/educationPage"}>
                    <img className={"arrow"} id={"back-arrow"} src={back} />
                </Link>

                <Link to={"/repairEducation1"}>
                    <img className={"arrow"} id={"next-arrow"} src={next} />
                </Link>
            </main>
            <footer>
                <p style={{color: "white"}}>BRIGHT Products AS: Holbergs gate 19, 0166 Oslo. Norway | info@bright-products.com | +47 902 14 423<br/>
                    Copyright2021. All rights reserved. | <strong>Disclaimer:</strong> Product information and images may vary from the current product in stock.</p>
            </footer>
        </div>
    );
}
