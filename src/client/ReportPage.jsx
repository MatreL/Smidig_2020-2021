import React, {useState} from "react";
import { InputField } from "././components/InputField";
import {Link} from "react-router-dom";
import logOut from "url:./img/logout.png";
import home from "url:./img/home.png";
import printImg from "url:./img/print.PNG";
import printDoc from "url:./img/sunBell_map.pdf";
import back from "url:./img/icon1-black.png";
import 'bootstrap/dist/css/bootstrap.min.css'
import * as Swal from "sweetalert2";

//this function renders the report page, and allows the user to add new repairs to the repair api. We will then uss a post function to post new data to the API .
export function ReportPage({repairApi}) {

    const [serialNumber, setSerialNumber] = useState("");
    const [part, setPart] = useState("");
    const [camp, setCamp] = useState("")

    //The date will be set when the user presses the add button. The timestamp is important so we can print what time the repair happed.
    var date = new Date();
    var dd = date.getDate();

    var mm = date.getMonth()+1;
    var yyyy = date.getFullYear();
    if(dd<10)
    {
        dd='0'+dd;
    }
    if(mm<10)
    {
        mm='0'+mm;
    }
    date = dd+'-'+mm+'-'+yyyy;


    //this function uses the createRepair to post serialnumber, part, camp and date to the API. serialnumber, part and camp are user input and date is automatically added when the user presses submit.
    async function submit(e) {
        e.preventDefault();
        await repairApi.createRepair({ serialNumber, part, camp, date });
    }

    return (
        <div id={"reportPage-container"}>
            <header>
                <h1 id="logo"><Link style={{ textDecoration: "none", color: "inherit" }} to={"/frontPage"}>beBR!GHT</Link></h1>

                <Link id="log-out" to={"/"}>
                    <img src={logOut}/>
                    Log Out
                </Link>
            </header>

            <div class="repair-form">
                <form onSubmit={submit}>

                    <h3 class="title">Create new repair</h3>
                    <div class="repair-input" >
                        <InputField
                            label={"Serial Number"}
                            value={ serialNumber}
                            onChangeValue={setSerialNumber}
                        />
                        <InputField
                            label={"Part"}
                            value={ part}
                            onChangeValue={setPart}
                        />
                        <InputField
                            label={"Camp"}
                            value={ camp}
                            onChangeValue={setCamp}
                        />
                    </div>

                    <div class="button-class">
                        <button class="btn btn-success" id="button" onClick={submitAlert}>Submit</button>
                        <img id={"report-print-img"} onClick={print} src={printImg} />
                    </div>
                </form>
            </div>

            <iframe src={printDoc} id={"myFrame"} frameBorder="0" style={{visibility: "hidden"}}/>

            <Link id="home" to={"/frontPage"}>
                <img src={home} />
            </Link>
            <footer>
                <p style={{color: "white"}}><strong>BRIGHT Products AS:</strong> Holbergs gate 19, 0166 Oslo. Norway | info@bright-products.com | +47 902 14 423<br/>
                    Copyright2021. All rights reserved. | <strong>Disclaimer:</strong> Product information and images may vary from the current product in stock.</p>
            </footer>
        </div>
    );
}

//this print function gets the element id of the pfd, and allows users to print the content of the PDF. The PDF is added to the iframe tag in the render function above.
let print= () => {
    let objFra = document.getElementById("myFrame");
    objFra.contentWindow.focus();
    objFra.contentWindow.print();
}

//a Swal alert that is put inside a submitAlert. When the user adds a repair this alert will confirms the submit.
function submitAlert(){
    Swal.fire({
        title: 'Approved',
        text: 'You just added a repair',
        icon: 'success',
        confirmButtonText: 'Confirm',
        confirmButtonColor: '#9FD18B',
        timer: 3000,
    })
}
