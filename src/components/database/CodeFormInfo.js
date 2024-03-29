import React from "react";
import connect from "react-redux/es/connect/connect";
import {Form, Input, Select, Button, Col, Row} from 'antd';
import {setCodeInfoAction} from "actions/database/codeFormAction";

class CodeFormInfo extends React.Component{

    next = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {

                let rtName = values['rtName']
                let rtNameLen = rtName.replaceAll(" ", "").split(",").length

                for(let [k, v] of Object.entries(values)){

                    if(k.startsWith("mt") || k.startsWith("rt")) {

                        var valueArr = Number.isFinite(v) ? [v] : v.replaceAll(" ", "").split(",")
                        if(valueArr.length < rtNameLen)
                            for (let i = 1; i < rtNameLen; i++)
                                valueArr[i] = valueArr[0]

                        values[k] = valueArr;
                    }else if(k == "linearIndexList")
                        values[k] = Number.isFinite(v) ? [v] : v.replaceAll(" ", "").split(",")

                }

                this.props.dispatch(setCodeInfoAction(values))
                this.props.changeActiveKey("1")
            }
        });
    }

    render = () => {

        const { getFieldDecorator } = this.props.form;

        const formItemLayout = {
            labelCol: {
                xs: { span: 4 },
                sm: { span: 4 },
            },
            wrapperCol: {
                xs: { span: 3 },
                sm: { span: 3 },
            },
        };

        const formItemLayoutSec = {
            labelCol: {
                xs: { span: 7 },
                sm: { span: 7 },
            },
            wrapperCol: {
                xs: { span: 8 },
                sm: { span: 8 },
            },
        };

        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 11,
                },
            },
        };

        let {info} = this.props
        return (
            <div>

                <Form onSubmit={this.next}>

                    <Row>
                        <Form.Item {...tailFormItemLayout}>
                            <Button type="primary" htmlType="submit">next</Button>
                        </Form.Item>
                    </Row>

                    <Row style={{marginBottom: 600}}>
                        <Col span={24}>
                            <Form.Item{...formItemLayout} label="database address" placeholder="Please input your database address">
                                {getFieldDecorator('databaseAddress', {
                                    initialValue: info.databaseAddress,
                                    rules: [{ required: true, message: 'Please input your database schema!', whitespace: true }],
                                })(
                                    <Input placeholder="Please input your database address" />
                                )}
                            </Form.Item>

                            <Form.Item{...formItemLayout} label="database type">
                                {getFieldDecorator('databaseType', {
                                    initialValue: info.databaseType,
                                    rules: [
                                        { required: true, message: 'Please select your database type!' },
                                    ],
                                })(
                                    <Select placeholder="Please select a database type">
                                        <Select.Option value="mysql">mysql</Select.Option>
                                        <Select.Option value="oracle">oracle</Select.Option>
                                        <Select.Option value="dm">dm</Select.Option>
                                    </Select>
                                )}
                            </Form.Item>

                            <Form.Item{...formItemLayout} label="database port">
                                {getFieldDecorator('databasePort', {
                                    initialValue: info.databasePort,
                                    rules: [{ required: true, message: 'Please input your database port!', whitespace: true }],
                                })(
                                    <Input placeholder="Please input your database port" />
                                )}
                            </Form.Item>

                            <Form.Item{...formItemLayout} label="sys database schema" placeholder="Please input your sys database schema">
                                {getFieldDecorator('sysDatabaseSchema', {
                                    initialValue: info.sysDatabaseSchema,
                                    rules: [{ required: true, message: 'Please input your sys database schema!', whitespace: true }],
                                })(
                                    <Input placeholder="Please input your sys database schema" />
                                )}
                            </Form.Item>

                            <Form.Item{...formItemLayout} label="username">
                                {getFieldDecorator('databaseUsername', {
                                    initialValue: info.databaseUsername,
                                    rules: [{ required: true, message: 'Please input your database username!', whitespace: true }],
                                })(
                                    <Input placeholder="Please input your database username"/>
                                )}
                            </Form.Item>

                            <Form.Item{...formItemLayout} label="password">
                                {getFieldDecorator('databasePassword', {
                                    initialValue: info.databasePassword,
                                    rules: [{ required: true, message: 'Please input your database password!', whitespace: true }],
                                })(
                                    <Input placeholder="Please input your database password" />
                                )}
                            </Form.Item>

                            <Form.Item {...formItemLayout} label="business database schema" placeholder="Please input your business database schema">
                                {getFieldDecorator('businessDatabaseSchema', {
                                    initialValue: info.businessDatabaseSchema,
                                    rules: [{ required: true, message: 'Please input your business database schema!', whitespace: true }],
                                })(
                                    <Input placeholder="Please input your business database schema" />
                                )}
                            </Form.Item>

                            <Form.Item {...formItemLayout} label="code package">
                                {getFieldDecorator('codePackage', {
                                    // initialValue: "com.guowang", // 可以是com.templateTools形式
                                    initialValue: info.codePackage,
                                    rules: [{ required: true, message: 'Please input your code package!', whitespace: true }],
                                })(
                                    <Input placeholder="Please input your code package" />
                                )}
                            </Form.Item>

                            <Form.Item {...formItemLayout} label="author">
                                {getFieldDecorator('author', {
                                    initialValue: "",
                                    rules: [{ required: false, whitespace: true }],
                                })(
                                    <Input />
                                )}
                            </Form.Item>

                            <Form.Item {...formItemLayout} label="xmlWithSchema">
                                {getFieldDecorator('xmlWithSchema', {
                                    initialValue: info.xmlWithSchema,
                                    rules: [{ required: false }],
                                })(
                                    <Input />
                                )}
                            </Form.Item>

                            <Form.Item {...formItemLayout} label="DatabaseInfo Mapper Sec Path">
                                {getFieldDecorator('DatabaseInfoMapperSecPath', {
                                    initialValue: info.DatabaseInfoMapperSecPath,
                                    rules: [{ required: false, whitespace: true }],
                                })(
                                    <Input />
                                )}
                            </Form.Item>

                        </Col>







                        <Col push={8} span={12} style={{position: "absolute", marginTop: "0%"}}>

                            <Form.Item {...formItemLayoutSec} label="default query table">
                                {getFieldDecorator('defaultQueryTable', {
                                    initialValue: "",
                                    rules: [{ required: false, whitespace: true }],
                                })(
                                    <Input />
                                )}
                            </Form.Item>

                            <Form.Item {...formItemLayoutSec} label="mtRtJoinTypeList">
                                {getFieldDecorator('mtRtJoinTypeList', {
                                    initialValue: info.mtRtJoinTypeList,
                                    rules: [{ required: false }],
                                })(
                                    <Input placeholder="Please input your mtRtJoinTypeList" />
                                )}
                            </Form.Item>

                            <Form.Item {...formItemLayoutSec} label="mtRtJoinHasMiddleList">
                                {getFieldDecorator('mtRtJoinHasMiddleList', {
                                    initialValue: info.mtRtJoinHasMiddleList,
                                    rules: [{ required: false }],
                                })(
                                    <Input placeholder="Please input your mtRtJoinHasMiddleList" />
                                )}
                            </Form.Item>

                            <Form.Item {...formItemLayoutSec} label="one2ManyPage">
                                {getFieldDecorator('one2ManyPage', {
                                    initialValue: info.one2ManyPage,
                                    rules: [{ required: false }],
                                })(
                                    <Input placeholder="Please input your one2ManyPage" />
                                )}
                            </Form.Item>

                            <Form.Item {...formItemLayoutSec} label="insertCascade">
                                {getFieldDecorator('insertCascade', {
                                    initialValue: info.insertCascade,
                                    rules: [{ required: false }],
                                })(
                                    <Input placeholder="Please input your insertCascade" />
                                )}
                            </Form.Item>

                            <Form.Item {...formItemLayoutSec} label="displayMiddle">
                                {getFieldDecorator('displayMiddle', {
                                    initialValue: info.displayMiddle,
                                    rules: [{ required: false }],
                                })(
                                    <Input placeholder="Please input your displayMiddle" />
                                )}
                            </Form.Item>

                            <Form.Item {...formItemLayoutSec} label="containLinear">
                                {getFieldDecorator('containLinear', {
                                    initialValue: info.containLinear,
                                    rules: [{ required: false }],
                                })(
                                    <Input placeholder="Please input your containLinear" />
                                )}
                            </Form.Item>

                            <Form.Item {...formItemLayoutSec} label="linearIndexList">
                                {getFieldDecorator('linearIndexList', {
                                    initialValue: info.linearIndexList,
                                    rules: [{ required: false }],
                                })(
                                    <Input placeholder="Please input your linearIndexList" />
                                )}
                            </Form.Item>

                            <Form.Item {...formItemLayoutSec} label="BaseEntity Sec Path">
                                {getFieldDecorator('BaseEntitySecPath', {
                                    initialValue: info.BaseEntitySecPath,
                                    rules: [{ required: true, whitespace: true }],
                                })(
                                    <Input placeholder="Please input your BaseEntity Sec Path" />
                                )}
                            </Form.Item>

                            <Form.Item {...formItemLayoutSec} label="PageInfoEntity Sec Path">
                                {getFieldDecorator('PageInfoEntitySecPath', {
                                    initialValue: info.PageInfoEntitySecPath,
                                    rules: [{ required: true, whitespace: true }],
                                })(
                                    <Input placeholder="Please input your PageInfoEntity Sec Path" />
                                )}
                            </Form.Item>

                            <Form.Item {...formItemLayoutSec} label="IService Sec Path">
                                {getFieldDecorator('IServiceSecPath', {
                                    initialValue: info.IServiceSecPath,
                                    rules: [{ required: true, whitespace: true }],
                                })(
                                    <Input placeholder="Please input your IService Sec Path" />
                                )}
                            </Form.Item>

                            <Form.Item {...formItemLayoutSec} label="CommonController Sec Path">
                                {getFieldDecorator('CommonControllerSecPath', {
                                    initialValue: info.CommonControllerSecPath,
                                    rules: [{ required: true, whitespace: true }],
                                })(
                                    <Input placeholder="Please input your CommonController Sec Path" />
                                )}
                            </Form.Item>

                            <Form.Item {...formItemLayoutSec} label="Entity Sec Path">
                                {getFieldDecorator('EntitySecPath', {
                                    initialValue: info.EntitySecPath,
                                    rules: [{ required: true, whitespace: true }],
                                })(
                                    <Input placeholder="Please input your Entity Sec Path" />
                                )}
                            </Form.Item>

                            <Form.Item {...formItemLayoutSec} label="MapperDao Sec Path">
                                {getFieldDecorator('MapperDaoSecPath', {
                                    initialValue: info.MapperDaoSecPath,
                                    rules: [{ required: true, whitespace: true }],
                                })(
                                    <Input placeholder="Please input your MapperDao Sec Path" />
                                )}
                            </Form.Item>

                            <Form.Item {...formItemLayoutSec} label="Controller Sec Path">
                                {getFieldDecorator('ControllerSecPath', {
                                    initialValue: info.ControllerSecPath,
                                    rules: [{ required: true, whitespace: true }],
                                })(
                                    <Input placeholder="Please input your Controller Sec Path" />
                                )}
                            </Form.Item>

                            <Form.Item {...formItemLayoutSec} label="ServiceImpl Sec Path">
                                {getFieldDecorator('ServiceImplSecPath', {
                                    initialValue: info.ServiceImplSecPath,
                                    rules: [{ required: true, whitespace: true }],
                                })(
                                    <Input placeholder="Please input your ServiceImpl Sec Path" />
                                )}
                            </Form.Item>

                            <Form.Item {...formItemLayoutSec} label="MapperXml Sec Path">
                                {getFieldDecorator('MapperXmlSecPath', {
                                    initialValue: info.MapperXmlSecPath,
                                    rules: [{ required: true, whitespace: true }],
                                })(
                                    <Input placeholder="Please input your MapperXml Sec Path" />
                                )}
                            </Form.Item>

                            <Form.Item {...formItemLayoutSec} label="MapperParamXml Sec Path">
                                {getFieldDecorator('MapperParamXmlSecPath', {
                                    initialValue: info.MapperParamXmlSecPath,
                                    rules: [{ required: true, whitespace: true }],
                                })(
                                    <Input placeholder="Please input your MapperParamXml Sec Path" />
                                )}
                            </Form.Item>

                        </Col>

                        <Col push={16} span={12} style={{position: "absolute", marginTop: "0%"}}>

                            <Form.Item {...formItemLayoutSec} label="retainColumnName">
                                {getFieldDecorator('retainColumnName', {
                                    initialValue: info.retainColumnName,
                                    rules: [{ required: false }],
                                })(
                                    <Input />
                                )}
                            </Form.Item>

                            <Form.Item {...formItemLayoutSec} label="mtName">
                                {getFieldDecorator('mtName', {
                                    initialValue: info.mtName,
                                    rules: [{ required: false, whitespace: true }],
                                })(
                                    <Input placeholder="Please input your mtName" />
                                )}
                            </Form.Item>

                            <Form.Item {...formItemLayoutSec} label="mtEntitySecPath">
                                {getFieldDecorator('mtEntitySecPath', {
                                    initialValue: info.mtEntitySecPath,
                                    rules: [{ required: false, whitespace: true }],
                                })(
                                    <Input placeholder="Please input your mtEntitySecPath" />
                                )}
                            </Form.Item>

                            <Form.Item {...formItemLayoutSec} label="mtMapperDaoSecPath">
                                {getFieldDecorator('mtMapperDaoSecPath', {
                                    initialValue: info.mtMapperDaoSecPath,
                                    rules: [{ required: false, whitespace: true }],
                                })(
                                    <Input placeholder="Please input your mtMapperDao Sec Path" />
                                )}
                            </Form.Item>

                            <Form.Item {...formItemLayoutSec} label="mtMapperXmlSecPath">
                                {getFieldDecorator('mtMapperXmlSecPath', {
                                    initialValue: info.mtMapperXmlSecPath,
                                    rules: [{ required: false, whitespace: true }],
                                })(
                                    <Input placeholder="Please input your mtMapperXmlSecPath" />
                                )}
                            </Form.Item>

                            <Form.Item {...formItemLayoutSec} label="mtMapperParamXmlSecPath">
                                {getFieldDecorator('mtMapperParamXmlSecPath', {
                                    initialValue: info.mtMapperParamXmlSecPath,
                                    rules: [{ required: false, whitespace: true }],
                                })(
                                    <Input placeholder="Please input your mtMapperParamXmlSecPath" />
                                )}
                            </Form.Item>

                            <Form.Item {...formItemLayoutSec} label="mtServiceImplSecPath">
                                {getFieldDecorator('mtServiceImplSecPath', {
                                    initialValue: info.mtServiceImplSecPath,
                                    rules: [{ required: false, whitespace: true }],
                                })(
                                    <Input placeholder="Please input your mtServiceImplSecPath" />
                                )}
                            </Form.Item>

                            <Form.Item {...formItemLayoutSec} label="mtFromColumn">
                                {getFieldDecorator('mtFromColumn', {
                                    initialValue: info.mtFromColumn,
                                    rules: [{ required: false, whitespace: true }],
                                })(
                                    <Input placeholder="Please input your mtFromColumn" />
                                )}
                            </Form.Item>

                            <Form.Item {...formItemLayoutSec} label="mtToColumn">
                                {getFieldDecorator('mtToColumn', {
                                    initialValue: info.mtToColumn,
                                    rules: [{ required: false, whitespace: true }],
                                })(
                                    <Input placeholder="Please input your mtToColumn" />
                                )}
                            </Form.Item>

                            <Form.Item {...formItemLayoutSec} label="rtName">
                                {getFieldDecorator('rtName', {
                                    initialValue: info.rtName,
                                    rules: [{ required: false, whitespace: true }],
                                })(
                                    <Input placeholder="Please input your rtName" />
                                )}
                            </Form.Item>

                            <Form.Item {...formItemLayoutSec} label="rtEntitySecPath">
                                {getFieldDecorator('rtEntitySecPath', {
                                    initialValue: info.rtEntitySecPath,
                                    rules: [{ required: false, whitespace: true }],
                                })(
                                    <Input placeholder="Please input your rtEntitySecPath" />
                                )}
                            </Form.Item>

                            <Form.Item {...formItemLayoutSec} label="rtMapperDaoSecPath">
                                {getFieldDecorator('rtMapperDaoSecPath', {
                                    initialValue: info.rtMapperDaoSecPath,
                                    rules: [{ required: false, whitespace: true }],
                                })(
                                    <Input placeholder="Please input your MapperDaoSecPath" />
                                )}
                            </Form.Item>

                            <Form.Item {...formItemLayoutSec} label="rtMapperXmlSecPath">
                                {getFieldDecorator('rtMapperXmlSecPath', {
                                    initialValue: info.rtMapperXmlSecPath,
                                    rules: [{ required: false, whitespace: true }],
                                })(
                                    <Input placeholder="Please input your rtMapperXmlSecPath" />
                                )}
                            </Form.Item>

                            <Form.Item {...formItemLayoutSec} label="rtMapperParamXmlSecPath">
                                {getFieldDecorator('rtMapperParamXmlSecPath', {
                                    initialValue: info.rtMapperParamXmlSecPath,
                                    rules: [{ required: false, whitespace: true }],
                                })(
                                    <Input placeholder="Please input your rtMapperParamXmlSecPath" />
                                )}
                            </Form.Item>

                            <Form.Item {...formItemLayoutSec} label="rtServiceImplSecPath">
                                {getFieldDecorator('rtServiceImplSecPath', {
                                    initialValue: info.rtServiceImplSecPath,
                                    rules: [{ required: false, whitespace: true }],
                                })(
                                    <Input placeholder="Please input your rtServiceImplSecPath" />
                                )}
                            </Form.Item>

                        </Col>

                    </Row>

                </Form>

            </div>
        )
    }

}

const mapStateToProps = state => ({info: state.codeFormChangeInfo && state.codeFormChangeInfo.formInfo ? state.codeFormChangeInfo.formInfo : {}})

const form = Form.create({
    name: 'CodeFormInfo',
    onValuesChange(_, values) {
        // console.log("formValueChange==>" + values);
    },
    mapPropsToFields(props) {
        let info = props.info, returnInfo = {}

        for(let [key, value] of Object.entries(info))
            returnInfo[key] = Form.createFormField({value: value,})

        return returnInfo;
    },
})(CodeFormInfo);

export default connect(mapStateToProps)(form)
