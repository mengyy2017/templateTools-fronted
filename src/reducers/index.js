//所有reducer请在这里注册
import {combineReducers} from 'redux';
import {routeReducer} from 'redux-simple-router';
import {tables, columns} from 'reducers/database/databaseReducer'
import {tabHeader} from "reducers/database/tabHeaderReducer";
import {menu} from "reducers/menuReducer";
import {autoCompletion} from "reducers/spider/autoCompletionReducer";

export default combineReducers({
    routing: routeReducer,
    tables,
    columns,
    activeKey: tabHeader,
    menu,
    autoCompletion
});