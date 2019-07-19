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
        succCallback: ({data}) => dispatch(setAutoCompletionSource(data.respData)),
        failCallback: ({response, response: {data}}) => {
            message.error(data.msg)
        }
    })
}

export const EXE_PY = "EXE_PY"


export const exePy = line => ({type: EXE_PY, line})


export const exePyAction = value => dispatch => {
    ajax.post({
        headers: {
            'content-type': 'application/x-www-form-urlencoded'
            // 'content-type': 'text/plain'
        },
        url: SPIDER_SERVER_URL + '/py/exePy',
        data: value,
        succCallback: ({data}) => dispatch(exePy(data.respData)),
        failCallback: ({response, response: {data}}) => {
            message.error(data.msg)
        }
    })
}