export const LOCALHOST = () => {
    return {"databaseAddress": "127.0.0.1", "databaseType": "mysql", "databasePort": "3306", "sysDatabaseSchema": "information_schema", "databaseUsername": "root"
        , "databasePassword": "123456", "businessDatabaseSchema": "operation_monitor", "codePackage": "com.guowang", "xmlWithSchema": 0
        , "DatabaseInfoMapperSecPath": "database/mapper"}
}

export const PDM_STAR = () => {
    return {"databaseAddress": "192.168.3.75", "databaseType": "dm", "databasePort": "5236", "sysDatabaseSchema": "SYS", "databaseUsername": "PDM"
        , "databasePassword": "plm123456", "businessDatabaseSchema": "PDM_STAR", "codePackage": "cn.jwis.xingwang", "xmlWithSchema": 0
        , "DatabaseInfoMapperSecPath": "mapper"}
}

export const PPM_STAR = () => {
    return {"databaseAddress": "192.168.3.75", "databaseType": "dm", "databasePort": "5236", "sysDatabaseSchema": "SYS", "databaseUsername": "PDM"
        , "databasePassword": "plm123456", "businessDatabaseSchema": "PPM_STAR", "codePackage": "cn.jwis.product.ppm.customer", "xmlWithSchema": 0
        , "DatabaseInfoMapperSecPath": "database/mapper"}
}

export const IAM_STAR = () => {
    return {"databaseAddress": "192.168.3.75", "databaseType": "dm", "databasePort": "5236", "sysDatabaseSchema": "SYS", "databaseUsername": "PDM"
        , "databasePassword": "plm123456", "businessDatabaseSchema": "IAM_STAR", "codePackage": "cn.jwis.integretion", "xmlWithSchema": 1
        , "DatabaseInfoMapperSecPath": "repo/sync/mapper"}
}

export const IAM_TRUKING = () => {
    return {"databaseAddress": "192.168.2.143", "databaseType": "mysql", "databasePort": "3306", "sysDatabaseSchema": "information_schema", "databaseUsername": "platform"
        , "databasePassword": "JCPdb123", "businessDatabaseSchema": "iam_truking", "codePackage": "cn.jwis.product.ppm.customer", "xmlWithSchema": 1
        , "DatabaseInfoMapperSecPath": "repo/mapper"}
}

export const PPM_TRUKING = () => {
    return {"databaseAddress": "192.168.2.143", "databaseType": "mysql", "databasePort": "3306", "sysDatabaseSchema": "information_schema", "databaseUsername": "platform"
        , "databasePassword": "JCPdb123", "businessDatabaseSchema": "ppm_truking", "codePackage": "cn.jwis.product.ppm.customer", "xmlWithSchema": 0
        , "DatabaseInfoMapperSecPath": ""}
}

export const PPM_XINGBANG = () => {
    return {"databaseAddress": "192.168.2.143", "databaseType": "mysql", "databasePort": "3306", "sysDatabaseSchema": "information_schema", "databaseUsername": "platform"
        , "databasePassword": "JCPdb123", "businessDatabaseSchema": "ppm_sinoboom", "codePackage": "cn.jwis.product.ppm.customer", "xmlWithSchema": 0
        , "DatabaseInfoMapperSecPath": ""}
}

// mtRtJoinTypeList
// 0是 NONE_JOIN 没有join
// 1是 ONE_TO_ONE_FROM 即主表是FROM 对副表是一对一关系
// 2是 ONE_TO_ONE_TO 即主表是TO 对副表是一对一关系
// 3是 ONE_TO_MANY_FROM 即主表是FROM 对副表是一对多关系 3好理解 可能主表是FROM假如是公司 而副表TO假如是是部门 就是一个公司对应多个部门 不过理解成主表FROM是SYSTEMROLE
// 副表TO是USER也没啥问题 就是一个角色包含多个用户 进一步理解成于多对多也可以 但是JAVA实体是不能表示多对一或者多对多关系的 所以这里的进一步理解是不能实现的 按前面的理解就可以了
// 4是 ONE_TO_MANY_TO 即主表是TO 对副表是一对多关系 4可以这么理解即3的关系位置互换了 主表是TO假如是公司 而副表是FROM假如是部门 就是公司被多个部门拥有 还可能主表是TO但主表是USER
// 而副表是FROM但是SYSTEMROLE 理解起来是一个用户拥有多个角色(一个角色包含多个用户) 其实进一步理解角色和用户之间值多对多的关系也没啥问题 即也可用于多对多 但是JAVA实体是不能表示多对
// 一或者多对多关系的 所以这里的进一步理解是不能实现的 按前面的理解就可以了
// 5或者其他值的话 用于只生成关联表的paramMapper中的${camelTableName}ColumnsAlias 也就是所有用别名表示的那个标签 但是mapper.xml、MapperDao、serviceImpl中没有相关方法


export const PDM_STAR_DEVIATE = (() => {
    let defaultQueryTable = "DEVIATE", EntitySecPath = "entity", MapperDaoSecPath = "mapper", ControllerSecPath = "deviate", ServiceImplSecPath = "deviate/service"
        , mtRtJoinTypeList = 0, mtName = "none", rtName = "none", rtEntitySecPath = "none", rtMapperDaoSecPath = "none", rtServiceImplSecPath = "none"
        , BaseEntitySecPath = "entity", PageInfoEntitySecPath = BaseEntitySecPath, IServiceSecPath = "service", CommonControllerSecPath = "web/common"
        , MapperXmlSecPath = MapperDaoSecPath + "/mapper", MapperParamXmlSecPath = MapperXmlSecPath + "/param"
    ;

    return Object.assign ({}, PDM_STAR(), {defaultQueryTable, BaseEntitySecPath, PageInfoEntitySecPath, IServiceSecPath, CommonControllerSecPath, EntitySecPath, MapperDaoSecPath
        , ControllerSecPath, ServiceImplSecPath, MapperXmlSecPath, MapperParamXmlSecPath, mtRtJoinTypeList, mtName, rtName, rtEntitySecPath
        , rtMapperDaoSecPath, rtServiceImplSecPath})
})()

export const PDM_STAR_DEVIATEDOC = (() => {
    let retainColumnName = 0,defaultQueryTable = "DEVIATEDOC", EntitySecPath = "entity", MapperDaoSecPath = "mapper", ControllerSecPath = "deviateDoc", ServiceImplSecPath = "deviateDoc/service"
        , BaseEntitySecPath = "entity", PageInfoEntitySecPath = BaseEntitySecPath, IServiceSecPath = "service", CommonControllerSecPath = "web/common"
        , MapperXmlSecPath = MapperDaoSecPath + "/mapper", MapperParamXmlSecPath = MapperXmlSecPath + "/param"

        , mtRtJoinTypeList = 0, displayMiddle = 0, containLinear = 0, linearIndexList = 1, mtName = "PROJECT_CONTAIN_RISK, RISK_LINK_TO_PROJECTITEM", mtEntitySecPath = "middle", mtMapperDaoSecPath = "dm/middle"
        , mtMapperXmlSecPath = mtMapperDaoSecPath + "/mapper", mtMapperParamXmlSecPath = mtMapperXmlSecPath + "/param", mtServiceImplSecPath = "service/middle/impl"
        , mtFromColumn = "FROM_OID", mtToColumn = "TO_OID"

        , rtName = "PROJECT, PROJECTITEM", rtEntitySecPath = "project, projectitem", rtMapperDaoSecPath = "dm/project, dm/projectitem"
        , rtMapperXmlSecPath = "dm/project/mapper, dm/projectitem/mapper", rtMapperParamXmlSecPath = "dm/project/mapper/param, dm/projectitem/mapper/param", rtServiceImplSecPath = "service/project/impl, service/projectitem/impl"
    ;

    return Object.assign ({}, PDM_STAR(), {retainColumnName, defaultQueryTable, BaseEntitySecPath, PageInfoEntitySecPath, IServiceSecPath, CommonControllerSecPath, EntitySecPath, MapperDaoSecPath
        , ControllerSecPath, ServiceImplSecPath, MapperXmlSecPath, MapperParamXmlSecPath, mtRtJoinTypeList, displayMiddle, containLinear, linearIndexList, mtName, mtEntitySecPath, mtMapperDaoSecPath, mtMapperXmlSecPath, mtMapperParamXmlSecPath, mtServiceImplSecPath
        , mtFromColumn, mtToColumn, rtName, rtEntitySecPath, rtMapperDaoSecPath, rtMapperXmlSecPath, rtMapperParamXmlSecPath, rtServiceImplSecPath})
})()

//ppm_standalone PPM_STAR_USER 这个工程需要把Mapper的@Component注解改成@Mapper注解
export const PPM_STAR_USER = (() => {
    let defaultQueryTable = "USER", EntitySecPath = "user", MapperDaoSecPath = "dm/user", ControllerSecPath = "web/user", ServiceImplSecPath = "service/user/impl"
        , mtRtJoinTypeList = 4, mtName = "SYSTEMROLE_ASSIGN_USER", rtName = "SYSTEMROLE", rtEntitySecPath = "systemrole", rtMapperDaoSecPath = "dm/systemrole", rtServiceImplSecPath = "none"
        , BaseEntitySecPath = "base", PageInfoEntitySecPath = BaseEntitySecPath, IServiceSecPath = "service", CommonControllerSecPath = "web/common"
        , MapperXmlSecPath = MapperDaoSecPath + "/mapper", MapperParamXmlSecPath = MapperXmlSecPath + "/param"
    ;

    return Object.assign ({}, PPM_STAR(), {defaultQueryTable, BaseEntitySecPath, PageInfoEntitySecPath, IServiceSecPath, CommonControllerSecPath, EntitySecPath, MapperDaoSecPath
        , ControllerSecPath, ServiceImplSecPath, MapperXmlSecPath, MapperParamXmlSecPath, mtRtJoinTypeList, mtName, rtName, rtEntitySecPath
        , rtMapperDaoSecPath, rtServiceImplSecPath})
})()

//ppm_standalone PPM_STAR_SYSTEMROLE 这个工程需要把Mapper的@Component注解改成@Mapper注解
export const PPM_STAR_SYSTEMROLE = (() => {
    let defaultQueryTable = "SYSTEMROLE", EntitySecPath = "systemrole", MapperDaoSecPath = "dm/systemrole", ControllerSecPath = "web/systemrole", ServiceImplSecPath = "service/systemrole/impl"
        , mtRtJoinTypeList = 0, mtName = "none", rtName = "none", rtEntitySecPath = "none", rtMapperDaoSecPath = "none", rtServiceImplSecPath = "none"
        , BaseEntitySecPath = "base", PageInfoEntitySecPath = BaseEntitySecPath, IServiceSecPath = "service", CommonControllerSecPath = "web/common"
        , MapperXmlSecPath = MapperDaoSecPath + "/mapper", MapperParamXmlSecPath = MapperXmlSecPath + "/param"
    ;

    return Object.assign ({}, PPM_STAR(), {defaultQueryTable, BaseEntitySecPath, PageInfoEntitySecPath, IServiceSecPath, CommonControllerSecPath, EntitySecPath, MapperDaoSecPath
        , ControllerSecPath, ServiceImplSecPath, MapperXmlSecPath, MapperParamXmlSecPath, mtRtJoinTypeList, mtName, rtName, rtEntitySecPath
        , rtMapperDaoSecPath, rtServiceImplSecPath})
})()

export const PPM_STAR_COMPANY = (() => {
    let defaultQueryTable = "COMPANY", EntitySecPath = "company", MapperDaoSecPath = "dm/company", ControllerSecPath = "web/company", ServiceImplSecPath = "service/company/impl"
        , mtRtJoinTypeList = 1, mtName = "COMPANY_BELONG_TO_TENANT", rtName = "TENANT", rtEntitySecPath = "tenant", rtMapperDaoSecPath = "dm/tenant", rtServiceImplSecPath = "none"
        , BaseEntitySecPath = "base", PageInfoEntitySecPath = BaseEntitySecPath, IServiceSecPath = "service", CommonControllerSecPath = "web/common"
        , MapperXmlSecPath = MapperDaoSecPath + "/mapper", MapperParamXmlSecPath = MapperXmlSecPath + "/param"
    ;

    return Object.assign({}, PPM_STAR(),{defaultQueryTable, BaseEntitySecPath, PageInfoEntitySecPath, IServiceSecPath, CommonControllerSecPath, EntitySecPath, MapperDaoSecPath
        , ControllerSecPath, ServiceImplSecPath, MapperXmlSecPath, MapperParamXmlSecPath, mtRtJoinTypeList, mtName, rtName, rtEntitySecPath
        , rtMapperDaoSecPath, rtServiceImplSecPath})
})()

export const PPM_STAR_TENANT = (() => {
    let defaultQueryTable = "TENANT", EntitySecPath = "tenant", MapperDaoSecPath = "dm/tenant", ControllerSecPath = "web/tenant", ServiceImplSecPath = "service/tenant/impl"
        , mtRtJoinTypeList = 5, mtName = "mtName", rtName = "rtName", rtEntitySecPath = "rtEntitySecPath", rtMapperDaoSecPath = "rtMapperDaoSecPath", rtServiceImplSecPath = "none"
        , BaseEntitySecPath = "base", PageInfoEntitySecPath = BaseEntitySecPath, IServiceSecPath = "service", CommonControllerSecPath = "web/common"
        , MapperXmlSecPath = MapperDaoSecPath + "/mapper", MapperParamXmlSecPath = MapperXmlSecPath + "/param"
    ;

    return Object.assign({}, PPM_STAR(),{defaultQueryTable, BaseEntitySecPath, PageInfoEntitySecPath, IServiceSecPath, CommonControllerSecPath, EntitySecPath, MapperDaoSecPath
        , ControllerSecPath, ServiceImplSecPath, MapperXmlSecPath, MapperParamXmlSecPath, mtRtJoinTypeList, mtName, rtName, rtEntitySecPath
        , rtMapperDaoSecPath, rtServiceImplSecPath})
})()

export const PPM_STAR_RISK = (() => {
    let retainColumnName = 0, defaultQueryTable = "RISK", EntitySecPath = "risk", MapperDaoSecPath = "dm/risk", ControllerSecPath = "web/risk", ServiceImplSecPath = "service/risk/impl"
        , BaseEntitySecPath = "base", PageInfoEntitySecPath = BaseEntitySecPath, IServiceSecPath = "service", CommonControllerSecPath = "web/common"
        , MapperXmlSecPath = MapperDaoSecPath + "/mapper", MapperParamXmlSecPath = MapperXmlSecPath + "/param"

        , mtRtJoinTypeList = "2, 3", one2ManyPage = 0, displayMiddle = 0, containLinear = 0, linearIndexList = 1, mtName = "PROJECT_CONTAIN_RISK, RISK_LINK_TO_PROJECTITEM", mtEntitySecPath = "middle", mtMapperDaoSecPath = "dm/middle"
        , mtMapperXmlSecPath = mtMapperDaoSecPath + "/mapper", mtMapperParamXmlSecPath = mtMapperXmlSecPath + "/param", mtServiceImplSecPath = "service/middle/impl"
        , mtFromColumn = "FROM_OID", mtToColumn = "TO_OID"

        , rtName = "PROJECT, PROJECTITEM", rtEntitySecPath = "project, projectitem", rtMapperDaoSecPath = "dm/project, dm/projectitem"
        , rtMapperXmlSecPath = "dm/project/mapper, dm/projectitem/mapper", rtMapperParamXmlSecPath = "dm/project/mapper/param, dm/projectitem/mapper/param", rtServiceImplSecPath = "service/project/impl, service/projectitem/impl"
    ;

    return Object.assign ({}, PPM_STAR(), {retainColumnName, defaultQueryTable, BaseEntitySecPath, PageInfoEntitySecPath, IServiceSecPath, CommonControllerSecPath, EntitySecPath, MapperDaoSecPath
        , ControllerSecPath, ServiceImplSecPath, MapperXmlSecPath, MapperParamXmlSecPath, mtRtJoinTypeList, one2ManyPage, displayMiddle, containLinear, linearIndexList, mtName, mtEntitySecPath, mtMapperDaoSecPath, mtMapperXmlSecPath, mtMapperParamXmlSecPath, mtServiceImplSecPath
        , mtFromColumn, mtToColumn, rtName, rtEntitySecPath, rtMapperDaoSecPath, rtMapperXmlSecPath, rtMapperParamXmlSecPath, rtServiceImplSecPath})
})()


// export const PPM_STAR_PROJECT_DYNAMIC = (() => {
//     let defaultQueryTable = "PROJECTITEMDYNAMICATTRVALUES", BaseEntitySecPath = "base", PageInfoEntitySecPath = BaseEntitySecPath, IServiceSecPath = "service", CommonControllerSecPath = "web/common"
//         , EntitySecPath = "project", MapperDaoSecPath = "dm/project", ControllerSecPath = "web/project", ServiceImplSecPath = "service/project/impl", rtServiceImplSecPath = "none"
//         , mtRtJoinTypeList = 0, mtName = "none", MapperXmlSecPath = MapperDaoSecPath + "/mapper", MapperParamXmlSecPath = MapperXmlSecPath + "/param"
//         , rtName = "none", rtEntitySecPath = "none", rtMapperDaoSecPath = "none";
//
//     return Object.assign({}, PPM_STAR(),{defaultQueryTable, BaseEntitySecPath, PageInfoEntitySecPath, IServiceSecPath, CommonControllerSecPath, EntitySecPath, MapperDaoSecPath
//         , ControllerSecPath, ServiceImplSecPath, MapperXmlSecPath, MapperParamXmlSecPath, mtRtJoinTypeList, mtName, rtName, rtEntitySecPath
//         , rtMapperDaoSecPath, rtServiceImplSecPath})
// })()

// export const IAM_STAR_DEPARTMENT_POSITION = (() => {
//     let defaultQueryTable = "DEPARTMENT", EntitySecPath = "entity/department", MapperDaoSecPath = "dm/department", ControllerSecPath = "web/department", ServiceImplSecPath = "service/department/impl"
//         , mtRtJoinTypeList = 4, mtName = "POSITION_BELONG_TO_DEPARTMENT", mtEntitySecPath = "entity/middle", mtMapperDaoSecPath = "dm/middle", mtServiceImplSecPath = "service/middle/impl"
//         , rtName = "POSITION", rtEntitySecPath = "entity/position", rtMapperDaoSecPath = "dm/position", rtServiceImplSecPath = "service/position/impl"
//         , BaseEntitySecPath = "entity/base", PageInfoEntitySecPath = BaseEntitySecPath, IServiceSecPath = "service", CommonControllerSecPath = "web/common"
//         , MapperXmlSecPath = MapperDaoSecPath + "/mapper", MapperParamXmlSecPath = MapperXmlSecPath + "/param"
//         ;
//
//     return Object.assign({}, IAM_STAR(),{defaultQueryTable, BaseEntitySecPath, PageInfoEntitySecPath, IServiceSecPath, CommonControllerSecPath, EntitySecPath, MapperDaoSecPath
//         , ControllerSecPath, ServiceImplSecPath, MapperXmlSecPath, MapperParamXmlSecPath, mtRtJoinTypeList, mtName, mtEntitySecPath, mtMapperDaoSecPath, mtServiceImplSecPath
//         , rtName, rtEntitySecPath, rtMapperDaoSecPath, rtServiceImplSecPath})
// })()
//
// export const IAM_STAR_POSITION_PERSONNEL = (() => {
//     let defaultQueryTable = "POSITION", EntitySecPath = "entity/position", MapperDaoSecPath = "dm/position", ControllerSecPath = "web/position", ServiceImplSecPath = "service/position/impl"
//         , mtRtJoinTypeList = 2, mtName = "PERSONNEL_BELONG_TO_POSITION", mtEntitySecPath = "entity/middle", mtMapperDaoSecPath = "dm/middle", mtServiceImplSecPath = "service/middle/impl"
//         , rtName = "PERSONNEL", rtEntitySecPath = "entity/personnel", rtMapperDaoSecPath = "dm/personnel", rtServiceImplSecPath = "service/personnel/impl"
//         , BaseEntitySecPath = "entity/base", PageInfoEntitySecPath = BaseEntitySecPath, IServiceSecPath = "service", CommonControllerSecPath = "web/common"
//         , MapperXmlSecPath = MapperDaoSecPath + "/mapper", MapperParamXmlSecPath = MapperXmlSecPath + "/param"
//         ;
//
//     return Object.assign({}, IAM_STAR(),{defaultQueryTable, BaseEntitySecPath, PageInfoEntitySecPath, IServiceSecPath, CommonControllerSecPath, EntitySecPath, MapperDaoSecPath
//         , ControllerSecPath, ServiceImplSecPath, MapperXmlSecPath, MapperParamXmlSecPath, mtRtJoinTypeList, mtName, mtEntitySecPath, mtMapperDaoSecPath, mtServiceImplSecPath
//         , rtName, rtEntitySecPath, rtMapperDaoSecPath, rtServiceImplSecPath})
// })()

// export const IAM_STAR_USER = (() => {
//     let defaultQueryTable = "USER", EntitySecPath = "entity/user", MapperDaoSecPath = "dm/user", ControllerSecPath = "web/user", ServiceImplSecPath = "service/user/impl"
//         , mtRtJoinTypeList = 3, mtName = "DEPARTMENT_BELONG_TO_DEPARTMENT", mtEntitySecPath = "entity/middle", mtMapperDaoSecPath = "dm/middle", mtServiceImplSecPath = "service/middle/impl"
//         , rtName = "none", rtEntitySecPath = "none", rtMapperDaoSecPath = "none", rtServiceImplSecPath = "none"
//         , BaseEntitySecPath = "entity/base", PageInfoEntitySecPath = BaseEntitySecPath, IServiceSecPath = "service", CommonControllerSecPath = "web/common"
//         , MapperXmlSecPath = MapperDaoSecPath + "/mapper", MapperParamXmlSecPath = MapperXmlSecPath + "/param"
//     ;
//
//     return Object.assign ({}, IAM_STAR(), {defaultQueryTable, BaseEntitySecPath, PageInfoEntitySecPath, IServiceSecPath, CommonControllerSecPath, EntitySecPath, MapperDaoSecPath
//         , ControllerSecPath, ServiceImplSecPath, MapperXmlSecPath, MapperParamXmlSecPath, mtRtJoinTypeList, mtName, mtEntitySecPath, mtMapperDaoSecPath, mtServiceImplSecPath
//         , rtName, rtEntitySecPath, rtMapperDaoSecPath, rtServiceImplSecPath})
// })()

// export const IAM_STAR_USER = (() => {
//     let defaultQueryTable = "USER", EntitySecPath = "entity", MapperDaoSecPath = "repo/sync/mapper", ControllerSecPath = "web", ServiceImplSecPath = "service/impl"
//         , mtRtJoinTypeList = 1, mtName = "USER_LINK_TO_PERSONNEL", mtEntitySecPath = "entity", mtMapperDaoSecPath = "repo/sync/mapper", mtServiceImplSecPath = "service/impl"
//         , rtName = "PERSONNEL", rtEntitySecPath = "entity", rtMapperDaoSecPath = "repo/sync/mapper", rtServiceImplSecPath = "service/impl"
//         , BaseEntitySecPath = "base/entity", PageInfoEntitySecPath = BaseEntitySecPath, IServiceSecPath = "service", CommonControllerSecPath = "web/common"
//         , MapperXmlSecPath = MapperDaoSecPath, MapperParamXmlSecPath = MapperXmlSecPath + "/param"
//     ;
//
//     return Object.assign ({}, IAM_STAR(), {defaultQueryTable, BaseEntitySecPath, PageInfoEntitySecPath, IServiceSecPath, CommonControllerSecPath, EntitySecPath, MapperDaoSecPath
//         , ControllerSecPath, ServiceImplSecPath, MapperXmlSecPath, MapperParamXmlSecPath, mtRtJoinTypeList, mtName, mtEntitySecPath, mtMapperDaoSecPath, mtServiceImplSecPath
//         , rtName, rtEntitySecPath, rtMapperDaoSecPath, rtServiceImplSecPath})
// })()
//
// export const IAM_STAR_PERSONNEL = (() => {
//     let defaultQueryTable = "PERSONNEL", EntitySecPath = "entity", MapperDaoSecPath = "repo/sync/mapper", ControllerSecPath = "web", ServiceImplSecPath = "service/impl"
//         , mtRtJoinTypeList = 0, mtName = "none", mtEntitySecPath = "none", mtMapperDaoSecPath = "none", mtServiceImplSecPath = "none"
//         , rtName = "none", rtEntitySecPath = "none", rtMapperDaoSecPath = "none", rtServiceImplSecPath = "none"
//         , BaseEntitySecPath = "base/entity", PageInfoEntitySecPath = BaseEntitySecPath, IServiceSecPath = "service", CommonControllerSecPath = "web/common"
//         , MapperXmlSecPath = MapperDaoSecPath, MapperParamXmlSecPath = MapperXmlSecPath + "/param"
//     ;
//
//     return Object.assign ({}, IAM_STAR(), {defaultQueryTable, BaseEntitySecPath, PageInfoEntitySecPath, IServiceSecPath, CommonControllerSecPath, EntitySecPath, MapperDaoSecPath
//         , ControllerSecPath, ServiceImplSecPath, MapperXmlSecPath, MapperParamXmlSecPath, mtRtJoinTypeList, mtName, mtEntitySecPath, mtMapperDaoSecPath, mtServiceImplSecPath
//         , rtName, rtEntitySecPath, rtMapperDaoSecPath, rtServiceImplSecPath})
// })()
//
// export const IAM_STAR_POSITIONDEF = (() => {
//     let defaultQueryTable = "POSITIONDEF", EntitySecPath = "entity/positiondef", MapperDaoSecPath = "dm/positiondef", ControllerSecPath = "web/positiondef", ServiceImplSecPath = "service/positiondef/impl"
//         , mtRtJoinTypeList = 0, mtName = "none", mtEntitySecPath = "none", mtMapperDaoSecPath = "none", mtServiceImplSecPath = "none"
//         , rtName = "none", rtEntitySecPath = "none", rtMapperDaoSecPath = "none", rtServiceImplSecPath = "none"
//         , BaseEntitySecPath = "entity/base", PageInfoEntitySecPath = BaseEntitySecPath, IServiceSecPath = "service", CommonControllerSecPath = "web/common"
//         , MapperXmlSecPath = MapperDaoSecPath + "/mapper", MapperParamXmlSecPath = MapperXmlSecPath + "/param"
//     ;
//
//     return Object.assign ({}, IAM_STAR(), {defaultQueryTable, BaseEntitySecPath, PageInfoEntitySecPath, IServiceSecPath, CommonControllerSecPath, EntitySecPath, MapperDaoSecPath
//         , ControllerSecPath, ServiceImplSecPath, MapperXmlSecPath, MapperParamXmlSecPath, mtRtJoinTypeList, mtName, mtEntitySecPath, mtMapperDaoSecPath, mtServiceImplSecPath
//         , rtName, rtEntitySecPath, rtMapperDaoSecPath, rtServiceImplSecPath})
// })()

// export const IAM_STAR_POSITION_BELONG_DEPARTMENT = (() => {
//     let defaultQueryTable = "POSITION_BELONG_TO_DEPARTMENT", EntitySecPath = "entity", MapperDaoSecPath = "repo/sync", ControllerSecPath = "web/sync", ServiceImplSecPath = "service/impl"
//         , mtRtJoinTypeList = 0, mtName = "none", mtEntitySecPath = "none", mtMapperDaoSecPath = "none", mtServiceImplSecPath = "none"
//         , rtName = "none", rtEntitySecPath = "none", rtMapperDaoSecPath = "none", rtServiceImplSecPath = "none"
//         , BaseEntitySecPath = "entity", PageInfoEntitySecPath = BaseEntitySecPath, IServiceSecPath = "service", CommonControllerSecPath = "web/common"
//         , MapperXmlSecPath = MapperDaoSecPath + "/mapper", MapperParamXmlSecPath = MapperXmlSecPath + "/param"
//     ;
//
//     return Object.assign ({}, IAM_STAR(), {defaultQueryTable, BaseEntitySecPath, PageInfoEntitySecPath, IServiceSecPath, CommonControllerSecPath, EntitySecPath, MapperDaoSecPath
//         , ControllerSecPath, ServiceImplSecPath, MapperXmlSecPath, MapperParamXmlSecPath, mtRtJoinTypeList, mtName, mtEntitySecPath, mtMapperDaoSecPath, mtServiceImplSecPath
//         , rtName, rtEntitySecPath, rtMapperDaoSecPath, rtServiceImplSecPath})
// })()






export const PPM_TRUKING_USER = (() => {
    let retainColumnName = 0, defaultQueryTable = "user", EntitySecPath = "entity", MapperDaoSecPath = "repo/mysql/mapper", ControllerSecPath = "web", ServiceImplSecPath = "service/impl"
        , mtRtJoinTypeList = 0, one2ManyPage = 0, displayMiddle = 0, containLinear = 0, linearIndexList = 0,  mtName = "none", mtEntitySecPath = "none", mtMapperDaoSecPath = "none"
        , BaseEntitySecPath = "entity", PageInfoEntitySecPath = BaseEntitySecPath, IServiceSecPath = "service/interf", CommonControllerSecPath = "web"
        , MapperXmlSecPath = MapperDaoSecPath, MapperParamXmlSecPath = MapperXmlSecPath + "/param"

        , mtServiceImplSecPath = "none", mtMapperXmlSecPath = "repo/mysql/mapper", mtMapperParamXmlSecPath = mtMapperXmlSecPath + "/param"
        , mtFromColumn = "FROM_OID", mtToColumn = "TO_OID"

        , rtName = "none", rtEntitySecPath = "none", rtMapperDaoSecPath = "none", rtServiceImplSecPath = "none", rtMapperXmlSecPath = "repo/mysql/mapper"
        , rtMapperParamXmlSecPath = rtMapperXmlSecPath + "/param"
    ;

    return Object.assign ({}, PPM_TRUKING(), {retainColumnName, defaultQueryTable, BaseEntitySecPath, PageInfoEntitySecPath, IServiceSecPath, CommonControllerSecPath, EntitySecPath, MapperDaoSecPath
        , ControllerSecPath, ServiceImplSecPath, MapperXmlSecPath, MapperParamXmlSecPath, mtRtJoinTypeList, one2ManyPage, displayMiddle, containLinear, linearIndexList, mtName, mtEntitySecPath, mtMapperDaoSecPath, mtMapperXmlSecPath, mtMapperParamXmlSecPath, mtServiceImplSecPath
        , mtFromColumn, mtToColumn, rtName, rtEntitySecPath, rtMapperDaoSecPath, rtMapperXmlSecPath, rtMapperParamXmlSecPath, rtServiceImplSecPath})
})()

export const PPM_TRUKING_PROJECT_PROJECTTEAM = (() => {
    let retainColumnName = 0, defaultQueryTable = "PROJECT", EntitySecPath = "entity", MapperDaoSecPath = "repo/mysql/mapper", ControllerSecPath = "web", ServiceImplSecPath = "service/impl"
        , BaseEntitySecPath = "entity", PageInfoEntitySecPath = BaseEntitySecPath, IServiceSecPath = "service/interf", CommonControllerSecPath = "web"
        , MapperXmlSecPath = MapperDaoSecPath, MapperParamXmlSecPath = MapperXmlSecPath + "/param"

        , mtRtJoinTypeList = "3", one2ManyPage = 0, displayMiddle = 0, containLinear = 0, linearIndexList = 1, mtName = "department"
        , mtEntitySecPath = "entity", mtMapperDaoSecPath = "repo/mysql/mapper"
        , mtMapperXmlSecPath = "repo/mysql/mapper", mtMapperParamXmlSecPath = mtMapperXmlSecPath + "/param", mtServiceImplSecPath = "service/impl"
        , mtFromColumn = "OID", mtToColumn = "GROUP_OID"

        , rtName = "projectitem", rtEntitySecPath = "entity", rtMapperDaoSecPath = "repo/mysql/mapper"
        , rtMapperXmlSecPath = "repo/mysql/mapper", rtMapperParamXmlSecPath = rtMapperXmlSecPath + "/param", rtServiceImplSecPath = "service/impl"
    ;

    return Object.assign ({}, PPM_TRUKING(), {retainColumnName, defaultQueryTable, BaseEntitySecPath, PageInfoEntitySecPath, IServiceSecPath, CommonControllerSecPath, EntitySecPath, MapperDaoSecPath
        , ControllerSecPath, ServiceImplSecPath, MapperXmlSecPath, MapperParamXmlSecPath, mtRtJoinTypeList, one2ManyPage, displayMiddle, containLinear, linearIndexList, mtName, mtEntitySecPath, mtMapperDaoSecPath, mtMapperXmlSecPath, mtMapperParamXmlSecPath, mtServiceImplSecPath
        , mtFromColumn, mtToColumn, rtName, rtEntitySecPath, rtMapperDaoSecPath, rtMapperXmlSecPath, rtMapperParamXmlSecPath, rtServiceImplSecPath})
})()

export const PPM_TRUKING_PROGRAM_PROJECTTEAM = (() => {
    let retainColumnName = 0, defaultQueryTable = "PROGRAM", EntitySecPath = "entity", MapperDaoSecPath = "repo/mysql/mapper", ControllerSecPath = "web", ServiceImplSecPath = "service/impl"
        , BaseEntitySecPath = "entity", PageInfoEntitySecPath = BaseEntitySecPath, IServiceSecPath = "service/interf", CommonControllerSecPath = "web"
        , MapperXmlSecPath = MapperDaoSecPath, MapperParamXmlSecPath = MapperXmlSecPath + "/param"

        , mtRtJoinTypeList = "1, 1, 3, 3", displayMiddle = 0, containLinear = 1, linearIndexList = 1, mtName = "department, programmaster_contain_projectteam, projectteam_assign_projectteamrole, projectteamrole_assign_user"
        , mtEntitySecPath = "entity", mtMapperDaoSecPath = "repo/mysql/mapper"
        , mtMapperXmlSecPath = "repo/mysql/mapper", mtMapperParamXmlSecPath = mtMapperXmlSecPath + "/param", mtServiceImplSecPath = "service/impl"
        , mtFromColumn = "FROM_OID", mtToColumn = "TO_OID"

        , rtName = "programmaster, projectteam, projectteamrole, user", rtEntitySecPath = "entity", rtMapperDaoSecPath = "repo/mysql/mapper"
        , rtMapperXmlSecPath = "repo/mysql/mapper", rtMapperParamXmlSecPath = rtMapperXmlSecPath + "/param", rtServiceImplSecPath = "service/impl"
    ;

    return Object.assign ({}, PPM_TRUKING(), {retainColumnName, defaultQueryTable, BaseEntitySecPath, PageInfoEntitySecPath, IServiceSecPath, CommonControllerSecPath, EntitySecPath, MapperDaoSecPath
        , ControllerSecPath, ServiceImplSecPath, MapperXmlSecPath, MapperParamXmlSecPath, mtRtJoinTypeList, displayMiddle, containLinear, linearIndexList, mtName, mtEntitySecPath, mtMapperDaoSecPath, mtMapperXmlSecPath, mtMapperParamXmlSecPath, mtServiceImplSecPath
        , mtFromColumn, mtToColumn, rtName, rtEntitySecPath, rtMapperDaoSecPath, rtMapperXmlSecPath, rtMapperParamXmlSecPath, rtServiceImplSecPath})
})()

export const PPM_TRUKING_PROJECT_PROJECTITEM = (() => {
    let retainColumnName = 0, defaultQueryTable = "project", EntitySecPath = "entity", MapperDaoSecPath = "repo/mysql/mapper", ControllerSecPath = "web", ServiceImplSecPath = "service/impl"
        , BaseEntitySecPath = "entity", PageInfoEntitySecPath = BaseEntitySecPath, IServiceSecPath = "service/interf", CommonControllerSecPath = "web"
        , MapperXmlSecPath = MapperDaoSecPath, MapperParamXmlSecPath = MapperXmlSecPath + "/param"

        , mtRtJoinTypeList = "1, 1, 3, 3", displayMiddle = 0, containLinear = 1, linearIndexList = 1, mtName = "department, programmaster_contain_projectteam, projectteam_assign_projectteamrole, projectteamrole_assign_user"
        , mtEntitySecPath = "entity", mtMapperDaoSecPath = "repo/mysql/mapper"
        , mtMapperXmlSecPath = "repo/mysql/mapper", mtMapperParamXmlSecPath = mtMapperXmlSecPath + "/param", mtServiceImplSecPath = "service/impl"
        , mtFromColumn = "FROM_OID", mtToColumn = "TO_OID"

        , rtName = "programmaster, projectteam, projectteamrole, user", rtEntitySecPath = "entity", rtMapperDaoSecPath = "repo/mysql/mapper"
        , rtMapperXmlSecPath = "repo/mysql/mapper", rtMapperParamXmlSecPath = rtMapperXmlSecPath + "/param", rtServiceImplSecPath = "service/impl"
    ;

    return Object.assign ({}, PPM_TRUKING(), {retainColumnName, defaultQueryTable, BaseEntitySecPath, PageInfoEntitySecPath, IServiceSecPath, CommonControllerSecPath, EntitySecPath, MapperDaoSecPath
        , ControllerSecPath, ServiceImplSecPath, MapperXmlSecPath, MapperParamXmlSecPath, mtRtJoinTypeList, displayMiddle, containLinear, linearIndexList, mtName, mtEntitySecPath, mtMapperDaoSecPath, mtMapperXmlSecPath, mtMapperParamXmlSecPath, mtServiceImplSecPath
        , mtFromColumn, mtToColumn, rtName, rtEntitySecPath, rtMapperDaoSecPath, rtMapperXmlSecPath, rtMapperParamXmlSecPath, rtServiceImplSecPath})
})()


export const PPM_XINGBANG_NONE = (() => {
    let defaultQueryTable = "", EntitySecPath = "entity", MapperDaoSecPath = "repo/mapper", ControllerSecPath = "web", ServiceImplSecPath = "impl"
        , mtRtJoinTypeList = 0, displayMiddle = 0, mtName = "none", mtEntitySecPath = "none", mtMapperDaoSecPath = "none", mtServiceImplSecPath = "none"
        , rtName = "none", rtEntitySecPath = "none", rtMapperDaoSecPath = "none", rtServiceImplSecPath = "none"
        , BaseEntitySecPath = "entity", PageInfoEntitySecPath = BaseEntitySecPath, IServiceSecPath = "interf", CommonControllerSecPath = "web"
        , MapperXmlSecPath = MapperDaoSecPath, MapperParamXmlSecPath = MapperXmlSecPath + "/param"
    ;

    return Object.assign ({}, PPM_XINGBANG(), {defaultQueryTable, BaseEntitySecPath, PageInfoEntitySecPath, IServiceSecPath, CommonControllerSecPath, EntitySecPath, MapperDaoSecPath
        , ControllerSecPath, ServiceImplSecPath, MapperXmlSecPath, MapperParamXmlSecPath, mtRtJoinTypeList, displayMiddle, mtName, mtEntitySecPath, mtMapperDaoSecPath, mtServiceImplSecPath
        , rtName, rtEntitySecPath, rtMapperDaoSecPath, rtServiceImplSecPath})
})()

export const PPM_XINGBANG_PROJECT = (() => {
    let retainColumnName = 0, defaultQueryTable = "PROJECT", EntitySecPath = "entity", MapperDaoSecPath = "repo/mapper", ControllerSecPath = "web", ServiceImplSecPath = "impl"
        , BaseEntitySecPath = "entity", PageInfoEntitySecPath = BaseEntitySecPath, IServiceSecPath = "interf", CommonControllerSecPath = "web"
        , MapperXmlSecPath = MapperDaoSecPath, MapperParamXmlSecPath = MapperXmlSecPath + "/param"

        , mtRtJoinTypeList = 1, displayMiddle = 1, mtName = "projectextensionpropertyvalue", mtEntitySecPath = "entity", mtMapperDaoSecPath = "repo/mapper"
        , mtMapperXmlSecPath = "repo/mapper", mtMapperParamXmlSecPath = mtMapperXmlSecPath + "/param", mtServiceImplSecPath = "impl"
        , mtFromColumn = "INSTANCE_OID", mtToColumn = "EP_OID"

        , rtName = "projectextensionproperty", rtEntitySecPath = "entity", rtMapperDaoSecPath = "repo/mapper"
        , rtMapperXmlSecPath = "repo/mapper", rtMapperParamXmlSecPath = rtMapperXmlSecPath + "/param", rtServiceImplSecPath = "impl"
    ;

    return Object.assign ({}, PPM_XINGBANG(), {retainColumnName, defaultQueryTable, BaseEntitySecPath, PageInfoEntitySecPath, IServiceSecPath, CommonControllerSecPath, EntitySecPath, MapperDaoSecPath
        , ControllerSecPath, ServiceImplSecPath, MapperXmlSecPath, MapperParamXmlSecPath, mtRtJoinTypeList, displayMiddle, mtName, mtEntitySecPath, mtMapperDaoSecPath, mtMapperXmlSecPath, mtMapperParamXmlSecPath, mtServiceImplSecPath
        , mtFromColumn, mtToColumn, rtName, rtEntitySecPath, rtMapperDaoSecPath, rtMapperXmlSecPath, rtMapperParamXmlSecPath, rtServiceImplSecPath})
})()


export const PPM_XINGBANG_PPMECR = (() => {
    let retainColumnName = 0, defaultQueryTable = "ppmecr", EntitySecPath = "entity", MapperDaoSecPath = "repo/mapper", ControllerSecPath = "web", ServiceImplSecPath = "impl"
        , BaseEntitySecPath = "entity", PageInfoEntitySecPath = BaseEntitySecPath, IServiceSecPath = "interf", CommonControllerSecPath = "web"
        , MapperXmlSecPath = MapperDaoSecPath, MapperParamXmlSecPath = MapperXmlSecPath + "/param"

        , mtRtJoinTypeList = 2, displayMiddle = 0, mtName = "project_generate_ppmecr, user_belong_tenant", mtEntitySecPath = "entity", mtMapperDaoSecPath = "repo/mapper"
        , mtMapperXmlSecPath = "repo/mapper", mtMapperParamXmlSecPath = mtMapperXmlSecPath + "/param", mtServiceImplSecPath = "impl"
        , mtFromColumn = "FROM_OID", mtToColumn = "TO_OID"

        , rtName = "project, tenant", rtEntitySecPath = "entity", rtMapperDaoSecPath = "repo/mapper"
        , rtMapperXmlSecPath = "repo/mapper", rtMapperParamXmlSecPath = rtMapperXmlSecPath + "/param", rtServiceImplSecPath = "impl"
    ;

    return Object.assign ({}, PPM_XINGBANG(), {retainColumnName, defaultQueryTable, BaseEntitySecPath, PageInfoEntitySecPath, IServiceSecPath, CommonControllerSecPath, EntitySecPath, MapperDaoSecPath
        , ControllerSecPath, ServiceImplSecPath, MapperXmlSecPath, MapperParamXmlSecPath, mtRtJoinTypeList, displayMiddle, mtName, mtEntitySecPath, mtMapperDaoSecPath, mtMapperXmlSecPath, mtMapperParamXmlSecPath, mtServiceImplSecPath
        , mtFromColumn, mtToColumn, rtName, rtEntitySecPath, rtMapperDaoSecPath, rtMapperXmlSecPath, rtMapperParamXmlSecPath, rtServiceImplSecPath})
})()


export const PPM_XINGBANG_USREDEPARTMENT = (() => {
    let retainColumnName = 0, defaultQueryTable = "user", EntitySecPath = "entity", MapperDaoSecPath = "repo/mapper", ControllerSecPath = "web", ServiceImplSecPath = "impl"
        , BaseEntitySecPath = "entity", PageInfoEntitySecPath = BaseEntitySecPath, IServiceSecPath = "interf", CommonControllerSecPath = "web"
        , MapperXmlSecPath = MapperDaoSecPath, MapperParamXmlSecPath = MapperXmlSecPath + "/param"

        , mtRtJoinTypeList = 3, displayMiddle = 0, mtName = "project_generate_ppmecr", mtEntitySecPath = "entity", mtMapperDaoSecPath = "repo/mapper"
        , mtMapperXmlSecPath = "repo/mapper", mtMapperParamXmlSecPath = mtMapperXmlSecPath + "/param", mtServiceImplSecPath = "impl"
        , mtFromColumn = "FROM_OID", mtToColumn = "TO_OID"

        , rtName = "department", rtEntitySecPath = "entity", rtMapperDaoSecPath = "repo/mapper"
        , rtMapperXmlSecPath = "repo/mapper", rtMapperParamXmlSecPath = rtMapperXmlSecPath + "/param", rtServiceImplSecPath = "impl"
    ;

    return Object.assign ({}, PPM_XINGBANG(), {retainColumnName, defaultQueryTable, BaseEntitySecPath, PageInfoEntitySecPath, IServiceSecPath, CommonControllerSecPath, EntitySecPath, MapperDaoSecPath
        , ControllerSecPath, ServiceImplSecPath, MapperXmlSecPath, MapperParamXmlSecPath, mtRtJoinTypeList, displayMiddle, mtName, mtEntitySecPath, mtMapperDaoSecPath, mtMapperXmlSecPath, mtMapperParamXmlSecPath, mtServiceImplSecPath
        , mtFromColumn, mtToColumn, rtName, rtEntitySecPath, rtMapperDaoSecPath, rtMapperXmlSecPath, rtMapperParamXmlSecPath, rtServiceImplSecPath})
})()



export const PPM_XINGBANG_USRE_TENANT = (() => {
    let retainColumnName = 0, defaultQueryTable = "user", EntitySecPath = "entity", MapperDaoSecPath = "repo/mapper", ControllerSecPath = "web", ServiceImplSecPath = "impl"
        , BaseEntitySecPath = "entity", PageInfoEntitySecPath = BaseEntitySecPath, IServiceSecPath = "interf", CommonControllerSecPath = "web"
        , MapperXmlSecPath = MapperDaoSecPath, MapperParamXmlSecPath = MapperXmlSecPath + "/param"

        , mtRtJoinTypeList = 3, displayMiddle = 0, mtName = "user_belong_tenant", mtEntitySecPath = "entity", mtMapperDaoSecPath = "repo/mapper"
        , mtMapperXmlSecPath = "repo/mapper", mtMapperParamXmlSecPath = mtMapperXmlSecPath + "/param", mtServiceImplSecPath = "impl"
        , mtFromColumn = "FROM_OID", mtToColumn = "TO_OID"

        , rtName = "tenant", rtEntitySecPath = "entity", rtMapperDaoSecPath = "repo/mapper"
        , rtMapperXmlSecPath = "repo/mapper", rtMapperParamXmlSecPath = rtMapperXmlSecPath + "/param", rtServiceImplSecPath = "impl"
    ;

    return Object.assign ({}, PPM_XINGBANG(), {retainColumnName, defaultQueryTable, BaseEntitySecPath, PageInfoEntitySecPath, IServiceSecPath, CommonControllerSecPath, EntitySecPath, MapperDaoSecPath
        , ControllerSecPath, ServiceImplSecPath, MapperXmlSecPath, MapperParamXmlSecPath, mtRtJoinTypeList, displayMiddle, mtName, mtEntitySecPath, mtMapperDaoSecPath, mtMapperXmlSecPath, mtMapperParamXmlSecPath, mtServiceImplSecPath
        , mtFromColumn, mtToColumn, rtName, rtEntitySecPath, rtMapperDaoSecPath, rtMapperXmlSecPath, rtMapperParamXmlSecPath, rtServiceImplSecPath})
})()

