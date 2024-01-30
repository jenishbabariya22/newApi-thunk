import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { Edit_user, View_user, update_user } from '../action/action'

function Edit() {

    let {id}=useParams()
    const dispatch = useDispatch()
    const [email,setemail] = useState('')
    const [password,setpassword] = useState('')
    const single = useSelector(state=>state.Api.single)
    console.log(single);

    const submit = () => {
        let obj = {email,password}
        console.log(obj);
        dispatch(View_user(obj))
        setemail("")
        setpassword("")
    }

    useEffect(()=>{
        dispatch(update_user(id))
    },[id])

    useEffect(()=>{
        dispatch(Edit_user(id))
    },[id])

    useEffect(()=>{
       setemail(single.email)
       setpassword(single.password)
    },[single])


    return (
        <>
            <Link to={'/'}>View</Link>

            <div className="container">
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" onChange={(e) => setemail(e.target.value)} value={email}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"  onChange={(e) => setpassword(e.target.value)} value={password}/>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="button" className="btn btn-primary" onClick={submit}>Edit</button>
                </form>
            </div>
        </>
    )
}

export default Edit


