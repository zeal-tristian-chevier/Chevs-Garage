const {Project} = require('../models/project.model')
//CREATE
const createProject = async (data) => {
    const project = await Project.create(data)
    return project
}
//READ
const getAllProjects = async () => {
    const projects = await Project.find()
    return projects
}
//READ
const getProjectById = async (id) => {
    const project = await Project.findById(id)
    return project
}
//UPDATE
const updateProjectById = async (id, data) => {
    const project = await Project.findByIdAndUpdate(id, data, {
        runValidators: true,
        new: true,
    })
    return project
}
//DELETE
const deleteProjectById = async (id) => {
    const project = await Project.findByIdAndDelete(id)
    return project
}
module.exports = {
    createProject,
    getAllProjects,
    getProjectById,
    updateProjectById,
    deleteProjectById,

}