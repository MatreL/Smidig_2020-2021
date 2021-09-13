import React from "react";
import { Link } from "react-router-dom";
import logOut from "url:./img/logout.png";
import learn from "url:./img/learning - Blue.png";
import exam from "url:./img/exam - blue.png";


//this function renders the second Education page
export function EducationPage2() {
    return (
        <div className={"frontPage-container"}>
            <header>
                <h1 id="logo"><Link style={{ textDecoration: "none", color: "inherit" }} to={"/frontPage"}>beBR!GHT</Link></h1>

                <Link id="log-out" to={"/"}>
                    <img src={logOut}/>
                    Log Out
                </Link>
            </header>

            <div id="main-container">
                <div className="flex-container">
                    <Link style={{ textDecoration: 'none' }} to="/educationPageVideo">
                        <div className={"frontPageButton"} id={"education-nav"}>
                            <img className="nav-img" src={learn}/>
                            <h2>Education</h2>
                        </div>
                    </Link>

                    <Link style={{ textDecoration: 'none' }} to="/testPage">
                        <div className={"frontPageButton"} id={"test-nav"}>
                            <img className="nav-img" src={exam}/>
                            <h2>Exam</h2>
                        </div>
                    </Link>
                </div>
            </div>

            <footer>
                <p style={{color: "white"}}><strong>BRIGHT Products AS:</strong> Holbergs gate 19, 0166 Oslo. Norway | info@bright-products.com | +47 902 14 423<br/>
                    Copyright2021. All rights reserved. | <strong>Disclaimer:</strong> Product information and images may vary from the current product in stock.</p>
            </footer>

        </div>
    );
}