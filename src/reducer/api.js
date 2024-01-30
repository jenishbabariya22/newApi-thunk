let initialstate = {
    user : [],
    single:{}
}

const crud = (state = initialstate,action)=>{
    switch (action.type) {
        case "add":
           return{
                ...state,
                user : action.payload
           }
        case "viewuser":
           return{
                ...state,
                user : action.payload
           }
        case "deletuser":
           return{
                ...state,
                user : action.payload
           }
        case "edituser":
           return{
                ...state,
                single : action.payload
           }
        case "updateuser":
           return{
                ...state,
                user : action.payload
           }
    
        default:
            return state;
    }
}
export default crud;