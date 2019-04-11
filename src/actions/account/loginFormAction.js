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
        url: TEMPLATE_SERVER_URL + '/account/login',
        data: pars,
        succCallback: ({data}) => {
            if (data.msg == "success") {
                Cookies.set("access_token", data.respData);
                window.location.href = WEB_URL + "/select"
            }
        },
    })
}
