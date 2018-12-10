import React from "react"
import {Button, Col, Row} from "antd";
import {createCodeAction, setCoulumnSelectedRowKeys} from 'actions/databaseAction'
import connect from "react-redux/es/connect/connect";

class Database extends React.Component {

    selectedObjs = []

    getSelectedObjs = () => this.selectedObjs

    addSelectedTable = record => this.selectedObjs.push({tableName: record.tableName, columnList: []})

    removeSlectedTable = record => {

        let removeColumn
        this.selectedObjs = this.selectedObjs.filter(obj => obj.tableName != record.tableName || (removeColumn = obj.columnList) == undefined )

        // removeColumn.forEach(column => this.colSelectedKeys.find((key, index) => column.tableName + '*@' + column.columnName == key ? this.colSelectedKeys.splice(index, 1) : undefined))
        // 不能直接改 this.colSelectedKeys  虽然 this.colSelectedKeys 和 Column 中
        // const rowSelection = {
        //     selectedRowKeys: columnSelectedRowKeys,
        //     ......
        // }
        // 的键没有关系  和他的值也没有关系  但是改 this.colSelectedKeys state中的columnSelectedRowKeys就会跟着变  不知道为什么
        // 好像有点明白了......  updateColumnSelectedRowKeys中将 this.colSelectedKeys 和 传进来的参数做了关联
        // 而这个传进来的参数是antd onChange事件的参数  这个参数很可能跟state有关  你在这里改this.colSelectedKeys
        // 就相当于通过这个引用去改实际对象的值  参数和state也就跟着一块改了

        this.finallySelectedKeys = [...this.colSelectedKeys]
        removeColumn.forEach(column => this.finallySelectedKeys.find((key, index) => column.tableName + '*@' + column.columnName == key ? this.finallySelectedKeys.splice(index, 1) : undefined))

        this.props.dispatch(setCoulumnSelectedRowKeys(this.finallySelectedKeys))
        this.updateColumnSelectedRowKeys(this.finallySelectedKeys)
    }

    addSelectedColumn = record => this.selectedObjs.find(obj => obj.tableName == record.tableName ? obj.columnList = [record, ...obj.columnList] : undefined)

    removeSelectedColumn = record => this.selectedObjs.find(obj => obj.tableName == record.tableName ? obj.columnList = obj.columnList.filter(column => column.columnName != record.columnName) : undefined)

    updateColumnSelectedRowKeys = keys => this.colSelectedKeys = keys
    
    dispatchColumnSelectedRowKeys = () => this.props.dispatch(setCoulumnSelectedRowKeys(this.colSelectedKeys))

    createCode = () => this.props.dispatch(createCodeAction(this.selectedObjs))

    render = () => {

        let {children, ...otherProps} = this.props

        const childrenWithProps = React.Children.map(children, (child, index) => {

                return React.cloneElement(child, {
                        addSelectedTable: this.addSelectedTable,
                        removeSlectedTable: this.removeSlectedTable,
                        addSelectedColumn: this.addSelectedColumn,
                        removeSelectedColumn: this.removeSelectedColumn,
                        getSelectedObjs: this.getSelectedObjs,
                        updateColumnSelectedRowKeys: this.updateColumnSelectedRowKeys,
                        dispatchColumnSelectedRowKeys: this.dispatchColumnSelectedRowKeys,
                        // colSelectedKeys: this.colSelectedKeys,
                        ...otherProps
                    })
            }
        )

        return (
            <div>
                <Row type="flex" justify="end" className="header">
                    <Col span={14}><Button type="primary" onClick={this.createCode}>生成代码</Button></Col>
                </Row>
                {childrenWithProps}
            </div>
        )
    }
}

var mapStateToProps = state => {
    const {columnArr = [], columnSelectedRowKeys = []} = state.columns ? state.columns : {}
    return {columnArr, columnSelectedRowKeys}
}

export default connect(mapStateToProps)(Database)
