import React from "react";
import ReactDOM from "react-dom";
import { Application } from "./Application";
import {fetchJSON, postJSON} from "./components/http";
import { BrowserRouter } from "react-router-dom";


//Here we create a const repairApi to get info from the repiar api. This will be used to fetch and post data from and to the API.
const repairApi = {
    listRepairs: async () => await fetchJSON("/api/repairs"),
    getRepair: async (id) => await fetchJSON(`/api/repairs/${id}`),
    createRepair: async ({ serialNumber, part, camp, date}) =>
        await postJSON("/api/repairs", { serialNumber, part, camp, date }),
    updateRepair: async (id, { serialNumber, part, camp, date }) =>
        await postJSON(`/api/repairs/${id}`, { serialNumber, part, camp, date }, "PUT"),
};

//this is used to render the whole application to the index.html file
ReactDOM.render(
    <BrowserRouter>
    <Application repairApi = {repairApi}/>
    </BrowserRouter>,
    document.getElementById("root")
);