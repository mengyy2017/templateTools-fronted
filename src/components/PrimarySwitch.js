import {Route} from "react-router-dom";
import Hi from "components/Hi";
import LoginFormInfo from "components/LoginFormInfo";
import ProcessTabs from "components/ProcessTabs";
import {Switch} from "react-router";
import React from "react";
import MenuTable from "components/MenuTable";


class PrimarySwitch extends React.Component{

    render = () => {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Hi}/>
                    <Route path="/login" component={LoginFormInfo}/>
                    <Route path="/select" component={ProcessTabs}/>
                    <Route path="/menu" component={MenuTable}/>
                </Switch>
            </div>
        )
    }

}

export default PrimarySwitch










