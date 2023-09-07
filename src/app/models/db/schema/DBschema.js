const { default: mongoose } = require("mongoose");

const schema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    },
    comments: [
        {
            comment:{
                type: String
            },
            author:{
                type: String
            },
            posted:{
                type: Date,
                default: new Date().getTime()
            }
        }
    ]
})

export const blogSchema = mongoose.models.blog || mongoose.model('blog', schema)