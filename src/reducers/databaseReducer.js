import {GET_TABLES, GET_COLUMNS} from 'actions/databaseAction'

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
            return Object.assign({}, prevState, {columnsArr: action.data})
        default:
            return prevState
    }
}

















