import axios from 'axios'
import {getTablesSuccess} from "actions/databaseAction";

export const SET_CREATE_INFO_TOKEN = "SET_CODE_INFO_TOKEN"

export const setCreateInfoToken = data => ({type: SET_CREATE_INFO_TOKEN, data})

export const setCodeInfoAction = data => async dispatch => {
    let response = await axios({
        method: 'POST',
        url: 'http://127.0.0.1:8099/database/setCreateInfo',
        headers: { 'content-type': 'application/json'},
        data: JSON.stringify(data),
    })
    // console.log(response)
    dispatch(getTablesSuccess(response.data))

    const {createInfoToken} = response.data

    debugger
    if(createInfoToken)
        dispatch(setCreateInfoToken(createInfoToken))
}
