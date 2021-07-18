import ajax from "utils/ajaxUtil";
import {message} from "antd";


export const SET_ATUOCOMPLTION_SOURCE = "SET_ATUOCOMPLTION_SOURCE"


export const setAutoCompletionSource = AutoCompletionSource => ({type: SET_ATUOCOMPLTION_SOURCE, AutoCompletionSource})


export const setAutoCompletionSourceAction = value => dispatch => {
    ajax.post({
        headers: {
            'content-type': 'application/x-www-form-urlencoded'
            // 'content-type': 'text/plain'
        },
        url: SPIDER_SERVER_URL + '/es/matchPhrase',
        data: value,
        succCallback: ({resp}) => dispatch(setAutoCompletionSource(resp.data)),
        failCallback: ({response, response: {resp}}) => {
            message.error(resp.msg)
        }
    })
}

export const EXE_SEARCH = "EXE_SEARCH"


export const exeSearch = line => ({type: EXE_SEARCH, line})


export const exeSearchAction = value => dispatch => {
    ajax.post({
        headers: {
            'content-type': 'application/x-www-form-urlencoded'
            // 'content-type': 'text/plain'
        },
        url: SPIDER_SERVER_URL + '/py/exeSearch',
        data: value,
        succCallback: ({resp}) => dispatch(exeSearch(resp.data)),
        failCallback: ({response, response: {resp}}) => {
            message.error(resp.msg)
        }
    })
}

export const RECIEVE_CONTENT = "RECIEVE_CONTENT"

export const recieveContent = recieveContent => ({type: RECIEVE_CONTENT, recieveContent})

export const recieveContentAction = content => dispatch => {
    dispatch(recieveContent(content))
}