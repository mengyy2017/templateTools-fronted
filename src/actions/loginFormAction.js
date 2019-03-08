import axios from 'axios'

// export const SET_CREATE_INFO_TOKEN = "SET_CODE_INFO_TOKEN"

// export const setCreateInfoToken = data => ({type: SET_CREATE_INFO_TOKEN, data})

export const loginAction = data => async dispatch => {
    debugger
    let response = await axios({
        method: 'POST',
        url: 'http://127.0.0.1:8099/j_logi',
        // headers: { 'content-type': 'application/json'},
        data: data,
        // withCredentials: true
    })
    // console.log(response)
    // dispatch(getTablesSuccess(response.data))

    // const {createInfoToken} = response.data

    // if(createInfoToken)
    //     dispatch(setCreateInfoToken(createInfoToken))
}
