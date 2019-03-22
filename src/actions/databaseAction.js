import axios from 'axios'
import {setActiveKey} from "actions/processTabsAction";
import {message} from "antd";
export const GET_TABLES = 'GET_TABLES'
export const GET_TABLES_ERR = 'GET_TABLES_ERR'
export const getTablesSuccess = data => ({type: GET_TABLES, data})
export const getTablesFail = err => ({type: GET_TABLES_ERR, err})

export const getTablesAction = pars => async dispatch => {
    // axios.get('http://127.0.0.1:8099/database/getAllTables?id=' + data)
    //     .then(response => dispatch(getTablesSuccess(response.data)),
    //         err => dispatch(getTablesFail(err))
    //     )

    // try {
    //     let response = await axios.get('http://127.0.0.1:8099/database/getAllTables')
        let {data} = await axios({
            method: 'get',
            url: 'http://127.0.0.1:8099/database/getAllTables',
            withCredentials: true
        }) // 使用await报错的时候  这里可以用.catch(){}  或者直接把代码块用try catch包围
        dispatch(getTablesSuccess(data.respData))
    // } catch (e) {
    //     getTablesFail(e)
    // }

}



export const GET_COLUMNS = 'GET_COLUMNS'
export const GET_COLUMNS_ERR = 'GET_COLUMNS_ERR'
export const SET_SELECTED_COL_KEYS = 'SET_SELECTED_COL_KEYS'

export const getColumnsSuccess = data => ({type: GET_COLUMNS, data})
export const getColumnsFail = err => ({type: GET_COLUMNS_ERR, err})
export const setSelectedCol = selectedKeys => ({type: SET_SELECTED_COL_KEYS, selectedKeys})

export const getColumnsAction = pars => dispatch => {
    // axios.get('http://127.0.0.1:8099/database/getAllColumns', {params: {'tableName': data}})
    //     .then(response => dispatch(getColumnsSuccess(response.data)),
    //         err => dispatch(getColumnsFail(err))
    //     )
    try {
        axios({
            method: 'post',
            url: 'http://127.0.0.1:8099/database/getAllColumns',
            headers: { 'content-type': 'application/json'},
            data: JSON.stringify(pars),
            withCredentials: true
        }).then(response => {
                if (response.data.respData) {
                    dispatch(getColumnsSuccess(response.data.respData))
                } else {
                    message.error("连接超时！")
                    dispatch(setActiveKey("0"))
                }
            },
            err => {
                message.error(err.response.data.msg)
                dispatch(setActiveKey("0"))
            })
    } catch(err) {
            alert(1)
    }

}
export const setSelectedColKeys = selectedKeys => dispatch => dispatch(setSelectedCol(selectedKeys))



export const createCodeAction = pars => async dispatch => {
    let {data} = await axios({
        method: 'POST',
        url: 'http://127.0.0.1:8099/database/createCode',
        headers: { 'content-type': 'application/json'},
        data: JSON.stringify(pars),
        withCredentials: true
    })
    if (data.msg == "success")
        message.success("生成代码成功")
    else
        message.error(data.msg)
}
    
    