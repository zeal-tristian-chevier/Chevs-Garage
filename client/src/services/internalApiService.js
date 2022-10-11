import axios from 'axios'

const http = axios.create({
    baseURL: `http://localhost:8000`
})
export const getAllProjects = async() => {
    const res = await http.get('/api')
    return res.data
}
// export const getProjectById = async(id) => {
//     const res = await http.get(`/project/id`)
//     return res.data
// }
// export const createProject = async(data) => {
//     const res = await http.post(`/project/add`, data)
//     return res.data
// }
// export const updateProjectById = async(id, data) => {
//     const res = await http.put(`/project/id/edit`, data)
//     return res.data
// }
// export const deleteProjectById = async(id) => {
//     const res = await http.delete(`/project/id/delete`)
//     return res.data
// }