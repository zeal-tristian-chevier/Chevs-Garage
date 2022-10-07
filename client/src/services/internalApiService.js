import axios from 'axios'

const http = axios.create({
    baseURL: 'https://chevs-garage.herokuapp.com/'
})
export const getAllProjects = async() => {
    const res = await http.get('/')
    return res.data
}
export const getProjectById = async(id) => {
    const res = await http.get(`/project/id`)
    return res.data
}
export const createProject = async(data) => {
    console.log(data)
    const res = await http.post(`/project/add`, data)
    return res.data
}
export const updateProjectById = async(id, data) => {
    const res = await http.put(`/project/id/edit`, data)
    return res.data
}
export const deleteProjectById = async(id) => {
    const res = await http.delete(`/project/id/delete`)
    return res.data
}