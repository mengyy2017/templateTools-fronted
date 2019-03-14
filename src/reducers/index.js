﻿//所有reducer请在这里注册
import {combineReducers} from 'redux';
import {routeReducer} from 'redux-simple-router';
import {tables, columns} from 'reducers/databaseReducer'
import {processTabs} from "reducers/processTabsReducer";
import {redirect} from "reducers/loginFormReducer";

export default combineReducers({
    routing: routeReducer,
    tables,
    columns,
    activeKey: processTabs,
    redirectUrl: redirect
});