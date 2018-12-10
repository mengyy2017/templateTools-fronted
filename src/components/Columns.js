import 'antd/dist/antd.less'
import React from 'react'
import {connect} from 'react-redux'
import { Table, Col,message } from 'antd'
import {setCoulumnSelectedRowKeys} from 'actions/databaseAction'

class Columns extends React.Component{

    render = () => {

        const columns = [{
            title: '列名称',
            dataIndex: 'columnName',
            render: text => <a href="javascript:;">{text}</a>,
        }, {
            title: '列注释',
            dataIndex: 'columnComment',
        }]

        let {columnArr, columnSelectedRowKeys, getSelectedObjs, addSelectedColumn,
            removeSelectedColumn, updateColumnSelectedRowKeys, dispatchColumnSelectedRowKeys} = this.props

        const rowSelection = {
            selectedRowKeys: columnSelectedRowKeys,
            onChange: selectedRowKeys => updateColumnSelectedRowKeys(selectedRowKeys),
            onSelect: (record, selected, selectedRows, nativeEvent) => {
                if (selected) {
                    if (getSelectedObjs().find(obj => obj.tableName == record.tableName)) {
                        addSelectedColumn(record)
                        dispatchColumnSelectedRowKeys()
                    } else {
                        message.error('请勾选数据库列对应的数据库表！')
                    }
                } else {
                    removeSelectedColumn(record)
                    dispatchColumnSelectedRowKeys()
                }
            }
        }

        return (
            <Col span={12}>
                <Table rowSelection={rowSelection} dataSource={columnArr}
                       pagination={{pageSize: 20}} rowKey={record => record.tableName + '*@' + record.columnName} columns={columns} scroll={{y: 330}} />
            </Col>
        )
    }
}

var mapStateToProps = state => {
    const {columnArr = [], columnSelectedRowKeys = []} = state.columns ? state.columns : {}
    return {columnArr, columnSelectedRowKeys}
}

export default connect(mapStateToProps)(Columns)