import {Col, Table} from "antd";
import React from "react";
import {connect} from "react-redux";
import {getMenuAction, getMenuUniqAction} from "actions/menu/menuAction";

class MenuTable extends React.Component{

    componentWillMount(){
        this.props.dispatch(getMenuAction())
    }

    onRow = record => ({
        onClick: () => this.props.dispatch(getMenuUniqAction({"id": record.id}))
    })

    render = () => {

        const columns = [{
            title: '访问路径',
            dataIndex: 'url',
            width: 150,
            render: text => <a href="javascript:;">{text}</a>,
        }, {
            title: '权限',
            width: 150,
            dataIndex: 'permission',
        }]

        let {menuArr} = this.props

        return (
            <Col span={12}>
                <Table onRow={this.onRow} dataSource={menuArr} pagination={{pageSize: 20}} rowKey="id" columns={columns} scroll={{y: 330}} />
            </Col>
        )
    }
}

const mapStateToProps = state => ({menuArr: state.menu ? state.menu.menuArr : []})

export default connect(mapStateToProps)(MenuTable)




















