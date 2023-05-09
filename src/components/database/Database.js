import React from "react"
import {Button, Col, Form, Input, Row, Select} from "antd";
import {createCodeAction, setSelectedColKeys, setSelectedTableKeys, getTablesAction} from 'actions/database/databaseAction'
import connect from "react-redux/es/connect/connect";

class Database extends React.Component {

    selectedObjs = []
    selectedColKeys = []
    selectedTableKeys = []

    addSelectedTable = record => this.selectedObjs.push({tableEntity: {tableName: record.tableName}, colList: []})

    rmSlectedTable = record => {
        let rmColList = [] // 这个在下面这行代码会把这个表对应的所有列给赋值上去 并且调用的是selectedObjs的filter方法 当前表也会从selectedObjs移除
        this.selectedObjs = this.selectedObjs.filter(obj => (obj.tableEntity && obj.tableEntity.tableName != record.tableName) || (rmColList = obj.colList) == undefined )

        // rmColList.forEach(col => this.selectedColKeys.find((key, index) => col.tableName + '*@' + col.columnName == key ? this.selectedColKeys.splice(index, 1) : undefined))
        // 不能直接改 this.selectedColKeys  虽然 this.selectedColKeys 和 Column 中
        // const rowSelection = {
        //     selectedRowKeys: selectedColKeys,
        //     ......
        // }
        // 的键没有关系  和他的值也没有关系  但是改 this.selectedColKeys state中的 selectedColKeys 就会跟着变  不知道为什么
        // 好像有点明白了......  updateSelectedColKeys 中将 this.selectedColKeys 和 传进来的参数做了关联而这个传进来的参数
        // 是antd onChange事件的参数  这个参数很可能跟state有关  你在这里改this.selectedColKeys就相当于通过这个引用去改实际对
        // 象的值  参数和state也就跟着一块改了 难道onChange函数就把选中的key绑定到一个变量上去吗 不是 onChange的参数是操作后还处
        // 于选择状态的键 所以在onChange里要把键记录到一个变量上去 不然不记录的话点选中了 从哪个变量里能获取到选中的键呢 获取不到又
        // 怎么能赋值给antd的table的rowSelection.selectedRowKeys属性 让其知道哪些键被选中了呢

        this.selectedColumnKeys = [...this.selectedColKeys] // 下面对rmColList也就是对要删除的列进行循环 从selectedColumnKeys（选中coloumnKey的副本）里找到这个列然后用splice删除
        rmColList.forEach(col => this.selectedColumnKeys.find((key, index) => col.tableName + '*@' + col.columnName == key ? this.selectedColumnKeys.splice(index, 1) : undefined))

        this.props.dispatch(setSelectedColKeys(this.selectedColumnKeys))
        this.updateSelectedColKeys(this.selectedColumnKeys)



        this.selectedTKeys = [...this.selectedTableKeys]
        this.selectedTKeys.find((key, index) => record.tableName == key ? this.selectedTKeys.splice(index, 1) : undefined)

        this.props.dispatch(setSelectedTableKeys(this.selectedTKeys))
        this.updateSelectedTableKeys(this.selectedTKeys)
    }

    rmAll = () => {
        this.selectedObjs = []
        this.selectedColKeys = []

        this.props.dispatch(setSelectedColKeys([]))
        this.updateSelectedColKeys([])

        this.props.dispatch(setSelectedTableKeys([]))
        this.updateSelectedTableKeys([])
    }

    // 这两个是更新选中的这条数据的信息 包含主键和其他的信息 传入后台的需要的是整条数据信息  跟state无关 不会引起对勾变化
    addSelectedCol = record => this.selectedObjs.find(obj => (obj.tableEntity && obj.tableEntity.tableName == record.tableName) ? obj.colList = [...obj.colList, record] : undefined)

    rmSelectedCol = record => this.selectedObjs.find(obj => (obj.tableEntity && obj.tableEntity.tableName == record.tableName) ? obj.colList = obj.colList.filter(col => col.columnName != record.columnName) : undefined)



    getSelectedObjs = () => this.selectedObjs

    // 这个只更新主键 跟state有关系 更新后对勾会变化
    updateSelectedColKeys = keys => this.selectedColKeys = keys

    updateSelectedTableKeys = keys => this.selectedTableKeys = keys

    dispatchSelectedColKeys = () => this.props.dispatch(setSelectedColKeys(this.selectedColKeys))

    dispatchSelectedTableKeys = () => this.props.dispatch(setSelectedTableKeys(this.selectedTableKeys))



    pressEnter = e => this.props.dispatch(getTablesAction({"tableName": e.target.value}))

    searchTables = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.dispatch(getTablesAction(values))
            }
        });

    }


    createCode = () => this.props.dispatch(createCodeAction(this.selectedObjs))

    last = () => {
        this.rmAll()
        this.props.changeActiveKey("0")
    }

    render = () => {

        const { getFieldDecorator } = this.props.form;

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
                        updateSelectedTableKeys: this.updateSelectedTableKeys,
                        dispatchSelectedTableKeys: this.dispatchSelectedTableKeys,
                        ...otherProps
                    })
            }
        )

        return (
            <div>
                <Row type="flex" justify="start" style={{marginBottom: 20}}>
                    <Col span={9} push={2}>
                        <Form layout={"inline"} onSubmit={this.searchTables}>
                            <Form.Item label="tableName" placeholder="Please input tableName">
                                {getFieldDecorator('tableName', {initialValue: "",})(<Input style={{width: 250}} onPressEnter={this.pressEnter} />)}
                            </Form.Item>

                            <Form.Item >
                                <Button type="primary" htmlType="submit">搜索</Button>
                            </Form.Item>
                        </Form>
                    </Col>

                    {/*<Col span={12} push={2} ><Button type="primary" style={{marginTop: 4, background: "#6a986a", borderColor: "#6a986a"}} onClick={this.createCode}>生成代码</Button></Col>*/}
                    <Col span={12} push={2} ><Button type="primary" style={{marginTop: 4}} onClick={this.createCode}>生成代码</Button></Col>
                </Row>

                <Row gutter={24}>
                    {childrenWithProps}
                </Row>
                <Row>
                    <Col span={8}>
                    </Col>
                    <Col span={8}>
                        <Button type="primary" htmlType="submit" onClick={this.last}>last</Button>
                    </Col>
                    <Col span={8}>
                        <Button type="primary" htmlType="submit">next</Button>
                    </Col>
                </Row>
            </div>
        )
    }
}

const mapStateToProps = state => ({})

const databaseInfo = Form.create({ name: 'Database' })(Database);

export default connect(mapStateToProps)(databaseInfo)
