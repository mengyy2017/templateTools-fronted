import React from "react";

export const CODE_FORM_RADIO_CHANGE = 'CODE_FORM_RADIO_CHANGE'
export const codeFormRadioChange = data => ({type: CODE_FORM_RADIO_CHANGE, data})

export const codeFormRadioChangeAction = codeFormInfo => async dispatch => dispatch(codeFormRadioChange(codeFormInfo))


