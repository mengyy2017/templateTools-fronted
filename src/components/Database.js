import React from "react"
import {Button, Col, Row} from "antd";
import {createCodeAction, setSelectedColKeys} from 'actions/databaseAction'
import connect from "react-redux/es/connect/connect";

class Database extends React.Component {

    selectedObjs = []
    selectedColKeys = []

    addSelectedTable = record => this.selectedObjs.push({tableName: record.tableName, colList: []})

    rmSlectedTable = record => {

        let rmColList
        this.selectedObjs = this.selectedObjs.filter(obj => obj.tableName != record.tableName || (rmColList = obj.colList) == undefined )

        // rmColList.forEach(col => this.selectedColKeys.find((key, index) => col.tableName + '*@' + col.columnName == key ? this.selectedColKeys.splice(index, 1) : undefined))
        // 不能直接改 this.selectedColKeys  虽然 this.selectedColKeys 和 Column 中
        // const rowSelection = {
        //     selectedRowKeys: selectedColKeys,
        //     ......
        // }
        // 的键没有关系  和他的值也没有关系  但是改 this.selectedColKeys state中的 selectedColKeys 就会跟着变  不知道为什么
        // 好像有点明白了......  updateSelectedColKeys 中将 this.selectedColKeys 和 传进来的参数做了关联
        // 而这个传进来的参数是antd onChange事件的参数  这个参数很可能跟state有关  你在这里改this.selectedColKeys
        // 就相当于通过这个引用去改实际对象的值  参数和state也就跟着一块改了

        this.selectedKeys = [...this.selectedColKeys]
        rmColList.forEach(col => this.selectedKeys.find((key, index) => col.tableName + '*@' + col.columnName == key ? this.selectedKeys.splice(index, 1) : undefined))

        this.props.dispatch(setSelectedColKeys(this.selectedKeys))
        this.updateSelectedColKeys(this.selectedKeys)
    }

    // 这两个是更新选中的这条数据的信息 包含主键和其他的信息 传入后台的需要的是整条数据信息  跟state无关 不会引起对勾变化
    addSelectedCol = record => this.selectedObjs.find(obj => obj.tableName == record.tableName ? obj.colList = [record, ...obj.colList] : undefined)

    rmSelectedCol = record => this.selectedObjs.find(obj => obj.tableName == record.tableName ? obj.colList = obj.colList.filter(col => col.columnName != record.columnName) : undefined)



    getSelectedObjs = () => this.selectedObjs

    // 这个只更新主键 跟state有关系 更新后对勾会变化
    updateSelectedColKeys = keys => this.selectedColKeys = keys
    
    dispatchSelectedColKeys = () => this.props.dispatch(setSelectedColKeys(this.selectedColKeys))



    createCode = () => this.props.dispatch(createCodeAction(this.selectedObjs))

    render = () => {

        let {children, ...otherProps} = this.props

        const childrenWithProps = React.Children.map(children, (child, index) => {

                return React.cloneElement(child, {
                        addSelectedTable: this.addSelectedTable,
                        rmSlectedTable: this.rmSlectedTable,
                        addSelectedCol: this.addSelectedCol,
                        rmSelectedCol: this.rmSelectedCol,
                        getSelectedObjs: this.getSelectedObjs,
                        updateSelectedColKeys: this.updateSelectedColKeys,
                        dispatchSelectedColKeys: this.dispatchSelectedColKeys,
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
