import React from "react";
import {AutoComplete, Col, Select, Form, Input, Button} from 'antd';
import {connect} from "react-redux";
import {Row} from "antd";
import {exePyAction, setAutoCompletionSourceAction} from "actions/spider/autoCompletionAction"
import {connect as rabbitConnect} from "amqplib/callback_api"

function onSelect(value) {
    alert('onSelect', value);
}

rabbitConnect('amqp://localhost', function(error0, connection) {
    if (error0) {
        throw error0;
    }
    connection.createChannel(function(error1, channel) {
        if (error1) {
            throw error1;
        }
        var exchange = 'logs';

        channel.assertExchange(exchange, 'fanout', {
            durable: false
        });

        channel.assertQueue('', {
            exclusive: true
        }, function(error2, q) {
            if (error2) {
                throw error2;
            }
            console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", q.queue);
            channel.bindQueue(q.queue, exchange, '');

            channel.consume(q.queue, function(msg) {
                if(msg.content) {
                    console.log(" [x] %s", msg.content.toString());
                }
            }, {
                noAck: true
            });
        });
    });
});

class AutoCompletion extends React.Component {

    search = () => {
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                // this.props.dispatch(setAutoCompletionSourceAction('indexName=wb&fieldName='+ values.fieldName +'&phrase=' + phrase))
                this.props.dispatch(exePyAction('searchUser='+ values.searchUser))

            }
        });
    }

    handleSearch = phrase => {
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                this.props.dispatch(setAutoCompletionSourceAction('indexName=wb&fieldName='+ values.fieldName +'&phrase=' + phrase))
            }
        });
    };

    render = () => {

        const { AutoCompletionSource } = this.props;

        const { getFieldDecorator } = this.props.form;

        const { TextArea } = Input;

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 6 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };

        const formItemLayout0 = {
            labelCol: {
                xs: { span: 8 },
                sm: { span: 10 },
            },
            wrapperCol: {
                xs: { span: 8 },
                sm: { span: 14 },
            },
        };

        return (

            <div>
                <Row>

                    <Col span={8} offset={1}>
                        <Form onSubmit={this.search} layout="inline" >
                            <Form.Item
                                {...formItemLayout0}
                                label="search user"
                                placeholder="Please input user"
                            >
                                {getFieldDecorator('searchUser', {
                                    initialValue: "思想聚焦",
                                    rules: [{ required: true, message: 'Please input user!', whitespace: true }],
                                })(
                                    <Input size={"large"} />
                                )}
                            </Form.Item>
                            <Form.Item
                                {...formItemLayout0}
                            >
                                <Button type="primary" htmlType="submit">search</Button>
                            </Form.Item>
                        </Form>
                    </Col>

                    <Col span={14}>
                        <TextArea rows={13} />
                    </Col>

                </Row>

                <Row style={{marginTop: "60px"}}></Row>

                <Row>
                    <Col span={8} offset={1}>
                        <Form>
                            <Form.Item
                                {...formItemLayout}
                                label="search type"
                            >
                                {getFieldDecorator('fieldName', {
                                    initialValue: "school",
                                    rules: [
                                        { required: true, message: 'Please select your search type!' },
                                    ],
                                })(
                                    <Select placeholder="Please select a search type" size={"large"}>
                                        <Select.Option value="uName">姓名</Select.Option>
                                        <Select.Option value="school">学校</Select.Option>
                                        <Select.Option value="wbContent">微博内容</Select.Option>
                                        <Select.Option value="summarize">简介</Select.Option>
                                        <Select.Option value="address">所在地</Select.Option>
                                        <Select.Option value="verify">认证</Select.Option>
                                        <Select.Option value="tag">标签</Select.Option>
                                        <Select.Option value="professional">职业</Select.Option>
                                        <Select.Option value="commentText">评论</Select.Option>
                                        <Select.Option value="commentUName">评论人</Select.Option>
                                    </Select>
                                )}
                            </Form.Item>

                        </Form>
                    </Col>
                    <Col span={8}>
                        <AutoComplete dataSource={AutoCompletionSource} size={"large"}
                                      style={{ width: 400 }} onSelect={onSelect}
                                      onSearch={this.handleSearch} placeholder="input here"/>
                    </Col>

                </Row>
            </div>



        );
    }
}

const mapStateToProps = state => ({AutoCompletionSource: state.autoCompletion ? state.autoCompletion.AutoCompletionSource : []})

const AutoCompletionForm = Form.create({ name: 'AutoCompletion' })(AutoCompletion);

export default connect(mapStateToProps)(AutoCompletionForm)