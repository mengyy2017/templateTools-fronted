import React from "react"
import {Button, Col, Row} from "antd";
import {createCodeAction} from 'actions/databaseAction'
import connect from "react-redux/es/connect/connect";

class Database extends React.Component {

    selectedObjs = []

    addSelectedTables = record => this.selectedObjs.push({tableName: record.tableName, columnNameList: []})

    removeSlectedTables = record => this.selectedObjs = this.selectedObjs.filter(obj => obj.tableName != record.tableName)

    addSelectedColumns = record => this.selectedObjs.find(obj => obj.tableName == record.tableName ? obj.columnNameList = [record.columnName, ...obj.columnNameList] : undefined)

    removeSelectedColumns = record => this.selectedObjs.find(obj => obj.tableName == record.tableName ? obj.columnNameList.filter(colName => colName != record.columnName) : undefined)
    
    // columnSelectedChange = columnList = > this.selectedObjs.find(obj => obj.tableName == ) 

    createCode = () => {
        this.props.dispatch(createCodeAction(this.selectedObjs))
    }

    render = () => {

        let {children, ...otherProps} = this.props

        const childrenWithProps = React.Children.map(children, child => React.cloneElement(child, {
                addSelectedTables: this.addSelectedTables,
                removeSlectedTables: this.removeSlectedTables,
                addSelectedColumns: this.addSelectedColumns,
                removeSelectedColumns: this.removeSelectedColumns,
                selectedObjs: this.selectedObjs,
                ...otherProps
            })
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
