import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../redux/userSlice'
const Navbar = () => {
    const userdata = useSelector(selectUser)
    return (
        <div>
            {userdata?.name || "Login"}
        </div>
    )
}

export default Navbar