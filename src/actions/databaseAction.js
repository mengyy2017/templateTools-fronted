import axios from 'axios'


export const GET_TABLES = 'GET_TABLES'
export const GET_TABLES_ERR = 'GET_TABLES_ERR'
export const getTablesSuccess = data => ({type: GET_TABLES, data})
export const getTablesFail = err => ({type: GET_TABLES_ERR, err})

export const getTablesAction = data => dispatch => {
    axios.get('http://127.0.0.1:8099/database/getAllTables?id=' + data)
        .then(response => dispatch(getTablesSuccess(response.data)),
            err => dispatch(getTablesFail(err))
        )
}


export const GET_COLUMNS = 'GET_COLUMNS'
export const GET_COLUMNS_ERR = 'GET_COLUMNS_ERR'
export const getColumnsSuccess = data => ({type: GET_COLUMNS, data})
export const getColumnsFail = err => ({type: GET_COLUMNS_ERR, err})

export const getColumnsAction = data => dispatch => {
    axios.get('http://127.0.0.1:8099/database/getAllColumns', {params: {'tableName': data}})
        .then(response => dispatch(getColumnsSuccess(response.data)),
            err => dispatch(getColumnsFail(err))
        )
}

export const createCodeAction = data => dispatch => {

    axios({
        method: 'POST',
        url: 'http://127.0.0.1:8099/database/createCode',
        headers: { 'content-type': 'application/json'},
        data: JSON.stringify(data),
    }).then(response => console.log(response))
}
    
    