import React from "react";
import connect from "react-redux/es/connect/connect";
import {Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete,} from 'antd';

class CodeFormInfo extends React.Component{

    next = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                this.props.changeActiveKey("1")
            }
        });
    }

    render = () => {

        const { getFieldDecorator } = this.props.form;
        // const {changeActiveKey} = this.props
        
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
                    offset: 8,
                },
            },
        };

        return (
            <div>

                <Form onSubmit={this.next}>
                    <Form.Item
                        {...formItemLayout}
                        label="database type"
                    >
                        {getFieldDecorator('databaseType', {
                            rules: [
                                { required: false, message: 'Please select your database type!' },
                            ],
                        })(
                            <Select placeholder="Please select a database type">
                                <Select.Option value="china">Mysql</Select.Option>
                                <Select.Option value="usa">Oracle</Select.Option>
                            </Select>
                        )}
                    </Form.Item>

                    <Form.Item
                        {...formItemLayout}
                        label="database schema"
                    >
                        {getFieldDecorator('databaseSchema', {
                            rules: [{ required: false, message: 'Please input your database schema!', whitespace: true }],
                        })(
                            <Input />
                        )}
                    </Form.Item>

                    <Form.Item
                        {...formItemLayout}
                        label="code package"
                    >
                        {getFieldDecorator('codePackage', {
                            rules: [{ required: false, message: 'Please input your code package!', whitespace: true }],
                        })(
                            <Input />
                        )}
                    </Form.Item>

                    <Form.Item
                        {...formItemLayout}
                        label="author"
                    >
                        {getFieldDecorator('author', {
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
