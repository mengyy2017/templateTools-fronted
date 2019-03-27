import {message} from "antd"
import axios from 'axios'

const defaulData = {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    withCredentials: true,
    succCallback: () => {},  // 自定义成功回调，可以不覆盖
    failCallback: () => {}   // 自定义失败回调，可以不覆盖
}

const defaultSuccCallBack = response => {
    return new Promise((resolve, reject) => {
        let {data: {code}} = response
        code == "200" ? resolve(response) : reject(response)
    })
}

const defaultFailCallback = (responseObj) => {
    let{response} = responseObj
    if (response) {
        if (response.status == "401" && response.data.code == "401" && response.data.msg == "未认证")
            window.location.href = "http://127.0.0.1:8090/#/login"
        message.error(response.statusText)
    } else {
        let {data: {code, msg}} = responseObj
        message.error(code + " " + msg)
    }
    return new Promise((resolve, reject) => reject())
}

const ajax = {

    post: (pars) => {
        if (pars.headers == undefined) pars.data = JSON.stringify(pars.data)

        pars = Object.assign({}, defaulData, pars)

        axios(pars).then(defaultSuccCallBack)
            .then(pars.succCallback).catch(defaultFailCallback).catch(pars.failCallback)
        
    },

}

export default ajax

// ---------返回自定义错误
// {
//     xxx: "xxx",
//     response: {data: {msg: "未认证", code: "401"}},
//     status: 自定义
//     yyy: "yyy"
// }


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







