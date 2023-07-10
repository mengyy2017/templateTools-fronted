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


export const PDM_STAR_DEVIATE = (() => {
    let defaultQueryTable = "DEVIATE", EntitySecPath = "entity", MapperDaoSecPath = "mapper", ControllerSecPath = "deviate", ServiceImplSecPath = "deviate/service"
        , joinType = 0, mtName = "none", rtName = "none", rtEntitySecPath = "none", rtMapperDaoSecPath = "none", rtServiceImplSecPath = "none"
        , BaseEntitySecPath = "entity", PageInfoEntitySecPath = BaseEntitySecPath, IServiceSecPath = "service", CommonControllerSecPath = "web/common"
        , MapperXmlFirstPath = MapperDaoSecPath + "/mapper", MapperParamXmlFirstPath = MapperXmlFirstPath + "/param"
    ;

    return Object.assign ({}, PDM_STAR(), {defaultQueryTable, BaseEntitySecPath, PageInfoEntitySecPath, IServiceSecPath, CommonControllerSecPath, EntitySecPath, MapperDaoSecPath
        , ControllerSecPath, ServiceImplSecPath, MapperXmlFirstPath, MapperParamXmlFirstPath, joinType, mtName, rtName, rtEntitySecPath
        , rtMapperDaoSecPath, rtServiceImplSecPath})
})()

export const PDM_STAR_DEVIATEDOC = (() => {
    let defaultQueryTable = "DEVIATEDOC", EntitySecPath = "entity", MapperDaoSecPath = "mapper", ControllerSecPath = "deviateDoc", ServiceImplSecPath = "deviateDoc/service"
        , joinType = 0, mtName = "none", rtName = "none", rtEntitySecPath = "none", rtMapperDaoSecPath = "none", rtServiceImplSecPath = "none"
        , BaseEntitySecPath = "entity", PageInfoEntitySecPath = BaseEntitySecPath, IServiceSecPath = "service", CommonControllerSecPath = "web/common"
        , MapperXmlFirstPath = MapperDaoSecPath + "/mapper", MapperParamXmlFirstPath = MapperXmlFirstPath + "/param"
    ;

    return Object.assign ({}, PDM_STAR(), {defaultQueryTable, BaseEntitySecPath, PageInfoEntitySecPath, IServiceSecPath, CommonControllerSecPath, EntitySecPath, MapperDaoSecPath
        , ControllerSecPath, ServiceImplSecPath, MapperXmlFirstPath, MapperParamXmlFirstPath, joinType, mtName, rtName, rtEntitySecPath
        , rtMapperDaoSecPath, rtServiceImplSecPath})
})()

//ppm_standalone PPM_STAR_USER 这个工程需要把Mapper的@Component注解改成@Mapper注解
export const PPM_STAR_USER = (() => {
    let defaultQueryTable = "USER", EntitySecPath = "user", MapperDaoSecPath = "dm/user", ControllerSecPath = "web/user", ServiceImplSecPath = "service/user/impl"
        , joinType = 4, mtName = "SYSTEMROLE_ASSIGN_USER", rtName = "SYSTEMROLE", rtEntitySecPath = "systemrole", rtMapperDaoSecPath = "dm/systemrole", rtServiceImplSecPath = "none"
        , BaseEntitySecPath = "base", PageInfoEntitySecPath = BaseEntitySecPath, IServiceSecPath = "service", CommonControllerSecPath = "web/common"
        , MapperXmlFirstPath = MapperDaoSecPath + "/mapper", MapperParamXmlFirstPath = MapperXmlFirstPath + "/param"
    ;

    return Object.assign ({}, PPM_STAR(), {defaultQueryTable, BaseEntitySecPath, PageInfoEntitySecPath, IServiceSecPath, CommonControllerSecPath, EntitySecPath, MapperDaoSecPath
        , ControllerSecPath, ServiceImplSecPath, MapperXmlFirstPath, MapperParamXmlFirstPath, joinType, mtName, rtName, rtEntitySecPath
        , rtMapperDaoSecPath, rtServiceImplSecPath})
})()

//ppm_standalone PPM_STAR_SYSTEMROLE 这个工程需要把Mapper的@Component注解改成@Mapper注解
export const PPM_STAR_SYSTEMROLE = (() => {
    let defaultQueryTable = "SYSTEMROLE", EntitySecPath = "systemrole", MapperDaoSecPath = "dm/systemrole", ControllerSecPath = "web/systemrole", ServiceImplSecPath = "service/systemrole/impl"
        , joinType = 0, mtName = "none", rtName = "none", rtEntitySecPath = "none", rtMapperDaoSecPath = "none", rtServiceImplSecPath = "none"
        , BaseEntitySecPath = "base", PageInfoEntitySecPath = BaseEntitySecPath, IServiceSecPath = "service", CommonControllerSecPath = "web/common"
        , MapperXmlFirstPath = MapperDaoSecPath + "/mapper", MapperParamXmlFirstPath = MapperXmlFirstPath + "/param"
    ;

    return Object.assign ({}, PPM_STAR(), {defaultQueryTable, BaseEntitySecPath, PageInfoEntitySecPath, IServiceSecPath, CommonControllerSecPath, EntitySecPath, MapperDaoSecPath
        , ControllerSecPath, ServiceImplSecPath, MapperXmlFirstPath, MapperParamXmlFirstPath, joinType, mtName, rtName, rtEntitySecPath
        , rtMapperDaoSecPath, rtServiceImplSecPath})
})()

export const PPM_STAR_COMPANY = (() => {
    let defaultQueryTable = "COMPANY", EntitySecPath = "company", MapperDaoSecPath = "dm/company", ControllerSecPath = "web/company", ServiceImplSecPath = "service/company/impl"
        , joinType = 1, mtName = "COMPANY_BELONG_TO_TENANT", rtName = "TENANT", rtEntitySecPath = "tenant", rtMapperDaoSecPath = "dm/tenant", rtServiceImplSecPath = "none"
        , BaseEntitySecPath = "base", PageInfoEntitySecPath = BaseEntitySecPath, IServiceSecPath = "service", CommonControllerSecPath = "web/common"
        , MapperXmlFirstPath = MapperDaoSecPath + "/mapper", MapperParamXmlFirstPath = MapperXmlFirstPath + "/param"
    ;

    return Object.assign({}, PPM_STAR(),{defaultQueryTable, BaseEntitySecPath, PageInfoEntitySecPath, IServiceSecPath, CommonControllerSecPath, EntitySecPath, MapperDaoSecPath
        , ControllerSecPath, ServiceImplSecPath, MapperXmlFirstPath, MapperParamXmlFirstPath, joinType, mtName, rtName, rtEntitySecPath
        , rtMapperDaoSecPath, rtServiceImplSecPath})
})()

export const PPM_STAR_TENANT = (() => {
    let defaultQueryTable = "TENANT", EntitySecPath = "tenant", MapperDaoSecPath = "dm/tenant", ControllerSecPath = "web/tenant", ServiceImplSecPath = "service/tenant/impl"
        , joinType = 5, mtName = "mtName", rtName = "rtName", rtEntitySecPath = "rtEntitySecPath", rtMapperDaoSecPath = "rtMapperDaoSecPath", rtServiceImplSecPath = "none"
        , BaseEntitySecPath = "base", PageInfoEntitySecPath = BaseEntitySecPath, IServiceSecPath = "service", CommonControllerSecPath = "web/common"
        , MapperXmlFirstPath = MapperDaoSecPath + "/mapper", MapperParamXmlFirstPath = MapperXmlFirstPath + "/param"
    ;

    return Object.assign({}, PPM_STAR(),{defaultQueryTable, BaseEntitySecPath, PageInfoEntitySecPath, IServiceSecPath, CommonControllerSecPath, EntitySecPath, MapperDaoSecPath
        , ControllerSecPath, ServiceImplSecPath, MapperXmlFirstPath, MapperParamXmlFirstPath, joinType, mtName, rtName, rtEntitySecPath
        , rtMapperDaoSecPath, rtServiceImplSecPath})
})()

// export const PPM_STAR_PROJECT_DYNAMIC = (() => {
//     let defaultQueryTable = "PROJECTITEMDYNAMICATTRVALUES", BaseEntitySecPath = "base", PageInfoEntitySecPath = BaseEntitySecPath, IServiceSecPath = "service", CommonControllerSecPath = "web/common"
//         , EntitySecPath = "project", MapperDaoSecPath = "dm/project", ControllerSecPath = "web/project", ServiceImplSecPath = "service/project/impl", rtServiceImplSecPath = "none"
//         , joinType = 0, mtName = "none", MapperXmlFirstPath = MapperDaoSecPath + "/mapper", MapperParamXmlFirstPath = MapperXmlFirstPath + "/param"
//         , rtName = "none", rtEntitySecPath = "none", rtMapperDaoSecPath = "none";
//
//     return Object.assign({}, PPM_STAR(),{defaultQueryTable, BaseEntitySecPath, PageInfoEntitySecPath, IServiceSecPath, CommonControllerSecPath, EntitySecPath, MapperDaoSecPath
//         , ControllerSecPath, ServiceImplSecPath, MapperXmlFirstPath, MapperParamXmlFirstPath, joinType, mtName, rtName, rtEntitySecPath
//         , rtMapperDaoSecPath, rtServiceImplSecPath})
// })()

// export const IAM_STAR_DEPARTMENT_POSITION = (() => {
//     let defaultQueryTable = "DEPARTMENT", EntitySecPath = "entity/department", MapperDaoSecPath = "dm/department", ControllerSecPath = "web/department", ServiceImplSecPath = "service/department/impl"
//         , joinType = 4, mtName = "POSITION_BELONG_TO_DEPARTMENT", mtEntitySecPath = "entity/middle", mtMapperDaoSecPath = "dm/middle", mtServiceImplSecPath = "service/middle/impl"
//         , rtName = "POSITION", rtEntitySecPath = "entity/position", rtMapperDaoSecPath = "dm/position", rtServiceImplSecPath = "service/position/impl"
//         , BaseEntitySecPath = "entity/base", PageInfoEntitySecPath = BaseEntitySecPath, IServiceSecPath = "service", CommonControllerSecPath = "web/common"
//         , MapperXmlFirstPath = MapperDaoSecPath + "/mapper", MapperParamXmlFirstPath = MapperXmlFirstPath + "/param"
//         ;
//
//     return Object.assign({}, IAM_STAR(),{defaultQueryTable, BaseEntitySecPath, PageInfoEntitySecPath, IServiceSecPath, CommonControllerSecPath, EntitySecPath, MapperDaoSecPath
//         , ControllerSecPath, ServiceImplSecPath, MapperXmlFirstPath, MapperParamXmlFirstPath, joinType, mtName, mtEntitySecPath, mtMapperDaoSecPath, mtServiceImplSecPath
//         , rtName, rtEntitySecPath, rtMapperDaoSecPath, rtServiceImplSecPath})
// })()
//
// export const IAM_STAR_POSITION_PERSONNEL = (() => {
//     let defaultQueryTable = "POSITION", EntitySecPath = "entity/position", MapperDaoSecPath = "dm/position", ControllerSecPath = "web/position", ServiceImplSecPath = "service/position/impl"
//         , joinType = 2, mtName = "PERSONNEL_BELONG_TO_POSITION", mtEntitySecPath = "entity/middle", mtMapperDaoSecPath = "dm/middle", mtServiceImplSecPath = "service/middle/impl"
//         , rtName = "PERSONNEL", rtEntitySecPath = "entity/personnel", rtMapperDaoSecPath = "dm/personnel", rtServiceImplSecPath = "service/personnel/impl"
//         , BaseEntitySecPath = "entity/base", PageInfoEntitySecPath = BaseEntitySecPath, IServiceSecPath = "service", CommonControllerSecPath = "web/common"
//         , MapperXmlFirstPath = MapperDaoSecPath + "/mapper", MapperParamXmlFirstPath = MapperXmlFirstPath + "/param"
//         ;
//
//     return Object.assign({}, IAM_STAR(),{defaultQueryTable, BaseEntitySecPath, PageInfoEntitySecPath, IServiceSecPath, CommonControllerSecPath, EntitySecPath, MapperDaoSecPath
//         , ControllerSecPath, ServiceImplSecPath, MapperXmlFirstPath, MapperParamXmlFirstPath, joinType, mtName, mtEntitySecPath, mtMapperDaoSecPath, mtServiceImplSecPath
//         , rtName, rtEntitySecPath, rtMapperDaoSecPath, rtServiceImplSecPath})
// })()

// export const IAM_STAR_USER = (() => {
//     let defaultQueryTable = "USER", EntitySecPath = "entity/user", MapperDaoSecPath = "dm/user", ControllerSecPath = "web/user", ServiceImplSecPath = "service/user/impl"
//         , joinType = 3, mtName = "DEPARTMENT_BELONG_TO_DEPARTMENT", mtEntitySecPath = "entity/middle", mtMapperDaoSecPath = "dm/middle", mtServiceImplSecPath = "service/middle/impl"
//         , rtName = "none", rtEntitySecPath = "none", rtMapperDaoSecPath = "none", rtServiceImplSecPath = "none"
//         , BaseEntitySecPath = "entity/base", PageInfoEntitySecPath = BaseEntitySecPath, IServiceSecPath = "service", CommonControllerSecPath = "web/common"
//         , MapperXmlFirstPath = MapperDaoSecPath + "/mapper", MapperParamXmlFirstPath = MapperXmlFirstPath + "/param"
//     ;
//
//     return Object.assign ({}, IAM_STAR(), {defaultQueryTable, BaseEntitySecPath, PageInfoEntitySecPath, IServiceSecPath, CommonControllerSecPath, EntitySecPath, MapperDaoSecPath
//         , ControllerSecPath, ServiceImplSecPath, MapperXmlFirstPath, MapperParamXmlFirstPath, joinType, mtName, mtEntitySecPath, mtMapperDaoSecPath, mtServiceImplSecPath
//         , rtName, rtEntitySecPath, rtMapperDaoSecPath, rtServiceImplSecPath})
// })()

// export const IAM_STAR_USER = (() => {
//     let defaultQueryTable = "USER", EntitySecPath = "entity", MapperDaoSecPath = "repo/sync/mapper", ControllerSecPath = "web", ServiceImplSecPath = "service/impl"
//         , joinType = 1, mtName = "USER_LINK_TO_PERSONNEL", mtEntitySecPath = "entity", mtMapperDaoSecPath = "repo/sync/mapper", mtServiceImplSecPath = "service/impl"
//         , rtName = "PERSONNEL", rtEntitySecPath = "entity", rtMapperDaoSecPath = "repo/sync/mapper", rtServiceImplSecPath = "service/impl"
//         , BaseEntitySecPath = "base/entity", PageInfoEntitySecPath = BaseEntitySecPath, IServiceSecPath = "service", CommonControllerSecPath = "web/common"
//         , MapperXmlFirstPath = MapperDaoSecPath, MapperParamXmlFirstPath = MapperXmlFirstPath + "/param"
//     ;
//
//     return Object.assign ({}, IAM_STAR(), {defaultQueryTable, BaseEntitySecPath, PageInfoEntitySecPath, IServiceSecPath, CommonControllerSecPath, EntitySecPath, MapperDaoSecPath
//         , ControllerSecPath, ServiceImplSecPath, MapperXmlFirstPath, MapperParamXmlFirstPath, joinType, mtName, mtEntitySecPath, mtMapperDaoSecPath, mtServiceImplSecPath
//         , rtName, rtEntitySecPath, rtMapperDaoSecPath, rtServiceImplSecPath})
// })()
//
// export const IAM_STAR_PERSONNEL = (() => {
//     let defaultQueryTable = "PERSONNEL", EntitySecPath = "entity", MapperDaoSecPath = "repo/sync/mapper", ControllerSecPath = "web", ServiceImplSecPath = "service/impl"
//         , joinType = 0, mtName = "none", mtEntitySecPath = "none", mtMapperDaoSecPath = "none", mtServiceImplSecPath = "none"
//         , rtName = "none", rtEntitySecPath = "none", rtMapperDaoSecPath = "none", rtServiceImplSecPath = "none"
//         , BaseEntitySecPath = "base/entity", PageInfoEntitySecPath = BaseEntitySecPath, IServiceSecPath = "service", CommonControllerSecPath = "web/common"
//         , MapperXmlFirstPath = MapperDaoSecPath, MapperParamXmlFirstPath = MapperXmlFirstPath + "/param"
//     ;
//
//     return Object.assign ({}, IAM_STAR(), {defaultQueryTable, BaseEntitySecPath, PageInfoEntitySecPath, IServiceSecPath, CommonControllerSecPath, EntitySecPath, MapperDaoSecPath
//         , ControllerSecPath, ServiceImplSecPath, MapperXmlFirstPath, MapperParamXmlFirstPath, joinType, mtName, mtEntitySecPath, mtMapperDaoSecPath, mtServiceImplSecPath
//         , rtName, rtEntitySecPath, rtMapperDaoSecPath, rtServiceImplSecPath})
// })()
//
// export const IAM_STAR_POSITIONDEF = (() => {
//     let defaultQueryTable = "POSITIONDEF", EntitySecPath = "entity/positiondef", MapperDaoSecPath = "dm/positiondef", ControllerSecPath = "web/positiondef", ServiceImplSecPath = "service/positiondef/impl"
//         , joinType = 0, mtName = "none", mtEntitySecPath = "none", mtMapperDaoSecPath = "none", mtServiceImplSecPath = "none"
//         , rtName = "none", rtEntitySecPath = "none", rtMapperDaoSecPath = "none", rtServiceImplSecPath = "none"
//         , BaseEntitySecPath = "entity/base", PageInfoEntitySecPath = BaseEntitySecPath, IServiceSecPath = "service", CommonControllerSecPath = "web/common"
//         , MapperXmlFirstPath = MapperDaoSecPath + "/mapper", MapperParamXmlFirstPath = MapperXmlFirstPath + "/param"
//     ;
//
//     return Object.assign ({}, IAM_STAR(), {defaultQueryTable, BaseEntitySecPath, PageInfoEntitySecPath, IServiceSecPath, CommonControllerSecPath, EntitySecPath, MapperDaoSecPath
//         , ControllerSecPath, ServiceImplSecPath, MapperXmlFirstPath, MapperParamXmlFirstPath, joinType, mtName, mtEntitySecPath, mtMapperDaoSecPath, mtServiceImplSecPath
//         , rtName, rtEntitySecPath, rtMapperDaoSecPath, rtServiceImplSecPath})
// })()

export const IAM_STAR_POSITION_BELONG_DEPARTMENT = (() => {
    let defaultQueryTable = "POSITION_BELONG_TO_DEPARTMENT", EntitySecPath = "entity", MapperDaoSecPath = "repo/sync", ControllerSecPath = "web/sync", ServiceImplSecPath = "service/impl"
        , joinType = 0, mtName = "none", mtEntitySecPath = "none", mtMapperDaoSecPath = "none", mtServiceImplSecPath = "none"
        , rtName = "none", rtEntitySecPath = "none", rtMapperDaoSecPath = "none", rtServiceImplSecPath = "none"
        , BaseEntitySecPath = "entity", PageInfoEntitySecPath = BaseEntitySecPath, IServiceSecPath = "service", CommonControllerSecPath = "web/common"
        , MapperXmlFirstPath = MapperDaoSecPath + "/mapper", MapperParamXmlFirstPath = MapperXmlFirstPath + "/param"
    ;

    return Object.assign ({}, IAM_STAR(), {defaultQueryTable, BaseEntitySecPath, PageInfoEntitySecPath, IServiceSecPath, CommonControllerSecPath, EntitySecPath, MapperDaoSecPath
        , ControllerSecPath, ServiceImplSecPath, MapperXmlFirstPath, MapperParamXmlFirstPath, joinType, mtName, mtEntitySecPath, mtMapperDaoSecPath, mtServiceImplSecPath
        , rtName, rtEntitySecPath, rtMapperDaoSecPath, rtServiceImplSecPath})
})()