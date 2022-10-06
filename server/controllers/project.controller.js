const {
    createProject,
    getAllProjects,
    getProjectById,
    updateProjectById,
    deleteProjectById,
} = require('../services/project.service')

const handleCreateProject = async (req, res) => {
    try{
        const project = await createProject(req.body)
        return res.json(project)
    } catch (err){
        return res.status(400).json(err)
    }
}
const handleGetAllProjects = async (req, res) => {
    try{
        const project = await getAllProjects()
        return res.json(project)
    } catch (err){
        return res.status(400).json(err)
    }
}
const handleGetProjectById = async (req, res) => {
    try{
        const project = await getProjectById(req.params.id)
        return res.json(project)
    } catch (err){
        return res.status(400).json(err)
    }
}
const handleUpdateProjectById = async (req, res) => {
    try{
        const project = await updateProjectById(req.params.id, req.body)
        return res.json(project)
    } catch (err){
        return res.status(400).json(err)
    }
}
const handleDeleteProjectById = async (req, res) => {
    try{
        const project = await deleteProjectById(req.params.id)
        return res.json(project)
    } catch (err){
        return res.status(400).json(err)
    }
}
module.exports = {
    handleCreateProject,
    handleGetAllProjects,
    handleGetProjectById,
    handleDeleteProjectById,
    handleUpdateProjectById,
}