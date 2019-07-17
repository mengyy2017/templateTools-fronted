
export const autoCompletion = (prevState = {}, action) => {
    switch (action.type) {
        case "":
            return Object.assign({}, prevState, {})
        default:
            return prevState
    }
}
