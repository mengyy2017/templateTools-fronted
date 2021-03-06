import ajax from "utils/ajaxUtil";
import Cookies from 'js-cookie'

export const SET_REDIRECT_URL = "SET_REDIRECT_URL"

export const loginAction = pars => async dispatch => {
    let param = new URLSearchParams()
    param.append("username", pars.username)
    param.append("password", pars.password)

    Cookies.remove("access_token")

    ajax.post({
        // headers: {'content-type':'application/x-www-form-urlencoded'},
        url: SYSTEM_SERVER_URL + '/account/login',
        // url: 'http://127.0.0.1:8032/SYSTEM-SERVER' + '/account/login',
        data: pars,
        succCallback: ({resp}) => {
            if (resp.msg == "success") {
                Cookies.set("access_token", resp.data);
                window.location.href = WEB_URL + "/select"
            }
        },
    })
}
