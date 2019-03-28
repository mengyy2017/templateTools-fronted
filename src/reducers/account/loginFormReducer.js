import {SET_REDIRECT_URL} from "../../actions/account/loginFormAction";


export const redirect = (preState = {}, action) => {
    switch (action.type) {
        case SET_REDIRECT_URL:
            return Object.assign({}, preState, {redirectUrl: action.redirectUrl})
        default:
            return preState
    }
}








