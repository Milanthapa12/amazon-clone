export const initialState = {
  user: null,
};

const authReducer = (state, action){

    switch (action.type){
        case 'SET_USER':
            return {
                user: action.payload
            }
        default:
            return user;
    }
}

export default authReducer;