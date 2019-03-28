import {Route} from "react-router-dom";
import Hi from "components/account/Hi";
import LoginFormInfo from "components/account/LoginFormInfo";
import {Switch} from "react-router";
import React from "react";
import MenuTable from "components/MenuTable";
import TabHeader from "components/database/TabHeader";
import MenuForm from "components/MenuForm";
import {Button, Col, Row, Tag} from "antd";
import connect from "react-redux/es/connect/connect";
import {changeMenuOperTypeAction} from "actions/menuAction";


class PrimarySwitch extends React.Component{

    addMenuPer = () => {
        this.props.dispatch(changeMenuOperTypeAction({"menuOperType": "新增"}))
    }

    render = () => {

        let {menuOperation = {}} = this.props

        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Hi}/>
                    <Route path="/login" component={LoginFormInfo}/>
                    <Route path="/select" component={TabHeader}/>
                    <Route path="/menu" render={() => {
                        return (
                            <div>
                                <Row type="flex" justify="end" className="header">
                                    <Col span={14}>
                                        <Button type="primary" onClick={this.addMenuPer}>新增</Button>
                                    </Col>
                                    <Col span={2}>
                                        {menuOperation.menuOperType ? <Tag color="green">{menuOperation.menuOperType}数据</Tag>: ""}
                                    </Col>
                                </Row>
                                <Row>
                                    <MenuTable/>
                                    <MenuForm/>
                                </Row>
                            </div>
                        )
                    }}/>
                </Switch>
            </div>
        )
    }

}

const mapStateToProps = state => ({menuOperation: state.menu ? state.menu.menuOperation : []})

export default connect(mapStateToProps)(PrimarySwitch)










