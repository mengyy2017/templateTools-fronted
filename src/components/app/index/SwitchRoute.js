import {Route} from "react-router-dom";
import Hi from "components/account/Hi";
import LoginFormInfo from "components/account/LoginFormInfo";
import {Switch} from "react-router";
import React from "react";
import MenuTable from "components/menu/MenuTable";
import TabHeader from "components/database/TabHeader";
import MenuForm from "components/menu/MenuForm";
import {Row} from "antd";
import MenuOperation from "components/menu/MenuOperation";
import AutoCompletion from 'components/spider/AutoCompletion';
import AsyncListener from "components/concurrency/AsyncListener";

class SwitchRoute extends React.Component{

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
                    <Route path="/autoCompletion" component={AutoCompletion}/>
                    <Route path="/asyncListener" component={AsyncListener}/>
                </Switch>
            </div>
        )
    }

}

export default SwitchRoute










