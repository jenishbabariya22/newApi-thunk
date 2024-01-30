import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Add_user, delet_user } from '../action/action'

function View() {

  let dispatch = useDispatch()
  let rec = useSelector(state => state.Api.user)
  console.log(rec);
  useEffect(() => {
    dispatch(Add_user())
  }, [])

  const remove =(id)=>{
    dispatch(delet_user(id))
  }
  return (
    <>
      <Link to={'/add'}>Add</Link>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
          </tr>
        </thead>
        <tbody>
          {
            rec.map((val, i) => {
              return (
                <tr>
                  <td>{val.email}</td>
                  <td>{val.password}</td>
                  <td>
                      <button onClick={()=>remove(val.id)}>delet</button>
                      <button >
                        <Link to={`edit/${val.id}`}>edit</Link>
                        </button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </>
  )
}

export default View
