import 'antd/dist/antd.less'
import React from 'react'
import {connect} from 'react-redux'
import { Table, Col,message } from 'antd'
import {getColumnsAction} from 'actions/databaseAction'

class Columns extends React.Component{

    constructor(props) {
        super(props);
        // this.state = {
        //     columnSelectedRowKeys: []
        // }
    }

    onRow = (record) => ({
        onClick: () => {
        }
    })


    render = () => {

        const columns = [{
            title: '列名称',
            dataIndex: 'columnName',
            render: text => <a href="javascript:;">{text}</a>,
        }, {
            title: '列注释',
            dataIndex: 'columnComment',
        }]
        
        const rowSelection = {
            // selectedRowKeys: this.state.columnSelectedRowKeys,
            onChange: (selectedRowKeys, selectedRows) => {

                // console.log(selectedRows)
                // let slectedRecord =  selectedRows[selectedRows.length - 1] || {}
                // if(this.props.selectedObjs.find(obj => obj.tableName == slectedRecord.tableName)){
                //     this.setState({ columnSelectedRowKeys: selectedRowKeys })
                //
                // }

                // this.props.selectedObjs.find(obj => obj.tableName == selectedRows[selectedRows.length - 1].tableName) ? this.setState({ columnSelectedRowKeys: selectedRowKeys }) == undefined :  message.error('请勾选数据库列对应的数据库表！')
                // console.log(selectedRowKeys)
                // console.log(selectedRows)
            },
            onSelect: (record, selected, selectedRows, nativeEvent) => {
                if(selected){
                    if(this.props.selectedObjs.find(obj => obj.tableName == record.tableName))
                        this.props.addSelectedColumns(record)
                    else
                        message.error('请勾选数据库列对应的数据库表！')
                } else {
                    this.props.removeSelectedColumns(record)
                }

            }
        }

        let {columnsArr} = this.props

        return (
            <Col span={12}>
                <Table onRow={this.onRow.bind(this)} rowSelection={rowSelection} dataSource={columnsArr} 
                       pagination={{pageSize: 20}} rowKey={record => record.tableName + '*@'+ record.columnName} columns={columns} scroll={{y: 330}} />
            </Col>
        )

    }

}

var mapStateToProps = state => ({columnsArr: state.columns ? state.columns.columnsArr : []})

export default connect(mapStateToProps)(Columns)