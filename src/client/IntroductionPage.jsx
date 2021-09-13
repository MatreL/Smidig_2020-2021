import { Link } from "react-router-dom";
import React from "react";
import next from "url:./img/icon4-black.png";
import logOut from "url:./img/logout.png";


//this function renders the introduction page. This page contains a iFrame tag that displays a video that shows the user how to use the page.
export function IntroductionPage() {
  return (
    <div id={"introduction-container"}>
      <header>
          <h1 id="logo"><Link style={{ textDecoration: "none", color: "inherit" }} to={"/frontPage"}>beBR!GHT</Link></h1>

        <Link id="log-out" to={"/"}>
          <img src={logOut} />
          Log Out
        </Link>
      </header>
      <main>
        <h1 style={{ paddingTop: "30px" }}>Introduction video</h1>
        <div id="edu-vid">
          <iframe
            width="800"
            height="500"
            src="https://www.youtube.com/embed/7hb49DcdmqA?autoplay=1&mute=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
          <Link to={"/frontPage"}>
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
