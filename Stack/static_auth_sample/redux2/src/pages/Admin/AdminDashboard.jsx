import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../redux/userSlice'

const AdminDashboard = () => {

    const dispatch = useDispatch()
    return (
        <div>
            AdminDashboard
            <button onClick={() => dispatch(logout())}>Logout</button>
        </div>
    )
}

export default AdminDashboard