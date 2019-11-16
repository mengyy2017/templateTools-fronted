import ajax from "utils/ajaxUtil";

export const GET_MENU = "GET_MENU"

export const getMenu = data => ({type: GET_MENU, data})

export const getMenuAction = () => async dispatch => {
    await ajax.post({
        url: SYSTEM_SERVER_URL + "/menu/getAllMenu",
        succCallback: ({data}) => dispatch(getMenu(data.respData))
    })
}

export const GET_MENU_UNIQ = "GET_MENU_UNIQ"

export const getMenuUniq = data => ({type: GET_MENU_UNIQ, data})

export const getMenuUniqAction = pars => async dispatch => {
    await ajax.post({
        url: SYSTEM_SERVER_URL + "/menu/getMenuUniq",
        data: pars,
        succCallback: ({data}) => {
            dispatch(changeMenuOper({"menuOperType": "编辑"}))
            dispatch(getMenuUniq(data.respData))
        }
    })
}

export const updateOrSaveAction = pars => async dispatch => {
    await ajax.post({
        url: SYSTEM_SERVER_URL + "/menu/updateOrSave",
        data: pars,
        succCallback: () => dispatch(getMenuAction())

    })
}

export const CHANGE_MENU_OPER = "CHANGE_MENU_OPER"

export const changeMenuOper = data => ({type: CHANGE_MENU_OPER, data})

export const changeMenuOperTypeAction = pars => dispatch => {
    if (pars.menuOperType == "新增")
        dispatch(getMenuUniq({}))

    dispatch(changeMenuOper(pars))
}














