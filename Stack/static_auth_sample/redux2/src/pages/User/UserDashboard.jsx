import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../redux/userSlice'

const UserDashboard = () => {

    const dispatch = useDispatch()
    return (
        <div>
            UserDashboard
            <button onClick={() => dispatch(logout())}>Logout</button>
        </div>
    )
}

export default UserDashboard