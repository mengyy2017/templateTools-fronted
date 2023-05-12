import React  from 'react';
import {Radio, Row, Col} from 'antd';
import {connect} from "react-redux";
import {codeFormRadioChangeAction} from 'actions/database/codeFormRadioAction'

class CodeFormInfoRadio extends React.Component{

    componentWillMount(){
        this.props.dispatch(codeFormRadioChangeAction(this.DEFAULT_VAL))
    }

    onChange = e => {
        // console.log('radio checked', e.target.value);
        this.props.dispatch(codeFormRadioChangeAction(e.target.value))
    }

    LOCALHOST = () => {
        return {"databaseAddress": "127.0.0.1", "databaseType": "mysql", "databasePort": "3306", "sysDatabaseSchema": "information_schema", "databaseUsername": "root"
            , "databasePassword": "123456", "businessDatabaseSchema": "operation_monitor", "codePackage": "com.guowang", "xmlWithSchema": 1, "DatabaseInfoMapperSecondPath": "database/mapper"}
    }

    PDM_STAR = () => {
        return {"databaseAddress": "192.168.3.75", "databaseType": "dm", "databasePort": "5236", "sysDatabaseSchema": "SYS", "databaseUsername": "PDM"
            , "databasePassword": "plm123456", "businessDatabaseSchema": "PDM_STAR", "codePackage": "cn.jwis.xingwang", "xmlWithSchema": 1, "DatabaseInfoMapperSecondPath": "database/mapper"}
    }

    PPM_STAR = () => {
        return {"databaseAddress": "192.168.3.75", "databaseType": "dm", "databasePort": "5236", "sysDatabaseSchema": "SYS", "databaseUsername": "PDM"
            , "databasePassword": "plm123456", "businessDatabaseSchema": "PPM_STAR", "codePackage": "cn.jwis.product.ppm.customer", "xmlWithSchema": 1, "DatabaseInfoMapperSecondPath": "database/mapper"}
    }

    // joinType
    // 0是 NONE_JOIN 没有join
    // 1是 ONE_TO_ONE_FROM 即主表是FROM 对副表是一对一关系
    // 2是 ONE_TO_ONE_TO 即主表是TO 对副表是一对一关系
    // 3是 ONE_TO_MANY_FROM 即主表是FROM 对副表是一对多关系 3好理解 可能主表是FROM假如是公司 而副表TO假如是是部门 就是一个公司对应多个部门 不过理解成主表FROM是SYSTEMROLE
    // 副表TO是USER也没啥问题 就是一个角色包含多个用户 进一步理解成于多对多也可以 但是JAVA实体是不能表示多对一或者多对多关系的 所以这里的进一步理解是不能实现的 按前面的理解就可以了
    // 4是 ONE_TO_MANY_TO 即主表是TO 对副表是一对多关系 4可以这么理解即3的关系位置互换了 主表是TO假如是公司 而副表是FROM假如是部门 就是公司被多个部门拥有 还可能主表是TO但主表是USER
    // 而副表是FROM但是SYSTEMROLE 理解起来是一个用户拥有多个角色(一个角色包含多个用户) 其实进一步理解角色和用户之间值多对多的关系也没啥问题 即也可用于多对多 但是JAVA实体是不能表示多对
    // 一或者多对多关系的 所以这里的进一步理解是不能实现的 按前面的理解就可以了
    // 5或者其他值的话 用于只生成关联表的paramMapper中的${camelTableName}ColumnsAlias 也就是所有用别名表示的那个标签 但是mapper.xml、MapperDao、serviceImpl中没有相关方法


    //ppm_standalone PPM_STAR_USER 这个工程需要把Mapper的@Component注解改成@Mapper注解
    PPM_STAR_USER = (() => {
        let defaultQueryTable = "USER", BaseEntitySecondPath = "base", PageInfoEntitySecondPath = BaseEntitySecondPath, IServiceSecondPath = "service", CommonControllerSecondPath = "web/common"
            , EntitySecondPath = "user", MapperDaoSecondPath = "dm/user", ControllerSecondPath = "web/user", ServiceImplSecondPath = "service/user/impl"
            , MapperXmlFirstPath = MapperDaoSecondPath + "/mapper", MapperParamXmlFirstPath = MapperXmlFirstPath + "/param", joinType = 4, middleTableName = "SYSTEMROLE_ASSIGN_USER"
            , resourceTableName = "SYSTEMROLE", resourceTableEntitySecondPath = "systemrole", resourceTableMapperDaoSecondPath = "dm/systemrole";

        return Object.assign ({}, this.PPM_STAR(), {defaultQueryTable, BaseEntitySecondPath, PageInfoEntitySecondPath, IServiceSecondPath, CommonControllerSecondPath, EntitySecondPath, MapperDaoSecondPath
            , ControllerSecondPath, ServiceImplSecondPath, MapperXmlFirstPath, MapperParamXmlFirstPath, joinType, middleTableName, resourceTableName, resourceTableEntitySecondPath
            , resourceTableMapperDaoSecondPath})
    })()

    //ppm_standalone PPM_STAR_SYSTEMROLE 这个工程需要把Mapper的@Component注解改成@Mapper注解
    PPM_STAR_SYSTEMROLE = (() => {
        let defaultQueryTable = "SYSTEMROLE", BaseEntitySecondPath = "base", PageInfoEntitySecondPath = BaseEntitySecondPath, IServiceSecondPath = "service", CommonControllerSecondPath = "web/common"
            , EntitySecondPath = "systemrole", MapperDaoSecondPath = "dm/systemrole", ControllerSecondPath = "web/systemrole", ServiceImplSecondPath = "service/systemrole/impl"
            , MapperXmlFirstPath = MapperDaoSecondPath + "/mapper", MapperParamXmlFirstPath = MapperXmlFirstPath + "/param", joinType = 0, middleTableName = "middleTableName"
            , resourceTableName = "resourceTableName", resourceTableEntitySecondPath = "systemrole", resourceTableMapperDaoSecondPath = "resourceTableMapperDaoSecondPath";

        return Object.assign ({}, this.PPM_STAR(), {defaultQueryTable, BaseEntitySecondPath, PageInfoEntitySecondPath, IServiceSecondPath, CommonControllerSecondPath, EntitySecondPath, MapperDaoSecondPath
            , ControllerSecondPath, ServiceImplSecondPath, MapperXmlFirstPath, MapperParamXmlFirstPath, joinType, middleTableName, resourceTableName, resourceTableEntitySecondPath
            , resourceTableMapperDaoSecondPath})
    })()

    PPM_STAR_COMPANY = (() => {
        let defaultQueryTable = "COMPANY", BaseEntitySecondPath = "base", PageInfoEntitySecondPath = BaseEntitySecondPath, IServiceSecondPath = "service", CommonControllerSecondPath = "web/common"
            , EntitySecondPath = "company", MapperDaoSecondPath = "dm/company", ControllerSecondPath = "web/company", ServiceImplSecondPath = "service/company/impl"
            , MapperXmlFirstPath = MapperDaoSecondPath + "/mapper", MapperParamXmlFirstPath = MapperXmlFirstPath + "/param", joinType = 1, middleTableName = "COMPANY_BELONG_TO_TENANT"
            , resourceTableName = "TENANT", resourceTableEntitySecondPath = "tenant", resourceTableMapperDaoSecondPath = "dm/tenant";

        return Object.assign({}, this.PPM_STAR(),{defaultQueryTable, BaseEntitySecondPath, PageInfoEntitySecondPath, IServiceSecondPath, CommonControllerSecondPath, EntitySecondPath, MapperDaoSecondPath
            , ControllerSecondPath, ServiceImplSecondPath, MapperXmlFirstPath, MapperParamXmlFirstPath, joinType, middleTableName, resourceTableName, resourceTableEntitySecondPath
            , resourceTableMapperDaoSecondPath})
    })()

    PPM_STAR_TENANT = (() => {
        let defaultQueryTable = "TENANT", BaseEntitySecondPath = "base", PageInfoEntitySecondPath = BaseEntitySecondPath, IServiceSecondPath = "service", CommonControllerSecondPath = "web/common"
            , EntitySecondPath = "tenant", MapperDaoSecondPath = "dm/tenant", ControllerSecondPath = "web/tenant", ServiceImplSecondPath = "service/tenant/impl"
            , MapperXmlFirstPath = MapperDaoSecondPath + "/mapper", MapperParamXmlFirstPath = MapperXmlFirstPath + "/param", joinType = 5, middleTableName = "middleTableName"
            , resourceTableName = "resourceTableName", resourceTableEntitySecondPath = "resourceTableEntitySecondPath", resourceTableMapperDaoSecondPath = "resourceTableMapperDaoSecondPath";

        return Object.assign({}, this.PPM_STAR(),{defaultQueryTable, BaseEntitySecondPath, PageInfoEntitySecondPath, IServiceSecondPath, CommonControllerSecondPath, EntitySecondPath, MapperDaoSecondPath
            , ControllerSecondPath, ServiceImplSecondPath, MapperXmlFirstPath, MapperParamXmlFirstPath, joinType, middleTableName, resourceTableName, resourceTableEntitySecondPath
            , resourceTableMapperDaoSecondPath})
    })()

    DEFAULT_VAL = this.PPM_STAR_COMPANY;

    render = () => {
        return (
            <Row type="flex" justify="start" style={{marginTop: 5, marginBottom: 15}}>
                <Col offset={5}>
                    <Radio.Group onChange={this.onChange} value={this.props.info}>
                        {/*<Radio value={this.LOCALHOST_OPERATION_MONITOR}>LOCALHOST_OPERATION_MONITOR</Radio>*/}
                        {/*<Radio value={this.PDM_STAR_TEST}>PDM_STAR_TEST</Radio>*/}
                        <Radio value={this.PPM_STAR_USER}>PPM_STAR_USER</Radio>
                        <Radio value={this.PPM_STAR_SYSTEMROLE}>PPM_STAR_SYSTEMROLE</Radio>
                        <Radio value={this.PPM_STAR_COMPANY}>PPM_STAR_COMPANY</Radio>
                        <Radio value={this.PPM_STAR_TENANT}>PPM_STAR_TENANT</Radio>
                    </Radio.Group>
                </Col>
            </Row>
        )
    }
}

const mapStateToProps = state => ({info: state.codeFormChangeInfo && state.codeFormChangeInfo.formInfo ? state.codeFormChangeInfo.formInfo : {}})

export default connect(mapStateToProps)(CodeFormInfoRadio)

