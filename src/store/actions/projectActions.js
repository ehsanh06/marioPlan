export const createProject = project => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {

        // Adding document to database
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'Death',
            authorLastName: 'Born',
            authorId: 12354,
            createdAt: new Date()
        })
        .then(() => {
            dispatch({ type: 'CREATE_PROJECT', project });
        })
        .catch((err) => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', err });
        })
        
    }
};