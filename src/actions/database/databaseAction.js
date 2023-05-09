import {setActiveKey} from "actions/database/tabHeaderAction";
import {message} from "antd";
import ajax from "utils/ajaxUtil";


export const GET_TABLES = 'GET_TABLES'
export const getTablesSuccess = data => ({type: GET_TABLES, data})
export const getTablesAction = pars => async dispatch => {
        ajax.post({
            url: TEMPLATE_SERVER_URL + '/database/getAllTables',
            data: pars,
            succCallback: ({resp}) => dispatch(getTablesSuccess(resp.data))
        })
}


export const GET_COLUMNS = 'GET_COLUMNS'
export const getColumnsSuccess = data => ({type: GET_COLUMNS, data})
export const getColumnsAction = pars => dispatch => {
        ajax.post({
            url: TEMPLATE_SERVER_URL + '/database/getAllColumns',
            data: pars,
            succCallback: ({resp}) => dispatch(getColumnsSuccess(resp.data)),
            failCallback: ({response, response: {resp}}) => {
                message.error(resp.msg)
                dispatch(setActiveKey("0"))
            }
        })
}

export const SET_SELECTED_COL_KEYS = 'SET_SELECTED_COL_KEYS'
export const setSelectedCol = selectedKeys => ({type: SET_SELECTED_COL_KEYS, selectedKeys})
export const setSelectedColKeys = selectedKeys => dispatch => dispatch(setSelectedCol(selectedKeys))

export const SET_SELECTED_TABLE_KEYS = 'SET_SELECTED_TABLE_KEYS'
export const setSelectedTable = selectedTableKeys => ({type: SET_SELECTED_TABLE_KEYS, selectedTableKeys})
export const setSelectedTableKeys = selectedTableKeys => dispatch => dispatch(setSelectedTable(selectedTableKeys))

export const createCodeAction = pars => async dispatch => {
    ajax.post({
        url: TEMPLATE_SERVER_URL + '/database/createCode',
        data: pars,
        succCallback: () => message.success("生成代码成功"),
    })
}



