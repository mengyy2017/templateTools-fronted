import React from "react";
import connect from "react-redux/es/connect/connect";
import {Form, Input, Select, Button,} from 'antd';
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

                    <Form.Item{...formItemLayout} label="database address" placeholder="Please input your database address">
                        {getFieldDecorator('databaseAddress', {
                            // initialValue: "127.0.0.1",
                            initialValue: "192.168.3.75",
                            rules: [{ required: true, message: 'Please input your database schema!', whitespace: true }],
                        })(
                            <Input />
                        )}
                    </Form.Item>

                    <Form.Item{...formItemLayout} label="database type">
                        {getFieldDecorator('databaseType', {
                            // initialValue: "mysql",
                            initialValue: "dm",
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
                            // initialValue: "3306",
                            initialValue: "5236",
                            rules: [{ required: true, message: 'Please input your database port!', whitespace: true }],
                        })(
                            <Input  placeholder="Please input your database port" />
                        )}
                    </Form.Item>

                    <Form.Item{...formItemLayout} label="sys database schema" placeholder="Please input your sys database schema">
                        {getFieldDecorator('databaseSchema', {
                            // initialValue: "information_schema",
                            initialValue: "SYS",
                            rules: [{ required: true, message: 'Please input your sys database schema!', whitespace: true }],
                        })(
                            <Input />
                        )}
                    </Form.Item>

                    <Form.Item{...formItemLayout} label="username">
                        {getFieldDecorator('databaseUsername', {
                            // initialValue: "root",
                            initialValue: "PDM",
                            rules: [{ required: true, message: 'Please input your database username!', whitespace: true }],
                        })(
                            <Input placeholder="Please input your database username"/>
                        )}
                    </Form.Item>

                    <Form.Item{...formItemLayout} label="password">
                        {getFieldDecorator('databasePassword', {
                            // initialValue: "123456",
                            initialValue: "plm123456",
                            rules: [{ required: true, message: 'Please input your database password!', whitespace: true }],
                        })(
                            <Input placeholder="Please input your database password" />
                        )}
                    </Form.Item>

                    <Form.Item {...formItemLayout} label="business database schema" placeholder="Please input your business database schema">
                        {getFieldDecorator('tableSchema', {
                            // initialValue: "operation_monitor",
                            // initialValue: "sync_user_org",
                            initialValue: "PDM_STAR",
                            rules: [{ required: true, message: 'Please input your business database schema!', whitespace: true }],
                        })(
                            <Input />
                        )}
                    </Form.Item>

                    <Form.Item {...formItemLayout} label="code package">
                        {getFieldDecorator('codePackage', {
                            // initialValue: "templateToolsCode", // 可以是com.templateTools形式
                            // initialValue: "com.guowang", // 可以是com.templateTools形式
                            initialValue: "cn.jwis.product.ppm.customer", // 可以是com.templateTools形式
                            rules: [{ required: true, message: 'Please input your code package!', whitespace: true }],
                        })(
                            <Input />
                        )}
                    </Form.Item>

                    <Form.Item {...formItemLayout} label="author">
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

const mapStateToProps = state => ({ })

const form = Form.create({ name: 'CodeFormInfo' })(CodeFormInfo);

export default connect(mapStateToProps)(form)
