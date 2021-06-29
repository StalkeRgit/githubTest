const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
tittel: {
type: String,
required: true
},
content: {
type: String,
require: true
},
data: {
type: Date,
default: Date.now()
}

})
module.exports = mongoose.model('posts',postSchema);