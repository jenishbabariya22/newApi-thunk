import axios from "axios";

export const Add_user = () => {
    return async(dispatch)=>{
        try {
            let rec = await axios.get("http://localhost:8000/user");
            dispatch({
                type : "add",
                payload : rec.data
            })
            
        } catch (error) {
            console.log(error);
            return false;
        }
    }
}

export const View_user = (userdata) => {
    let {email,password} = userdata
    return async(dispatch)=>{
        try {
            let {data} = await axios.post("http://localhost:7000/user",{
                email : email,
                password: password
            })
            let rec = await axios.get("http://localhost:7000/user");
            dispatch({
                type : "viewuser",
                payload : rec.data
            })
            
        } catch (error) {
            console.log(error);
            return false;
        }
    }
}
export const delet_user = (id) => {
  
    return async(dispatch)=>{
        try {
            let {data} = await axios.delete(`http://localhost:7000/user/${id}`)
            let recc = await axios.get("http://localhost:7000/user");
            dispatch({
                type : "deletuser",
                payload : recc.data
            })
            
        } catch (error) {
            console.log(error);
            return false;
        }
    }
}
export const Edit_user = (id) => {
    return async(dispatch)=>{
        try {
            let {data} = await axios.get(`http://localhost:7000/user/${id}`)
            let recc = await axios.get("http://localhost:7000/user");
            dispatch({
                type : "edituser",
                payload :data
            })           
        } catch (error) {
            console.log(error);
            return false;
        }
    }
}
export const update_user = (id) => {
    return async(dispatch)=>{
        try {
            let {data} = await axios.put(`http://localhost:7000/user/${id}`)
            let recc = await axios.get("http://localhost:7000/user");
            dispatch({
                type : "updateuser",
                payload :recc.data
            })           
        } catch (error) {
            console.log(error);
            return false;
        }
    }
}