import {Form, Button, Input, Col} from "antd";
import React from "react";
import connect from "react-redux/es/connect/connect";
import {updateOrSaveAction} from "actions/menu/menuAction";

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
                            rules: [{ required: false, message: 'Please input id!', whitespace: true }],
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

const form = Form.create({
    name: "MenuForm",
    mapPropsToFields(props) {
        let {menuUniq = {}} = props
        return {
            id: Form.createFormField({value: menuUniq.id}),
            url: Form.createFormField({value: menuUniq.url}),
            permission: Form.createFormField({value: menuUniq.permission})
        }
    }
})(MenuForm);

export default connect(mapStateToProps)(form)