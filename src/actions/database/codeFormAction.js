import {getTablesSuccess} from "actions/database/databaseAction";
import React from "react";
import ajax from "utils/ajaxUtil";

export const setCodeInfoAction = pars => async dispatch => {
    await ajax.post({
            url: TEMPLATE_SERVER_URL + "/database/setCreateInfo",
            data: pars,
            succCallback: ({resp}) => dispatch(getTablesSuccess(resp.data))
        }
    )
}
