import axios from 'axios'

export const SET_REDIRECT_URL = "SET_REDIRECT_URL"

export const setRedirectUrl = redirectUrl => ({type: SET_REDIRECT_URL, redirectUrl})

export const loginAction = pars => async dispatch => {

    let param = new URLSearchParams()
    param.append("username", pars.username)
    param.append("password", pars.password)

    let {data} = await axios({
        method: 'POST',
        url: 'http://127.0.0.1:8099/j_logi',
        data: param,
        withCredentials: true
    })

    if (data.msg == "success")
        dispatch(setRedirectUrl("/select"))
    
    console.log(data)

}
