import {Button, Col, Row, Tag} from "antd";
import React from "react";
import {changeMenuOperTypeAction} from "actions/menu/menuAction";
import connect from "react-redux/es/connect/connect";

class MenuOperation extends React.Component{

    addMenuPer = () => {
        this.props.dispatch(changeMenuOperTypeAction({"menuOperType": "新增"}))
    }

    render = () => {

        let {menuOperation = {}} = this.props

        return (
            <Row type="flex" justify="end" className="header">
                <Col span={14}>
                    <Button type="primary" onClick={this.addMenuPer}>新增</Button>
                </Col>
                <Col span={2}>
                    {menuOperation.menuOperType ? <Tag color="green">{menuOperation.menuOperType}数据</Tag>: ""}
                </Col>
            </Row>
        )
    }
}

const mapStateToProps = state => ({menuOperation: state.menu ? state.menu.menuOperation : []})

export default connect(mapStateToProps)(MenuOperation)









