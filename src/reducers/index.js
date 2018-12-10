//所有reducer请在这里注册
import {combineReducers} from 'redux';
import {routeReducer} from 'redux-simple-router';
import {tables, columns} from 'reducers/databaseReducer'

export default combineReducers({
    routing: routeReducer,
    tables,
    columns
});