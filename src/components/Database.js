import React from "react"
import {Button, Col, Row} from "antd";
import {createCodeAction, setCoulumnSelectedRowKeys} from 'actions/databaseAction'
import connect from "react-redux/es/connect/connect";

class Database extends React.Component {

    selectedObjs = []

    getSelectedObjs = () => this.selectedObjs

    updateColumnSelectedKeys = keys => this.columnSelectedKeys = keys
    
    dispatchColumnSelectedKeys = () => this.props.dispatch(setCoulumnSelectedRowKeys(this.columnSelectedKeys))

    addSelectedTable = record => this.selectedObjs.push({tableName: record.tableName, columnList: []}) && console.log(this.getSelectedObjs())

    removeSlectedTable = record => {
        (this.selectedObjs = this.selectedObjs.filter(obj => obj.tableName != record.tableName))

        // this.dispatchColumnSelectedKeys()
        
    }

    addSelectedColumn = record => this.selectedObjs.find(obj => obj.tableName == record.tableName ? obj.columnList = [record, ...obj.columnList] : undefined)

    removeSelectedColumn = record => this.selectedObjs.find(obj => obj.tableName == record.tableName ? obj.columnList = obj.columnList.filter(column => column.columnName != record.columnName) : undefined)
    
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
                        updateColumnSelectedKeys: this.updateColumnSelectedKeys,
                        dispatchColumnSelectedKeys: this.dispatchColumnSelectedKeys,
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

var mapStateToProps = state => ({})

export default connect(mapStateToProps)(Database)
