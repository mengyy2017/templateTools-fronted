import React from "react";
import connect from "react-redux/es/connect/connect";
import {Form, Input, Button, Col} from 'antd';
import {loginAction} from "actions/account/loginFormAction";
import {Redirect} from "react-router";

class LoginFormInfo extends React.Component{

    login = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                this.props.dispatch(loginAction(values))
            }
        });
    }

    concurrencyRedirect = () => {
        // return (<Redirect to="/asyncListener" />); Redirect组件直接写在这里不生效 需要写在render里面
        this.setState({asyncListenerUrl: "/asyncListener"})
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

        // const {redirectUrl} = this.props
        // if (redirectUrl)
        //     return (<Redirect to={redirectUrl} />);

        if (this.state && this.state.asyncListenerUrl)
            return (<Redirect to={{pathname: this.state.asyncListenerUrl, state:{"exchangeName": "asyncListenExchange"}}} />);

        return (
            <div>

                <Form onSubmit={this.login}>

                    <Form.Item
                        {...formItemLayout}
                        label="username"
                        placeholder="Please input username"
                    >
                        {getFieldDecorator('username', {
                            initialValue: "admin",
                            rules: [{ required: true, message: 'Please input username!', whitespace: true }],
                        })(
                            <Input />
                        )}
                    </Form.Item>

                    <Form.Item
                        {...formItemLayout}
                        label="password"
                    >
                        {getFieldDecorator('password', {
                            initialValue: "123456",
                            rules: [
                                { required: true, message: 'Please input password!' },
                            ],
                        })(
                            <Input />
                        )}
                    </Form.Item>

                    <Form.Item {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit">login</Button>
                    </Form.Item>
                </Form>

                <Col offset={11}>
                    <Button type="primary" onClick={this.concurrencyRedirect}>High Concurrent Test</Button>
                </Col>

            </div>
        )
    }

}

const mapStateToProps = state => ({})

const form = Form.create({ name: 'LoginFormInfo' })(LoginFormInfo);

export default connect(mapStateToProps)(form)
