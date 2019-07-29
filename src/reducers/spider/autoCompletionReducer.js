import {SET_ATUOCOMPLTION_SOURCE, RECIEVE_CONTENT} from "actions/spider/autoCompletionAction";

export const autoCompletion = (prevState = {}, action) => {
    switch (action.type) {
        case SET_ATUOCOMPLTION_SOURCE:
            return Object.assign({}, prevState, {AutoCompletionSource: action.AutoCompletionSource})
        case RECIEVE_CONTENT:
            return Object.assign({}, prevState, {recieveContent: prevState.recieveContent ? (prevState.recieveContent.length < 600 ? prevState.recieveContent + '\n' + action.recieveContent : prevState.recieveContent.substring(300) + '\n' + action.recieveContent) : action.recieveContent })
        default:
            return prevState
    }
}
