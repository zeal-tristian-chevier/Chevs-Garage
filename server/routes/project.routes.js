const express = require('express')

const { 
    handleCreateProject,
    handleGetAllProjects,
    handleGetProjectById,
    handleDeleteProjectById,
    handleUpdateProjectById,
} = require('../controllers/project.controller')

const router = express.Router()

// router.post('/', handleCreateProject)
router.get('/', handleGetAllProjects)

// router.get('/:id', handleGetProjectById)
// router.delete('/delete/:id', handleDeleteProjectById)
// router.put('/update/:id', handleUpdateProjectById)

module.exports = {projectRouter: router}