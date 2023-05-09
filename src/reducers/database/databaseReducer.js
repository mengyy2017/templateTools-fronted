import {GET_TABLES, GET_COLUMNS, SET_SELECTED_COL_KEYS, SET_SELECTED_TABLE_KEYS} from 'actions/database/databaseAction'

export const tables = (prevState = {}, action) => {
    switch (action.type) {
        case GET_TABLES:
            return Object.assign({}, prevState, {tablesArr: action.data})
        case SET_SELECTED_TABLE_KEYS:
            return Object.assign({}, prevState, {selectedTableKeys: action.selectedTableKeys})
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

// export const selectTables = (prevState = {}, action) => {
//     switch (action.type) {
//         case SET_SELECTED_TABLE_KEYS:
//             return Object.assign({}, prevState, {selectedTableKeys: action.selectedTableKeys})
//         default:
//             return prevState
//     }
// }















