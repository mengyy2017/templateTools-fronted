import {SET_ACTIVE_KEY} from "actions/database/TabHeaderAction";


export const tabHeader = (prevState = {activeKey: "0"}, action) => {
    switch (action.type) {
        case SET_ACTIVE_KEY:
            return Object.assign({}, prevState, {activeKey: action.key})
        default:
            return prevState
    }
}






