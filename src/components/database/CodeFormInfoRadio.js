import React  from 'react';
import {Radio, Row, Col} from 'antd';
import {connect} from "react-redux";
import {codeFormRadioChangeAction} from 'actions/database/codeFormRadioAction'

// let BASE_ENTITY_SECOND_PATH = "BaseEntitySecondPath", PAGE_INFO_ENTITY_SECOND_PATH = "PageInfoEntitySecondPath", I_SERVICE_SECOND_PATH = "IServiceSecondPath"
//     , COMMON_CONTROLLER_SECOND_PATH = "CommonControllerSecondPath", ENTITY_SECOND_PATH = "EntitySecondPath", MAPPER_DAO_SECOND_PATH = "MapperDaoSecondPath"
//     , CONTROLLER_SECOND_PATH = "ControllerSecondPath", SERVICE_IMPL_SECOND_PATH = "ServiceImplSecondPath"
//     , MAPPER_XML_FIRST_PATH = "MapperXmlFirstPath", MAPPER_PARAM_XML_FIRST_PATH = "MapperParamXmlFirstPath"
//
// let PDM_STAR_CODE_PATH = {"BaseEntitySecondPath": CODE_PATH.BaseEntitySecondPath, "PageInfoEntitySecondPath": "entity", "IServiceSecondPath": "", "CommonControllerSecondPath": "common"
//     , "EntitySecondPath": "entity", "MapperDaoSecondPath": "mapper", "ControllerSecondPath": "deviateDoc", "ServiceImplSecondPath": "deviateDoc/service"
//     , "MapperXmlFirstPath": "mapper", "MapperParamXmlFirstPath": "mapper/param"}
//
// let PPM_STAR_USER_CODE_PATH = {BASE_ENTITY_SECOND_PATH: BaseEntitySecondPath, PAGE_INFO_ENTITY_SECOND_PATH: "entity", I_SERVICE_SECOND_PATH: ""
//     , COMMON_CONTROLLER_SECOND_PATH: "common", "EntitySecondPath": "entity", "MapperDaoSecondPath": "mapper", "ControllerSecondPath": "deviateDoc", "ServiceImplSecondPath": "deviateDoc/service"
//     , "MapperXmlFirstPath": "mapper", "MapperParamXmlFirstPath": "mapper/param"}
//
// console.log("PPM_STAR_USER_CODE_PATH.CommonControllerSecondPath==>" + PPM_STAR_USER_CODE_PATH.CommonControllerSecondPath +  "\n123==>" + JSON.stringify(PPM_STAR_USER_CODE_PATH))


class CodeFormInfoRadio extends React.Component{

    // componentWillMount(){
    //     this.props.dispatch(getTablesAction())
    // }

    onChange = e => {
        console.log('radio checked', e.target.value);
        this.props.dispatch(codeFormRadioChangeAction(e.target.value))
    };

    render = () => {
        //ppm_standalone PPM_STAR_USER 这个工程需要把Mapper的@Component注解改成@Mapper注解
        let BaseEntitySecondPath = "base", PageInfoEntitySecondPath = BaseEntitySecondPath, IServiceSecondPath = "service", CommonControllerSecondPath = "web/common"
            , EntitySecondPath = "user", MapperDaoSecondPath = "dm/user", ControllerSecondPath = "web/user", ServiceImplSecondPath = "service/user/impl"
            , MapperXmlFirstPath = MapperDaoSecondPath + "/mapper", MapperParamXmlFirstPath = MapperXmlFirstPath + "/param";






        let CODE_PATH = {BaseEntitySecondPath, PageInfoEntitySecondPath, IServiceSecondPath, CommonControllerSecondPath, EntitySecondPath
            , MapperDaoSecondPath, ControllerSecondPath, ServiceImplSecondPath, MapperXmlFirstPath, MapperParamXmlFirstPath}

        let LOCALHOST = Object.assign ({"databaseAddress": "127.0.0.1", "databaseType": "mysql", "databasePort": "3306", "databaseSchema": "information_schema"
            , "databaseUsername": "root", "databasePassword": "123456", "tableSchema": "operation_monitor", "codePackage": "com.guowang"}, CODE_PATH)

        let PDM_STAR = Object.assign ({"databaseAddress": "192.168.3.75", "databaseType": "dm", "databasePort": "5236", "databaseSchema": "SYS"
            , "databaseUsername": "PDM", "databasePassword": "plm123456", "tableSchema": "PDM_STAR", "codePackage": "cn.jwis.xingwang"}, CODE_PATH)

        let PPM_STAR_USER = Object.assign ({"databaseAddress": "192.168.3.75", "databaseType": "dm", "databasePort": "5236", "databaseSchema": "SYS"
            , "databaseUsername": "PDM", "databasePassword": "plm123456", "tableSchema": "PPM_STAR", "codePackage": "cn.jwis.product.ppm.customer"}, CODE_PATH)

        let DEFAULT_VAL = PPM_STAR_USER;

        this.props.dispatch(codeFormRadioChangeAction(DEFAULT_VAL))

        return (
            <Row type="flex" justify="start" style={{marginTop: 5, marginBottom: 15}}>
                <Col offset={6}>
                    <Radio.Group onChange={this.onChange} defaultValue={DEFAULT_VAL}>
                        <Radio value={LOCALHOST}>LOCALHOST</Radio>
                        <Radio value={PDM_STAR}>PDM_STAR</Radio>
                        <Radio value={PPM_STAR_USER}>PPM_STAR_USER</Radio>
                        <Radio value={4}>D</Radio>
                    </Radio.Group>
                </Col>

            </Row>

        )
    }
}

const mapStateToProps = state => {
    return {}
}

export default connect(mapStateToProps)(CodeFormInfoRadio)

