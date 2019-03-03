import axios from 'axios'
import {setActiveKey} from "actions/processTabsAction";
import {message} from "antd";
export const GET_TABLES = 'GET_TABLES'
export const GET_TABLES_ERR = 'GET_TABLES_ERR'
export const getTablesSuccess = data => ({type: GET_TABLES, data})
export const getTablesFail = err => ({type: GET_TABLES_ERR, err})

export const getTablesAction = data => async dispatch => {
    // axios.get('http://127.0.0.1:8099/database/getAllTables?id=' + data)
    //     .then(response => dispatch(getTablesSuccess(response.data)),
    //         err => dispatch(getTablesFail(err))
    //     )

    // try {
    //     let response = await axios.get('http://127.0.0.1:8099/database/getAllTables')
        let response = await axios({
            method: 'get',
            url: 'http://127.0.0.1:8099/database/getAllTables',
            withCredentials: true
        }) // 使用await报错的时候  这里可以用.catch(){}  或者直接把代码块用try catch包围
        dispatch(getTablesSuccess(response.data))
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

export const getColumnsAction = data => dispatch => {
    // axios.get('http://127.0.0.1:8099/database/getAllColumns', {params: {'tableName': data}})
    //     .then(response => dispatch(getColumnsSuccess(response.data)),
    //         err => dispatch(getColumnsFail(err))
    //     )
    try {
        axios({
            method: 'get',
            url: 'http://127.0.0.1:8099/database/getAllColumns',
            params: data,
            withCredentials: true
        }).then(response => {
                if (response.data) {
                    dispatch(getColumnsSuccess(response.data))
                } else {
                    message.error("连接超时！")
                    dispatch(setActiveKey("0"))
                }
            },
            err => {
                message.error(err.response.data.message)
                dispatch(setActiveKey("0"))
            })
    } catch(err) {
            alert(1)
    }

}
export const setSelectedColKeys = selectedKeys => dispatch => dispatch(setSelectedCol(selectedKeys))



export const createCodeAction = data => dispatch => {
    axios({
        method: 'POST',
        url: 'http://127.0.0.1:8099/database/createCode',
        headers: { 'content-type': 'application/json'},
        data: JSON.stringify(data),
        withCredentials: true
    }).then(response => console.log(response))
}
    
    