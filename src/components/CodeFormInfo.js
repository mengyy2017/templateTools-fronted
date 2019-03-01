import React from "react";
import connect from "react-redux/es/connect/connect";
import {Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete,} from 'antd';
import {setCodeInfoAction} from "actions/codeFormAction";

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
                xs: { span: 24 },
                sm: { span: 6 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 12 },
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
                    offset: 12,
                },
            },
        };

        return (
            <div>

                <Form onSubmit={this.next}>

                    <Form.Item
                        {...formItemLayout}
                        label="database address"
                        placeholder="Please input your database address"
                    >
                        {getFieldDecorator('databaseAdress', {
                            initialValue: "127.0.0.1",
                            rules: [{ required: true, message: 'Please input your database schema!', whitespace: true }],
                        })(
                            <Input />
                        )}
                    </Form.Item>

                    <Form.Item
                        {...formItemLayout}
                        label="database type"
                    >
                        {getFieldDecorator('databaseType', {
                            initialValue: "mysql",
                            rules: [
                                { required: true, message: 'Please select your database type!' },
                            ],
                        })(
                            <Select placeholder="Please select a database type">
                                <Select.Option value="mysql">mysql</Select.Option>
                                <Select.Option value="oracle">oracle</Select.Option>
                            </Select>
                        )}
                    </Form.Item>

                    <Form.Item
                        {...formItemLayout}
                        label="database port"
                    >
                        {getFieldDecorator('databasePort', {
                            initialValue: "3306",
                            rules: [{ required: true, message: 'Please input your database port!', whitespace: true }],
                        })(
                            <Input  placeholder="Please input your database port" />
                        )}
                    </Form.Item>

                    <Form.Item
                        {...formItemLayout}
                        label="database schema"
                        placeholder="Please input your database schema"
                    >
                        {getFieldDecorator('databaseSchema', {
                            initialValue: "wxj",
                            rules: [{ required: true, message: 'Please input your database schema!', whitespace: true }],
                        })(
                            <Input />
                        )}
                    </Form.Item>

                    <Form.Item
                        {...formItemLayout}
                        label="database username"
                    >
                        {getFieldDecorator('databaseUsername', {
                            initialValue: "root",
                            rules: [{ required: true, message: 'Please input your database username!', whitespace: true }],
                        })(
                            <Input placeholder="Please input your database username"/>
                        )}
                    </Form.Item>

                    <Form.Item
                        {...formItemLayout}
                        label="database password"
                    >
                        {getFieldDecorator('databasePassword', {
                            initialValue: "1",
                            rules: [{ required: true, message: 'Please input your database password!', whitespace: true }],
                        })(
                            <Input placeholder="Please input your database password" />
                        )}
                    </Form.Item>

                    <Form.Item
                        {...formItemLayout}
                        label="code package"
                    >
                        {getFieldDecorator('codePackage', {
                            initialValue: "com.yishi",
                            rules: [{ required: true, message: 'Please input your code package!', whitespace: true }],
                        })(
                            <Input />
                        )}
                    </Form.Item>

                    <Form.Item
                        {...formItemLayout}
                        label="author"
                    >
                        {getFieldDecorator('author', {
                            initialValue: "",
                            rules: [{ required: false, message: 'Please input author!', whitespace: true }],
                        })(
                            <Input />
                        )}
                    </Form.Item>

                    <Form.Item {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit">next</Button>
                    </Form.Item>
                </Form>

            </div>
        )
    }

}

var mapStateToProps = state => ({ })

const form = Form.create({ name: 'CodeFormInfo' })(CodeFormInfo);

export default connect(mapStateToProps)(form)
