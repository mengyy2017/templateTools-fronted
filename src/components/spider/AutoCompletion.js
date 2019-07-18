import React from "react";
import {AutoComplete, Col, Select, Form} from 'antd';
import {connect} from "react-redux";
import {Row} from "antd";
import {setAutoCompletionSourceAction} from "actions/spider/autoCompletionAction"

function onSelect(value) {
    console.log('onSelect', value);
}

class AutoCompletion extends React.Component {

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

        return (
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
                                <Select placeholder="Please select a search type" size="large">
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
                    <AutoComplete dataSource={AutoCompletionSource} size="large"
                       style={{ width: 400 }} onSelect={onSelect}
                       onSearch={this.handleSearch} placeholder="input here"/>
                </Col>

            </Row>

        );
    }
}

const mapStateToProps = state => ({AutoCompletionSource: state.autoCompletion ? state.autoCompletion.AutoCompletionSource : []})

const AutoCompletionForm = Form.create({ name: 'AutoCompletion' })(AutoCompletion);

export default connect(mapStateToProps)(AutoCompletionForm)