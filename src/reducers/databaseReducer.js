import {GET_TABLES, GET_COLUMNS, SET_COLUMN_KEYS_SELECTED } from 'actions/databaseAction'

export const tables = (prevState = {}, action) => {
    switch (action.type) {
        case GET_TABLES:
            return Object.assign({}, prevState, {tablesArr: action.data})
        default:
            return prevState
    }
}

export const columns = (prevState = {}, action) => {
    switch (action.type) {
        case GET_COLUMNS:
            return Object.assign({}, prevState, {columnArr: action.data})
        case SET_COLUMN_KEYS_SELECTED:
            return Object.assign({}, prevState, {columnSelectedRowKeys: action.selectedKeys})
        default:
            return prevState
    }
}

















