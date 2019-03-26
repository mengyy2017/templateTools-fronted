import {message} from "antd"
import axios from 'axios'

const defaulData = {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    withCredentials: true,
    succCallback: ({data}) => console.log(data),
    failCallback: ({response, response: {data}}) => {
        if (response.status == "401" && data.code == "401" && data.msg == "未认证")
            window.location.href = "http://127.0.0.1:8090/#/login"
        else
            console.log(JSON.stringify(response))
        message.error(data.msg)
    },
}

// {
//     xxx: "xxx",
//     response: {data: {msg: "未认证", code: "401"}},
//     yyy: "yyy"
// }

const ajax = {

    post: (pars) => {
        if (pars.headers == undefined) pars.data = JSON.stringify(pars.data)

        pars = Object.assign({}, defaulData, pars)

        axios(pars).then(pars.succCallback).catch(pars.failCallback)
    },

}

export default ajax









