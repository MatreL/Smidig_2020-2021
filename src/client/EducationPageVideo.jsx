import { Link } from "react-router-dom";
import React from "react";
import next from "url:./img/icon4-black.png";
import back from "url:./img/icon1-black.png";
import logOut from "url:./img/logout.png";

//this function renders the education video page. It uses a iFrame tag to display the placeholder video on the page.
export function EducationPageVideo() {
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
        <div id="edu-vid">
          <iframe
            height="550"
            width="800"
            src="https://www.youtube.com/embed/PK7g180smjo"
            allowFullScreen
          ></iframe>
        </div>
      </main>
        <Link to={"/frontPage"}>
            <img className={"arrow"} id={"back-arrow"} src={back} />
        </Link>

        <Link to={"/educationPage"}>
            <img className={"arrow"} id={"next-arrow"} src={next} />
        </Link>
        <footer>
            <p style={{color: "white"}}><strong>BRIGHT Products AS:</strong> Holbergs gate 19, 0166 Oslo. Norway | info@bright-products.com | +47 902 14 423<br/>
                Copyright2021. All rights reserved. | <strong>Disclaimer:</strong> Product information and images may vary from the current product in stock.</p>
        </footer>
    </div>
  );
}
