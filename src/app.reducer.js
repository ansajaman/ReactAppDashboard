function appReducer(state = {}, action) {
    const {type, payload} = action;
    let defaultState = {};
    let newState;
    switch (type) {
        case "GET_USERS":
            newState = {...state, users: payload};
            break;
        case "GET_EMPLOYEES":
            newState = {...state, employees: payload};
            break;
        case "LOGIN":
            newState = {...state, userDetails: payload, error: null};
            break;
        case "ERROR":
            newState = {...state, error: payload};
            break;
        case "CLEAR":
            newState = defaultState;
            break;
        default:
            newState = state;
    }
    return newState;
}

export default appReducer;