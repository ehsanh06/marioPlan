export const createProject = project => {
    return (dispatch, getState) => {
        // Make some Async call to db
        dispatch({ type: 'CREATE_PROJECT', project });
    }
};