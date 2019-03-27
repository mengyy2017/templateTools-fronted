import ajax from "utils/ajaxUtil";

export const GET_MENU = "GET_MENU"

export const getMenu = data => ({type: GET_MENU, data})


export const getMenuAction = () => async dispatch => {
    await ajax.post({
        url: "127.0.0.1: 8099/menu/getAllMenu",
        succCallback: ({data: {respData}}) => dispatch(getMenu(respData))
    })
}















