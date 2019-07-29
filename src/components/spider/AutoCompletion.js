import React from "react";
import {AutoComplete, Col, Select, Form, Input, Button, message} from 'antd';
import {connect} from "react-redux";
import {Row} from "antd";
import {exeSearchAction, setAutoCompletionSourceAction, recieveContentAction} from "actions/spider/autoCompletionAction"
import Stomp from "stompjs"
import SockJS from "sockjs-client"
import {w3cwebsocket as WebSocket} from "websocket"

function onSelect(value) {
    alert('onSelect', value);
}

class AutoCompletion extends React.Component {

    constructor(props) {
        super(props)
        let that = this
        // if ('WebSocket' in window) {
        //     console.log(1)
            let ws = new WebSocket('ws://localhost:15674/ws')
        // } else {
        //     console.log(2)
        //     let ws = new SockJS('http://localhost:15674/stomp');
        // }

        let client = Stomp.over(ws)
        client.heartbeat.outgoing = 0
        client.heartbeat.incoming = 0

        let onConnect = info => {
            client.subscribe("/exchange/FanoutExchange1", msg => {
                if(msg.body)
                    msg.body == "搜索完毕" ? message.success("搜索完毕") : that.props.dispatch(recieveContentAction(msg.body))
                msg.ack()
            }, {ack: "client"})
        }

        let on_error =  () => console.log('error')

        client.connect('root', '1', onConnect, on_error, '/')
        console.log(">>>连接上http://localhost:15674")
    }


    exeSearch = (e) => {
        e.preventDefault()
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                // this.props.dispatch(setAutoCompletionSourceAction('indexName=wb&fieldName='+ values.fieldName +'&phrase=' + phrase))
                this.props.dispatch(exeSearchAction('searchUser='+ values.searchUser))

            }
        });
    }

    inputSearch = phrase => {
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                this.props.dispatch(setAutoCompletionSourceAction('indexName=wb&fieldName='+ values.fieldName +'&phrase=' + phrase))
            }
        });
    };

    contentChange = (textArea) => {

        this.refs.textArea ? this.refs.textArea.textAreaRef.scrollTop = this.refs.textArea.textAreaRef.scrollHeight : undefined

        // let that = this
        // setTimeout(function () {
        //     that.refs.textArea ? that.refs.textArea.textAreaRef.scrollTop = that.refs.textArea.textAreaRef.scrollHeight : undefined
        // }, 3000)

    }

    render = () => {

        const { AutoCompletionSource, recieveContent } = this.props;

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
                        <Form onSubmit={this.exeSearch} layout="inline" >
                            <Form.Item
                                {...formItemLayout0}
                                label="微博用户"
                                placeholder="Please input user"
                            >
                                {getFieldDecorator('searchUser', {
                                    initialValue: "",
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
                        <TextArea style={{overflowY: "scroll"}} onChange={this.contentChange(this)}
                            ref="textArea" rows={13} value={recieveContent} />
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
                                      onSearch={this.inputSearch} placeholder="input here"/>
                    </Col>

                </Row>
            </div>

        );
    }
}

const mapStateToProps = state =>
{
    let AutoCompletionSource = state.autoCompletion ? state.autoCompletion.AutoCompletionSource : []
    let recieveContent = state.autoCompletion ? state.autoCompletion.recieveContent : undefined
    return {AutoCompletionSource, recieveContent}
}
    // ({AutoCompletionSource: state.autoCompletion ? state.autoCompletion.AutoCompletionSource : [],
    // recieveContent: state.autoCompletion ? state.autoCompletion.recieveContent : undefined})

const AutoCompletionForm = Form.create({ name: 'AutoCompletion' })(AutoCompletion);

export default connect(mapStateToProps)(AutoCompletionForm)