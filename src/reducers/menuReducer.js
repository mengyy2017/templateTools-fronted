import {GET_MENU} from "actions/menuAction";


export const menu = (preState = {menuArr: []}, action) => {
    switch (action.type) {
        case GET_MENU:
            return Object.assign({}, preState, {menuArr: action.data})
        default:
            return preState
    }
}















