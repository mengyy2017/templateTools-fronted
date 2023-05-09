import 'antd/dist/antd.less'
import React from 'react'
import {connect} from 'react-redux'
import { Table, Col } from 'antd'
import {getTablesAction, getColumnsAction} from 'actions/database/databaseAction'

class Tables extends React.Component{

    componentWillMount(){
        // this.props.dispatch(getTablesAction())
    }

    onRow = record => ({
        onClick: () => this.props.dispatch(getColumnsAction({"tableSchema": record.tableSchema, "tableName": record.tableName}))
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
        
        let {tablesArr, addSelectedTable, rmSlectedTable, selectedTableKeys, updateSelectedTableKeys, dispatchSelectedTableKeys} = this.props

        const rowSelection = {
            onChange: slectedTableKeys => updateSelectedTableKeys(slectedTableKeys),
            onSelect: (record, selected) => {
                // 为什么之前选中一个却没有打勾 因为调用addSelectedTable只改变了selectedObjs的值 而对勾选有影响的selectedTableKeys没有做任何更改 也就是selectedTableKeys没有添加任何键
                // 之前虽然在rmSlectedTable添加了对selectedTableKeys移除的逻辑 并且调用了dispatch 但至始至终都没有往selectedTableKeys里添加 那么移除逻辑对空数组移除还是空数组 所以加入
                // onChange函数 在本方法调用之前onChange方法里面会先去改变selectedTableKeys 然后这里再调用dispatch 而rmSelectedTable不用dispatch了 因为mSelectedTable里面有dispatch的逻辑
                selected ? addSelectedTable(record) && dispatchSelectedTableKeys() : rmSlectedTable(record)
            },
            onSelectAll: (selected, selectedRows, changeRows) => {
                selected ? changeRows.forEach(record => addSelectedTable(record)) && dispatchSelectedTableKeys() : changeRows.forEach(record => rmSlectedTable(record))
            },
            selectedRowKeys: selectedTableKeys
        }

        return (
            <Col span={12} >
                <Table onRow={this.onRow} rowSelection={rowSelection} dataSource={tablesArr}
                       pagination={{pageSize: 20}} rowKey="id" columns={columns} scroll={{y: 330}} />
            </Col>
        )
    }
}

const mapStateToProps = state => {
    const {tablesArr = [], selectedTableKeys = []} = state.tables ? state.tables : {}
    return {tablesArr, selectedTableKeys}
}
// const mapStateToProps = state => ({tablesArr: state.tables ? state.tables.tablesArr : [] })
// const mapStateToProps = state => ({tablesArr} = state.tables)

export default connect(mapStateToProps)(Tables)