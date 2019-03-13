import axios from 'axios'

// export const SET_CREATE_INFO_TOKEN = "SET_CODE_INFO_TOKEN"

// export const setCreateInfoToken = data => ({type: SET_CREATE_INFO_TOKEN, data})

export const loginAction = data => dispatch => {

    // axios.get('http://127.0.0.1:8099/account/accDenied', {params: {
    //     username: 'Fred',
    //     password: 'Flintstone'
    // }})
    //     .then(function (response) {
    //         console.log(response);
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     });

    // let response = await axios({
    //     method: 'POST',
    //     // url: 'http://127.0.0.1:8099/j_logiiiiii',
    //     url: 'http://127.0.0.1:8099/account/accDenied',
    //     // headers: { 'Content-Type': 'application/json'},
    //     // headers: { 'Content-Type': 'application/x-www-form-urlencoded'},
    //     // headers: { 'Content-Type': 'application/json;charset=UTF-8'},
    //     // data: JSON.stringify(data),
    //     data: data,
    //     withCredentials: true
    // })

    axios.post('http://127.0.0.1:8099/account/accDenied', {
        firstName: 'Fred',
        username: 'Flintstone'
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });

    // console.log(response)
    // dispatch(getTablesSuccess(response.data))

    // const {createInfoToken} = response.data

    // if(createInfoToken)
    //     dispatch(setCreateInfoToken(createInfoToken))
}
