import {CODE_FORM_RADIO_CHANGE} from 'actions/database/codeFormRadioAction'

export const codeFormRadioChangeInfo = (prevState = {}, action) => {
    switch (action.type) {
        case CODE_FORM_RADIO_CHANGE:
            return Object.assign({}, prevState, {formInfo: action.data})
        default:
            return prevState
    }
}

// export const columns = (prevState = {}, action) => {
//     switch (action.type) {
//         case GET_COLUMNS:
//             return Object.assign({}, prevState, {colArr: action.data})
//         case SET_SELECTED_COL_KEYS:
//             return Object.assign({}, prevState, {selectedColKeys: action.selectedKeys})
//         default:
//             return prevState
//     }
// }

















