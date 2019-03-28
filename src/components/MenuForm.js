import {Form, Button, Input, Col, Tag} from "antd";
import React from "react";
import connect from "react-redux/es/connect/connect";
import {updateOrSaveAction} from "actions/menuAction";

class MenuForm extends React.Component {

    updateOrSave = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                this.props.dispatch(updateOrSaveAction(values))
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
        }

        let {menuUniq = {}} = this.props

        return (
                <Col span={12}>

                    <Form onSubmit={this.updateOrSave}>

                        <Form.Item
                            {...formItemLayout}
                            label="id"
                            placeholder="Please input id"
                            style={{display: 'none'}}
                        >
                            {getFieldDecorator('id', {
                                initialValue: menuUniq.id,
                                rules: [{ required: true, message: 'Please input id!', whitespace: true }],
                            })(
                                <Input />
                            )}
                        </Form.Item>

                        <Form.Item
                            {...formItemLayout}
                            label="url"
                            placeholder="Please input url"
                        >
                            {getFieldDecorator('url', {
                                initialValue: menuUniq.url,
                                rules: [{ required: true, message: 'Please input url!', whitespace: true }],
                            })(
                                <Input />
                            )}
                        </Form.Item>

                        <Form.Item
                            {...formItemLayout}
                            label="permission"
                        >
                            {getFieldDecorator('permission', {
                                initialValue: menuUniq.permission,
                                rules: [
                                    { required: true, message: 'Please input permission!' },
                                ],
                            })(
                                <Input />
                            )}
                        </Form.Item>

                        <Form.Item {...tailFormItemLayout}>
                            <Button type="primary" htmlType="submit">save</Button>
                        </Form.Item>
                    </Form>
                </Col>
        )
    }
}

const mapStateToProps = state => ({menuUniq: state.menu ? state.menu.menuUniq : []})

const form = Form.create({ name: 'MenuForm' })(MenuForm);

export default connect(mapStateToProps)(form)







