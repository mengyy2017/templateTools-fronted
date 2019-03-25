import axios from 'axios'
import {getTablesSuccess} from "actions/databaseAction";
import {Redirect} from "react-router";
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
        if (e.response.status == "401") {
            console.log(111111111111111111 + JSON.stringify(e))
            return (<Redirect to="/login" />);
        }
    }
    

}
