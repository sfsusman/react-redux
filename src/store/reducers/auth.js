import {LOGIN} from "../action/Auth";
console.log(LOGIN)
const initialState = {
    user: {},
    register: {},
    token: "",
    isloggedIn: false,
    error: {},
    message: '',
    statusCode:""
};
const authReducer = (state = initialState, action) => {
    const {type, payload} = action;
    console.log("payload");

    switch (type) {
        case LOGIN:
            console.log('login type')
            console.log(payload.data)
            return {
                 ...state,
                // ...register,
                statusCode:payload.data.statusCode,
                message: payload.data.message,
                // user:  payload.user_details,
                 token: payload.token,
                // isloggedIn: true,

            };
         // case REGISTER:
         //    console.log(payload)
         //    return {
         //        ...state,
         //        register: payload.user_details,
         //        error: payload.status?payload.data.message:''
         //    }
        default:
            return state;
    }
};
export default authReducer;
