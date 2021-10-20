const initialState ={
    users: [],
    showLoader: false
};

export const todoreducer = (state=initialState, action) => {

    switch (action.type){

        case 'ADD_TASK':
            return{
                ...state,
                users: [...state.users, action.users]
            };
        break;

        case 'DELETE_TASK':
            return{
                ...state,
                users: state.users.filter((u) => u.username !== action.username)
            };
        break;

        case 'SHOW LOADER':
            return{
                ...state,
                showLoader: true
            };
        break;

        case 'HIDE_LOADER':
            return{
                ...state,
               showLoader: false
            };
        break;

        default:
            return state;


    }
};