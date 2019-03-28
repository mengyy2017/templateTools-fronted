import {GET_TABLES, GET_COLUMNS, SET_SELECTED_COL_KEYS} from 'actions/database/databaseAction'

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
            return Object.assign({}, prevState, {colArr: action.data})
        case SET_SELECTED_COL_KEYS:
            return Object.assign({}, prevState, {selectedColKeys: action.selectedKeys})
        default:
            return prevState
    }
}

















