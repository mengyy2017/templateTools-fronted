import ajax from "utils/ajaxUtil";

export const CONCURRENCY_TEST = "CONCURRENCY_TEST"
export const concurrencyTest = data => ({type: CONCURRENCY_TEST, data})

export const concurrencyTestAction = pars => dispatch => {
    ajax.post({
        url: SYSTEM_SERVER_URL + '/account/login',
        data: pars,
        succCallback: ({data}) => console.log(JSON.stringify(data))
    })
}










