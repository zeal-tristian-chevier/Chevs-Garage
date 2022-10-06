const mongoose = require('mongoose')

const ProjectSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "A Project name is required"],
            minlength: [3]
        },
        beforeImgURL: {
            type: String,
            required: [true, "Before picture url is required"],
            minlength: [3]
        },
        afterImgURL: {
            type: String,
            required: [true, "After picture url is required"],
            minlength: [3]
        },
        
    }, {timestamps: true}

)

const Project = mongoose.model("Project", ProjectSchema)

module.exports = { Project }