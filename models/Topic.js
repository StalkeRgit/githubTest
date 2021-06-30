const mongoose = require('mongoose');

const topicSchema = mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  color:{
    type: String,
  },
  weekday:{
    type: String,
    required: true
  },
  start:{
    type: String,
    required: true
  },
  end:{
    type: String,
    required: true
  },
});

module.exports = mongoose.model('Topic', topicSchema);