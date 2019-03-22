import axios from 'axios'
import {getTablesSuccess} from "actions/databaseAction";

export const setCodeInfoAction = pars => async dispatch => {
    let {data} = await axios({
        method: 'POST',
        url: 'http://127.0.0.1:8099/database/setCreateInfo',
        headers: { 'content-type': 'application/json'},
        data: JSON.stringify(pars),
        withCredentials: true
    })
    console.log(data)
    dispatch(getTablesSuccess(data.respData))
}
