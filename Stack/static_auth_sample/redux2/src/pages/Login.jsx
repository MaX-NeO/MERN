import React from 'react'
import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { login, logout } from '../redux/userSlice'
import { authlogin } from '../services/api'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const email = useRef(null)
    const password = useRef(null)
    const handleLogin = async (e) => {
        const logindata = {
            email: email.current.value,
            password: password.current.value
        }
        e.preventDefault()
        try {
            const response = await authlogin(logindata)
            console.log(response)
            if (response.status === 200) {
                alert("Login")
                dispatch(login({
                    email: email.current.value,
                    role: response.data,
                    auth: true
                }))
                if (response.data === "user") {
                    navigate('/user/dashboard')
                } else if (response.data === "admin") {
                    navigate('/admin/dashboard')
                }
                else {
                    alert("Invalid User Permission !")
                }
            }
            else {
                alert(response.data);
            }
        } catch (error) {
            alert(error)
        }
    }
    return (
        <>
            <form onSubmit={handleLogin}>
                <input type="email" name="email" id="" ref={email} required />
                <input type="password" name="password" id="" ref={password} required />
                <button type="submit">Login</button>
            </form>
        </>
    )
}

export default Login