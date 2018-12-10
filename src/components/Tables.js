import 'antd/dist/antd.less'
import React from 'react'
import {connect} from 'react-redux'
import { Table, Col } from 'antd'
import {getTablesAction, getColumnsAction} from 'actions/databaseAction'

class Tables extends React.Component{

    componentWillMount(){
        this.props.dispatch(getTablesAction())
    }

    onRow = record => ({
        onClick: () => {
            this.props.dispatch(getColumnsAction(record.tableName))
        }
    })

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
        
        const rowSelection = {
            onSelect: (record, selected, selectedRows, nativeEvent) => {
                selected ? this.props.addSelectedTables(record) : this.props.removeSlectedTables(record)
            }
        }

        let {tablesArr} = this.props

        return (
            <Col span={12}>
                <Table onRow={this.onRow.bind(this)} rowSelection={rowSelection} dataSource={tablesArr}
                       pagination={{pageSize: 20}} rowKey="id" columns={columns} scroll={{y: 330}} />
            </Col>
        )

    }

}

var mapStateToProps = state => ({tablesArr: state.tables ? state.tables.tablesArr : [] })

export default connect(mapStateToProps)(Tables)