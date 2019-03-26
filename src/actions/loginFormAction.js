import ajax from "utils/ajaxUtil";

export const SET_REDIRECT_URL = "SET_REDIRECT_URL"

export const loginAction = pars => async dispatch => {
    let param = new URLSearchParams()
    param.append("username", pars.username)
    param.append("password", pars.password)

    ajax.post({
        headers: {'content-type':'application/x-www-form-urlencoded'},
        url: 'http://127.0.0.1:8099/j_logi',
        data: param,
        succCallback: ({data}) => {if (data.msg == "success") window.location.href = "http://127.0.0.1:8090/#/select"},
    })
}
