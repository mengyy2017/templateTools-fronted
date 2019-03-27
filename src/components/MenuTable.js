import {Table} from "antd";
import React from "react";
import {connect} from "react-redux";


class MenuTable extends React.Component{



    render = () => {

        const columns = [{
            title: '表名称',
            dataIndex: 'tableName',
            width: 150,
            render: text => <a href="javascript:;">{text}</a>,
        }, {
            title: '表注释',
            width: 150,
            dataIndex: 'tableComment',
        }]

        let {menuArr} = this.props

        return (
            <Table dataSource={menuArr}
                   pagination={{pageSize: 20}} rowKey="id" columns={columns} scroll={{y: 330}} />
        )
    }

}


var mapStateToProps = state => ({menuArr: state.menu ? state.menu.menuArr : []})


export default connect(mapStateToProps)(MenuTable)




















