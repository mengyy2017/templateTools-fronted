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
            // 主要是onChange函数      每次勾选或者反勾选 都会把剩下选中的keys作为参数传给这个onChange函数 所以在onChange可以记录勾选或者反勾选后 剩余勾选的keys
            // 这也是为什么onChange这里调用了updateSelectedColKeys 而在勾选或者反勾选时会先执行onChange 然后再执行onSelect或者onSelectAll 这也就是为什么在
            // onSelect和onSelectAll函数里面会执行dispatchSelectedColKeys的原因 就是onChange先记录了 然后onSelect或者OnselectAll再dispatch
            onChange: selectedRowKeys => updateSelectedColKeys(selectedRowKeys),
            onSelect: (record, selected, selectedRows, nativeEvent) => {
                if (selected)
                    getSelectedObjs().find(obj => obj.tableEntity.tableName == record.tableName) ? addSelectedCol(record) && dispatchSelectedColKeys() : message.error('请勾选数据库列对应的数据库表！')
                else
                    rmSelectedCol(record) && dispatchSelectedColKeys()
            },
            onSelectAll: (selected, selectedRows, changeRows) => {
                if (selected){
                    for(let record of changeRows) {
                        if(getSelectedObjs().find(obj => obj.tableEntity.tableName == record.tableName)) {
                            addSelectedCol(record) && dispatchSelectedColKeys()
                        } else {
                            message.error('请勾选数据库列对应的数据库表！')
                            break
                        }
                    }
                } else {
                    changeRows.forEach(record => rmSelectedCol(record) && dispatchSelectedColKeys())
                }
            }
        }

        return (
            <Col span={12} >
                <Table rowSelection={rowSelection} dataSource={colArr}
                       pagination={{pageSize: 20}} rowKey={record => record.tableName + '*@' + record.columnName} columns={columns} scroll={{y: 330}} />
            </Col>
        )
    }
}

const mapStateToProps = state => {
    const {colArr = [], selectedColKeys = []} = state.columns ? state.columns : {}
    return {colArr, selectedColKeys}
}

export default connect(mapStateToProps)(Columns)