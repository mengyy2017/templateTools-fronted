import React from "react";
import connect from "react-redux/es/connect/connect";
import {Form, Input, Select, Button, Col, Row} from 'antd';
import {setCodeInfoAction} from "actions/database/codeFormAction";

class CodeFormInfo extends React.Component{

    next = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                this.props.dispatch(setCodeInfoAction(values))
                this.props.changeActiveKey("1")
            }
        });
    }

    render = () => {

        const { getFieldDecorator } = this.props.form;

        const formItemLayout = {
            labelCol: {
                xs: { span: 5 },
                sm: { span: 5 },
            },
            wrapperCol: {
                xs: { span: 5 },
                sm: { span: 5 },
            },
        };

        const formItemLayoutSecond = {
            labelCol: {
                xs: { span: 10 },
                sm: { span: 10 },
            },
            wrapperCol: {
                xs: { span: 10 },
                sm: { span: 10 },
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

                    <Row>
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
                                {getFieldDecorator('databaseSchema', {
                                    initialValue: info.databaseSchema,
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
                                {getFieldDecorator('tableSchema', {
                                    initialValue: info.tableSchema,
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
                        </Col>







                        <Col push={11} span={12} style={{marginTop: "0%", position: "absolute"}}>
                            <Form.Item {...formItemLayoutSecond} label="BaseEntity Second Path">
                                {getFieldDecorator('BaseEntitySecondPath', {
                                    initialValue: info.BaseEntitySecondPath,
                                    rules: [{ required: true, whitespace: true }],
                                })(
                                    <Input placeholder="Please input your BaseEntity Second Path" />
                                )}
                            </Form.Item>

                            <Form.Item {...formItemLayoutSecond} label="PageInfoEntity Second Path">
                                {getFieldDecorator('PageInfoEntitySecondPath', {
                                    initialValue: info.PageInfoEntitySecondPath,
                                    rules: [{ required: true, whitespace: true }],
                                })(
                                    <Input placeholder="Please input your PageInfoEntity Second Path" />
                                )}
                            </Form.Item>

                            <Form.Item {...formItemLayoutSecond} label="IService Second Path">
                                {getFieldDecorator('IServiceSecondPath', {
                                    initialValue: info.IServiceSecondPath,
                                    rules: [{ required: true, whitespace: true }],
                                })(
                                    <Input placeholder="Please input your IService Second Path" />
                                )}
                            </Form.Item>

                            <Form.Item {...formItemLayoutSecond} label="CommonController Second Path">
                                {getFieldDecorator('CommonControllerSecondPath', {
                                    initialValue: info.CommonControllerSecondPath,
                                    rules: [{ required: true, whitespace: true }],
                                })(
                                    <Input placeholder="Please input your CommonController Second Path" />
                                )}
                            </Form.Item>

                            <Form.Item {...formItemLayoutSecond} label="Entity Second Path">
                                {getFieldDecorator('EntitySecondPath', {
                                    initialValue: info.EntitySecondPath,
                                    rules: [{ required: true, whitespace: true }],
                                })(
                                    <Input placeholder="Please input your Entity Second Path" />
                                )}
                            </Form.Item>

                            <Form.Item {...formItemLayoutSecond} label="MapperDao Second Path">
                                {getFieldDecorator('MapperDaoSecondPath', {
                                    initialValue: info.MapperDaoSecondPath,
                                    rules: [{ required: true, whitespace: true }],
                                })(
                                    <Input placeholder="Please input your MapperDao Second Path" />
                                )}
                            </Form.Item>

                            <Form.Item {...formItemLayoutSecond} label="Controller Second Path">
                                {getFieldDecorator('ControllerSecondPath', {
                                    initialValue: info.ControllerSecondPath,
                                    rules: [{ required: true, whitespace: true }],
                                })(
                                    <Input placeholder="Please input your Controller Second Path" />
                                )}
                            </Form.Item>

                            <Form.Item {...formItemLayoutSecond} label="ServiceImpl Second Path">
                                {getFieldDecorator('ServiceImplSecondPath', {
                                    initialValue: info.ServiceImplSecondPath,
                                    rules: [{ required: true, whitespace: true }],
                                })(
                                    <Input placeholder="Please input your ServiceImpl Second Path" />
                                )}
                            </Form.Item>

                            <Form.Item {...formItemLayoutSecond} label="MapperXml First Path">
                                {getFieldDecorator('MapperXmlFirstPath', {
                                    initialValue: info.MapperXmlFirstPath,
                                    rules: [{ required: true, whitespace: true }],
                                })(
                                    <Input placeholder="Please input your MapperXml First Path" />
                                )}
                            </Form.Item>

                            <Form.Item {...formItemLayoutSecond} label="MapperParamXml First Path">
                                {getFieldDecorator('MapperParamXmlFirstPath', {
                                    initialValue: info.MapperParamXmlFirstPath,
                                    rules: [{ required: true, whitespace: true }],
                                })(
                                    <Input placeholder="Please input your MapperParamXml First Path" />
                                )}
                            </Form.Item>
                        </Col>
                    </Row>

                </Form>

            </div>
        )
    }

}

const mapStateToProps = state => ({info: state.codeFormChangeInfo && state.codeFormChangeInfo.formInfo ? state.codeFormChangeInfo.formInfo : {} })

const form = Form.create({ name: 'CodeFormInfo' })(CodeFormInfo);

export default connect(mapStateToProps)(form)
