import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import axios from "axios"
import { useDispatch } from 'react-redux'
function Navbar() {

  const dispatch = useDispatch();
  const [users, setUsers] = useState([])
  const [loading, setloading] = useState(true)

  useEffect(() => {
    try {
      const FetchAllUser = async () => {
        const { data } = await axios.get(`https://reqres.in/api/users?page=1`);
        setUsers(data.data);
        setloading(false)
      }

      FetchAllUser()

    } catch (error) {
      console.log(error)
      setloading(false);
    }
  }, [])


  const GetUsersHandel = () => {
    dispatch({
      type: "GET_ALL_USER",
      payload: {
        loading,
        users,
      }
    })
  }

  return (
    <nav>
      <div>
        <h1>CardLayout</h1>
      </div>

      <div>
        <Link to="/">Home</Link>
        <button onClick={GetUsersHandel} >Get Users</button>
      </div>

    </nav>
  )
}

export default Navbar