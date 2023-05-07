import {CODE_FORM_RADIO_CHANGE} from 'actions/database/codeFormRadioAction'

export const codeFormRadioChangeInfo = (prevState = {}, action) => {
    switch (action.type) {
        case CODE_FORM_RADIO_CHANGE:
            return Object.assign({}, prevState, {formInfo: action.data})
        default:
            return prevState
    }
}

















