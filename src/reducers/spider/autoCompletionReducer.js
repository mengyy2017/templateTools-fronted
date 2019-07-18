import {SET_ATUOCOMPLTION_SOURCE} from "actions/spider/autoCompletionAction";

export const autoCompletion = (prevState = {}, action) => {
    switch (action.type) {
        case SET_ATUOCOMPLTION_SOURCE:
            return Object.assign({}, prevState, {AutoCompletionSource: action.AutoCompletionSource})
        default:
            return prevState
    }
}
