import axios from 'axios'
import {message} from "antd";
import {getTablesSuccess} from "actions/databaseAction";
import React from "react";

export const setCodeInfoAction = pars => async dispatch => {
        await axios({
            method: 'POST',
            url: 'http://127.0.0.1:8099/database/setCreateInfo',
            headers: { 'content-type': 'application/json'},
            data: JSON.stringify(pars),
            withCredentials: true
        }).then(({data}) => dispatch(getTablesSuccess(data.respData)))
            .catch(({response, response: {data}}) => {
                if (response.status == "401" && data.code == "401" && data.msg == "未认证") {
                    message.error(data.msg)
                    window.location.href = "http://127.0.0.1:8090/#/login"
                }
            })
    // {
    //     xxx: "xxx",
    //     response: {data: {msg: "未认证", code: "401"}},
    //     yyy: "yyy"
    // }
}
