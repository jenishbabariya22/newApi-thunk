import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { View_user } from '../action/action'

function Add() {

    const dispatch = useDispatch()
    const [email,setemail] = useState('')
    const [password,setpassword] = useState('')

    const submit = () => {
        let obj = {email,password}
        console.log(obj);
        dispatch(View_user(obj))
        setemail("")
        setpassword("")
    }

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
                    <button type="button" className="btn btn-primary" onClick={submit}>Submit</button>
                </form>
            </div>
        </>
    )
}

export default Add


