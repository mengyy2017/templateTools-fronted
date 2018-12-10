import 'antd/dist/antd.less'
import React from 'react'
import {connect} from 'react-redux'
import { Table, Col, message } from 'antd'

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

        let {colArr, selectedColKeys, getSelectedObjs, addSelectedCol,
            rmSelectedCol, updateSelectedColKeys, dispatchSelectedColKeys} = this.props

        const rowSelection = {
            selectedRowKeys: selectedColKeys,
            onChange: selectedRowKeys => updateSelectedColKeys(selectedRowKeys),
            onSelect: (record, selected, selectedRows, nativeEvent) => {
                if (selected)
                    getSelectedObjs().find(obj => obj.tableName == record.tableName) ? addSelectedCol(record) && dispatchSelectedColKeys() : message.error('请勾选数据库列对应的数据库表！')
                else
                    rmSelectedCol(record) && dispatchSelectedColKeys()
            }
        }

        return (
            <Col span={12}>
                <Table rowSelection={rowSelection} dataSource={colArr}
                       pagination={{pageSize: 20}} rowKey={record => record.tableName + '*@' + record.columnName} columns={columns} scroll={{y: 330}} />
            </Col>
        )
    }
}

var mapStateToProps = state => {
    const {colArr = [], selectedColKeys = []} = state.columns ? state.columns : {}
    return {colArr, selectedColKeys}
}

export default connect(mapStateToProps)(Columns)