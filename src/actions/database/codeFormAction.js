import {getTablesSuccess} from "actions/database/databaseAction";
import React from "react";
import ajax from "utils/ajaxUtil";

export const setCodeInfoAction = pars => async dispatch => {
    await ajax.post({
            url: "http://127.0.0.1:8099/database/setCreateInfo",
            data: pars,
            succCallback: ({data}) => dispatch(getTablesSuccess(data.respData))
        }
    )
}
