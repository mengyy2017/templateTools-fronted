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
                xs: { span: 4 },
                sm: { span: 4 },
            },
            wrapperCol: {
                xs: { span: 3 },
                sm: { span: 3 },
            },
        };

        const formItemLayoutSecond = {
            labelCol: {
                xs: { span: 7 },
                sm: { span: 7 },
            },
            wrapperCol: {
                xs: { span: 8 },
                sm: { span: 8 },
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

                    <Row style={{marginBottom: 600}}>
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
                                {getFieldDecorator('sysDatabaseSchema', {
                                    initialValue: info.sysDatabaseSchema,
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
                                {getFieldDecorator('businessDatabaseSchema', {
                                    initialValue: info.businessDatabaseSchema,
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

                            <Form.Item {...formItemLayout} label="xmlWithSchema">
                                {getFieldDecorator('xmlWithSchema', {
                                    initialValue: info.xmlWithSchema,
                                    rules: [{ required: false }],
                                })(
                                    <Input />
                                )}
                            </Form.Item>

                            <Form.Item {...formItemLayout} label="DatabaseInfo Mapper Second Path">
                                {getFieldDecorator('DatabaseInfoMapperSecondPath', {
                                    initialValue: info.DatabaseInfoMapperSecondPath,
                                    rules: [{ required: false, whitespace: true }],
                                })(
                                    <Input />
                                )}
                            </Form.Item>

                        </Col>







                        <Col push={8} span={12} style={{position: "absolute", marginTop: "0%"}}>

                            <Form.Item {...formItemLayoutSecond} label="default query table">
                                {getFieldDecorator('defaultQueryTable', {
                                    initialValue: "",
                                    rules: [{ required: false, whitespace: true }],
                                })(
                                    <Input />
                                )}
                            </Form.Item>

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

                        <Col push={16} span={12} style={{position: "absolute", marginTop: "0%"}}>
                            <Form.Item {...formItemLayoutSecond} label="joinType">
                                {getFieldDecorator('joinType', {
                                    initialValue: info.joinType,
                                    rules: [{ required: false }],
                                })(
                                    <Input placeholder="Please input your joinType" />
                                )}
                            </Form.Item>

                            <Form.Item {...formItemLayoutSecond} label="middleTableName">
                                {getFieldDecorator('middleTableName', {
                                    initialValue: info.middleTableName,
                                    rules: [{ required: false, whitespace: true }],
                                })(
                                    <Input placeholder="Please input your middleTableName" />
                                )}
                            </Form.Item>

                            <Form.Item {...formItemLayoutSecond} label="rTableName">
                                {getFieldDecorator('resourceTableName', {
                                    initialValue: info.resourceTableName,
                                    rules: [{ required: false, whitespace: true }],
                                })(
                                    <Input placeholder="Please input your resourceTableName" />
                                )}
                            </Form.Item>

                            <Form.Item {...formItemLayoutSecond} label="rTableEntitySecondPath">
                                {getFieldDecorator('resourceTableEntitySecondPath', {
                                    initialValue: info.resourceTableEntitySecondPath,
                                    rules: [{ required: false, whitespace: true }],
                                })(
                                    <Input placeholder="Please input your resourceTableEntitySecondPath" />
                                )}
                            </Form.Item>

                            <Form.Item {...formItemLayoutSecond} label="rTable MapperDao Second Path">
                                {getFieldDecorator('resourceTableMapperDaoSecondPath', {
                                    initialValue: info.resourceTableMapperDaoSecondPath,
                                    rules: [{ required: false, whitespace: true }],
                                })(
                                    <Input placeholder="Please input your resourceTable MapperDao Second Path" />
                                )}
                            </Form.Item>
                        </Col>

                    </Row>

                </Form>

            </div>
        )
    }

}

const mapStateToProps = state => ({info: state.codeFormChangeInfo && state.codeFormChangeInfo.formInfo ? state.codeFormChangeInfo.formInfo : {}})

const form = Form.create({
    name: 'CodeFormInfo',
    onValuesChange(_, values) {
        // console.log("formValueChange==>" + values);
    },
    mapPropsToFields(props) {
        let info = props.info, returnInfo = {}

        for(let [key, value] of Object.entries(info))
            returnInfo[key] = Form.createFormField({value: value,})

        return returnInfo;
    },
})(CodeFormInfo);

export default connect(mapStateToProps)(form)
