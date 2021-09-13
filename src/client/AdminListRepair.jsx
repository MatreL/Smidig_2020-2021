import React, { useState } from "react";
import { LoadingView } from "./components/LoadingView";
import { Link } from "react-router-dom";
import { useLoading } from "./components/useLoading";
import { ErrorView } from "./components/ErrorView";
import logOut from "url:./img/logout.png";


//this function is used to get data from API and lists that data with map on the page.
//It alos has a error view and loading view if needed. These are components you can find in the component folder.
export function AdminListRepair({ repairApi }) {
  const serialNumber = useState(repairApi.serialNumber);
  const part = useState(repairApi.part);
  const camp = useState(repairApi.camp);
  const date = useState(repairApi.date)

  const {
    data: repairs,
    error,
    loading,
    reload,
  } = useLoading(async () => await repairApi.listRepairs());

  if (error) {
    return <ErrorView error={error} reload={reload} />;
  }

  if (loading || !repairs) {
    return <LoadingView />;
  }

  return (
      <div id={"adminListRepair-container"}>
        <header>
          <Link style={{ textDecoration: "none" }} to={"/adminLoginPage"}>
            <h1 id="logo">beBR!GHT</h1>
          </Link>

          <Link id="log-out" to={"/adminLoginPage"}>
            <img src={logOut} />
            Log Out
          </Link>
        </header>


        <div class="container">
          <h1 style={{color: '#56425c'}}>Repairs</h1>
          <div id="content" class="table-responsive">
            <table class="table table-striped " id="tablecontent">
              <thead>
              <tr>
                <th className="row">
                  <td className="col">Serialnumber</td>
                  <td className="col">Part</td>
                  <td className="col">Camp</td>
                  <td className="col">Date</td>
                </th>
              </tr>
              </thead>
              {repairs.map(({serialNumber, part, camp, date }) => (
                      <tbody>
                      <tr>
                        <th class="row">
                          <td class="col" >
                            <div style={{color: '#56425c'}} key={serialNumber}>
                              {serialNumber}
                            </div>
                          </td>
                          <td class="col">
                            <div style={{color: '#56425c'}} key={part}>
                              {part}
                            </div>
                          </td>
                          <td style={{color: '#56425c'}} class="col">
                            <div key={camp}>
                              {camp}
                            </div>
                          </td>
                          <td className="col">
                            <div style={{color: '#56425c'}} key={date}>
                              {date}
                            </div>
                          </td>
                        </th>
                      </tr>
                      </tbody>
                  )
              )}
            </table>
          </div>


          </div>
        <footer>
          <p style={{color: "white"}}><strong>BRIGHT Products AS:</strong> Holbergs gate 19, 0166 Oslo. Norway | info@bright-products.com | +47 902 14 423<br/>
            Copyright2021. All rights reserved. | <strong>Disclaimer:</strong> Product information and images may vary from the current product in stock.</p>
        </footer>
        </div>

  );
}
