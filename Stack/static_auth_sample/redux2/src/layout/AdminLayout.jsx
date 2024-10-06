import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'
import { selectUser } from '../redux/userSlice'

const AdminLayout = () => {
    const navigate = useNavigate()
    const userdata = useSelector(selectUser)
    if (!userdata?.auth || userdata?.role !== 'admin') {
        navigate('/')
    }
    return (
        <div>

            <Outlet />
        </div>
    )
}

export default AdminLayout