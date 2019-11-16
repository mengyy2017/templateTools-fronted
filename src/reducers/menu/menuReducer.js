import {CHANGE_MENU_OPER, GET_MENU, GET_MENU_UNIQ} from "actions/menu/menuAction";


export const menu = (preState = {menuArr: []}, action) => {
    switch (action.type) {
        case GET_MENU:
            return Object.assign({}, preState, {menuArr: action.data})
        case GET_MENU_UNIQ:
            return Object.assign({}, preState, {menuUniq: action.data})
        case CHANGE_MENU_OPER:
            return Object.assign({}, preState, {menuOperation: action.data})
        default:
            return preState
    }
}















