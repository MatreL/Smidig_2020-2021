import { BrowserRouter, Link } from "react-router-dom";
import { Route, Switch } from "react-router";
import { LoginPage } from "./LoginPage";
import { FrontPage } from "./FrontPage";
import { ReportPage } from "./ReportPage";
import { AdminLoginPage } from "./AdminLoginPage";
import { AdminListRepair } from "./AdminListRepair";
import {EducationPageVideo} from "./EducationPageVideo"
import React from "react";
import {EducationPage} from "./EducationPage";
import {EducationPage2} from "./EducationPage2";
import {TestPage} from "./TestPage";
import {IntroductionPage} from "./IntroductionPage";
import {RepairEducation} from "./RepairEducation";
import {RepairEducation1} from "./RepairEducation1";
import {RepairEducation2} from "./RepairEducation2";

export function Application({repairApi}) {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/frontPage">
                    <FrontPage />
                </Route>
                <Route path="/adminLoginPage">
                    <AdminLoginPage />
                </Route>
                <Route path="/adminListRepair">
                    <AdminListRepair  repairApi={repairApi}/>
                </Route>
                <Route path="/reportPage">
                    <ReportPage repairApi={repairApi} />
                </Route>
                <Route path="/introductionPage">
                    <IntroductionPage />
                </Route>
                <Route path="/educationPage">
                    <EducationPage />
                </Route>
                <Route path="/repairEducation">
                    <RepairEducation />
                </Route>
                <Route path="/repairEducation1">
                    <RepairEducation1 />
                </Route>
                <Route path="/repairEducation2">
                    <RepairEducation2 />
                </Route>
                <Route path="/educationPageVideo">
                    <EducationPageVideo />
                </Route>
                <Route path="/educationPage2">
                    <EducationPage2 />
                </Route>
                <Route path="/testPage">
                    <TestPage />
                </Route>
                <Route path="/">
                    <LoginPage />
                </Route>
                <Route>
                    <h1>Not found</h1>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}
