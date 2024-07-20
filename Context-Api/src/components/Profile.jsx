import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {

    const {user} = useContext(UserContext)

  return (
    <div>
        <br />
        <br />
        <h2>Welcome : {user.username}</h2>
    </div>

  )
}

export default Profile