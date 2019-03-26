import axios from 'axios'
import {getTablesSuccess} from "actions/databaseAction";
import React from "react";

export const setCodeInfoAction = pars => async dispatch => {
    try {
        let {data} = await axios({
            method: 'POST',
            url: 'http://127.0.0.1:8099/database/setCreateInfo',
            headers: { 'content-type': 'application/json'},
            data: JSON.stringify(pars),
            withCredentials: true
        })
        dispatch(getTablesSuccess(data.respData))
    } catch (e) {
        debugger
        if (e.response.status == "401" && e.response.data.code == "401" && e.response.data.msg == "未认证") {
            window.location.href = "http://127.0.0.1:8090/#/login"
        }
    }
    

}
