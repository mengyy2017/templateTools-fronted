import {Route} from "react-router-dom";
import Hi from "components/account/Hi";
import LoginFormInfo from "components/account/LoginFormInfo";
import {Switch} from "react-router";
import React from "react";
import MenuTable from "components/MenuTable";
import TabHeader from "components/database/TabHeader";
import MenuForm from "components/MenuForm";
import {Row} from "antd";
import MenuOperation from "components/MenuOperation";

class PrimarySwitch extends React.Component{

    render = () => {

        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Hi}/>
                    <Route path="/login" component={LoginFormInfo}/>
                    <Route path="/select" component={TabHeader}/>
                    <Route path="/menu" render={() => {
                        return (
                            <div>
                                <MenuOperation  />
                                <Row>
                                    <MenuTable  />
                                    <MenuForm  />
                                </Row>
                            </div>
                        )
                    }}/>
                </Switch>
            </div>
        )
    }

}

export default PrimarySwitch










