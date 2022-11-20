// creating mdoel to interact with database

const mongoose = require('mongoose')

//creating subscriber schema

const todoObjectSchema = new mongoose.Schema(
    // json object
    {

        title: {
            type: String,
            required: true

        },

        description: {
            type: String,
            required: true

        },

        dueDate:{
            type: Date,
            required: true,
        },

        createdDate: {
            type:Date,
            required: true
        },

        updatedDate: {
            type:Date,
            required: true
        }
        
    },

        {
            timestamps: true
        }


)

module.exports = mongoose.model('todoObject', todoObjectSchema)