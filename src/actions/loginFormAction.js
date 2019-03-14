import axios from 'axios'

export const SET_REDIRECT_URL = "SET_REDIRECT_URL"

export const setRedirectUrl = redirectUrl => ({type: SET_REDIRECT_URL, redirectUrl})

export const loginAction = data => async dispatch => {

    let param = new URLSearchParams()
    param.append("username", data.username)
    param.append("password", data.password)

    let response = await axios({
        method: 'POST',
        url: 'http://127.0.0.1:8099/j_logi',
        data: param,
        withCredentials: true
    })

    if (response.data == "success")
        dispatch(setRedirectUrl("/select"))
    
    console.log(JSON.stringify(response))

}
