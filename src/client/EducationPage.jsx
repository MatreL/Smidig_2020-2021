import React from "react";
import { Link } from "react-router-dom";
import next from "url:./img/icon4-black.png";
import back from "url:./img/icon1-black.png";
import logOut from "url:./img/logout.png";
import printImg from "url:./img/print.PNG";
import printDoc from "url:./img/FlowchartRepair.pdf";
import instruction from "url:./img/instruction.PNG";


//this function renders the education page. Simple react, html and styling.
export function EducationPage() {
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
        <h4>Instruction manual to be printed</h4>
        <div id={"instruction-div"}>
          <img id={"instruction-img"} src={instruction} />
        </div>
          <img id={"print-img"} onClick={print} src={printImg} />

          <iframe src={printDoc} id={"flowChartFrame"} style={{visibility: "hidden"}}/><br/>

          <Link to={"/educationPageVideo"}>
              <img className={"arrow"} id={"back-arrow"} src={back} />
          </Link>

          <Link to={"/repairEducation"}>
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

//this print function gets the element id of the pfd, and allows users to print the content of the PDF. The PDF is added to the iframe tag in the render function above.
let print= () => {
  let objFra = document.getElementById("flowChartFrame");
  objFra.contentWindow.focus();
  objFra.contentWindow.print();
}
