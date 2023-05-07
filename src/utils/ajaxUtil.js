import {message} from "antd"
import axios from 'axios'
import Cookies from 'js-cookie'

const defaulData = {
    method: 'POST',
    headers: {
        'content-type': 'application/json',
    },
    withCredentials: true,
    succCallback: () => {},  // 自定义成功回调，可以不覆盖
    failCallback: () => {}   // 自定义失败回调，可以不覆盖
}

const defaultSuccCallBack = response => {
    return new Promise((resolve, reject) => {
        let {data: {code}} = response
        response.resp = response.data
        code == "200" ? resolve(response) : reject(response)
    })
}

const defaultFailCallback = (responseObj) => {
    let{resp} = responseObj
    if (resp) {
        // if (response.status == "401" && response.data.code == "401" && response.data.msg == "未认证")
        resp.code && resp.code != 200 ? message.error(resp.msg) : undefined
        resp.statusText && resp.statusText != "" ? message.error(resp.statusText) : undefined
        resp.data && resp.data.msg && resp.data.msg != "" ? message.error(resp.data.msg) : undefined
        resp.data && resp.data.error && resp.data.error != "" ? message.error(resp.data.error) : undefined
        // response.data.message && response.data.message != "" ? message.error(response.data.message) : undefined
    } else {
        responseObj.data ? {data: {code, msg}} = responseObj : undefined
        responseObj.data ? message.error(code + " " + msg) : undefined
        responseObj.message ? message.error(responseObj.message) : undefined
    }
    return new Promise((resolve, reject) => reject(responseObj))
}

const ajax = {

    post: (pars) => {

        pars = Object.assign({}, defaulData, pars)

        pars.headers['content-type'] == 'application/json' ? pars.data = JSON.stringify(pars.data) : undefined

        Cookies.get("access_token") ? pars.headers['Authorization'] = 'Bearer ' + Cookies.get("access_token") : pars.headers['Authorization'] = ''

        axios(pars).then(defaultSuccCallBack)
            .then(pars.succCallback).catch(defaultFailCallback).catch(pars.failCallback)
        
    },

}

export default ajax

// ---------返回自定义错误

// columnNumber: 15
// config: {…}
// fileName: "http://0.0.0.0.:8020/src/index.js line 3297 > eval"
// lineNumber: 16
// message: "Request failed with status code 401"
// request: XMLHttpRequest
// response: {…}
//     config: {…}
//     data: {…}
//         code: 401
//         msg: "没有权限访问！"
//     headers: {…}
//     request: XMLHttpRequest
//     status: 401 // -- 自定义
//     statusText: ""
// stack: "createError@webpack:///./node_modules/axios/lib/core/createError.js?:16:15\nsettle@webpack:///./node_modules/axios/lib/core/settle.js?:18:12\nhandleLoad@webpack:///./node_modules/axios/lib/adapters/xhr.js?:77:7\n"





// ------- 500错误 但是status是200
// config: {adapter: ƒ, transformRequest: {…}, transformResponse: {…}, timeout: 0, xsrfCookieName: "XSRF-TOKEN", …}
// data:
//     code: 500
//     msg: "### Error querying database.  Cause: com.mysql.jdbc.exceptions.jdbc4.MySQLSyntaxErrorException: Unknown table 'sys_menu'"
// __proto__: Object
// headers: {pragma: "no-cache", content-type: "application/json;charset=UTF-8", cache-control: "no-cache, no-store, max-age=0, must-revalidate", expires: "0"}
// request: XMLHttpRequest {onreadystatechange: ƒ, readyState: 4, timeout: 0, withCredentials: true, upload: XMLHttpRequestUpload, …}
// status: 200
// statusText: ""
// __proto__: Object







