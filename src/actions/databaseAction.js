import {setActiveKey} from "actions/processTabsAction";
import {message} from "antd";
import ajax from "utils/ajaxUtil";
export const GET_TABLES = 'GET_TABLES'
export const GET_TABLES_ERR = 'GET_TABLES_ERR'
export const getTablesSuccess = data => ({type: GET_TABLES, data})
export const getTablesFail = err => ({type: GET_TABLES_ERR, err})

export const getTablesAction = pars => async dispatch => {
        ajax.post({
            url: 'http://127.0.0.1:8099/database/getAllTables',
            succCallback: ({data}) => dispatch(getTablesSuccess(data.respData))
        })
}



export const GET_COLUMNS = 'GET_COLUMNS'
export const GET_COLUMNS_ERR = 'GET_COLUMNS_ERR'
export const SET_SELECTED_COL_KEYS = 'SET_SELECTED_COL_KEYS'

export const getColumnsSuccess = data => ({type: GET_COLUMNS, data})
export const getColumnsFail = err => ({type: GET_COLUMNS_ERR, err})
export const setSelectedCol = selectedKeys => ({type: SET_SELECTED_COL_KEYS, selectedKeys})

export const getColumnsAction = pars => dispatch => {
        ajax.post({
            url: 'http://127.0.0.1:8099/database/getAllColumns',
            data: pars,
            succCallback: ({data}) => dispatch(getColumnsSuccess(data.respData)),
            failCallback: ({response, response: {data}}) => {
                message.error(data.msg)
                dispatch(setActiveKey("0"))
            }
        })
}
export const setSelectedColKeys = selectedKeys => dispatch => dispatch(setSelectedCol(selectedKeys))



export const createCodeAction = pars => async dispatch => {
    ajax.post({
        url: 'http://127.0.0.1:8099/database/createCode',
        data: pars,
        succCallback: () => message.success("生成代码成功"),
        failCallback: ({response, response: {data}}) => message.error(data.msg)
    })
}
    
    