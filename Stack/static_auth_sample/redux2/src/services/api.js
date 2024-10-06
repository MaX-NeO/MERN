import axios from 'axios'


const API = import.meta.env.VITE_API
// const API = "http://localhost:7777"
// const API = import.meta.env.APIMOCK

const authregister = (registerdata) => axios.post(`${API}/users/register`, registerdata)
const authlogin = (logindata) => axios.post(`${API}/users/login`, logindata)
// const getProjects = () => axios.get(`${API}/projects/all`)
// const getProjectbyID = (id) => axios.get(`${API}/projects/${id}`)
// const addProject = (projectdata) => axios.post(`${API}/projects/add`, projectdata)
// const editProject = (id, projectdata) => axios.put(`${API}/projects/edit/${id}`, projectdata)
// const deleteProject = (id) => axios.delete(`${API}/projects/delete/${id}`)
export {
    // getProjects, getProjectbyID, addProject, editProject, deleteProject 
    authregister,
    authlogin
}