const Topic = require('../models/Topic');

const create = async (topicData) => {
  const topic = await Topic.create(topicData);
  return topic;
}

const findAll = async () => {
  const topics = await Topic.find();
  return topics;
}

const find = async (id) => {
  const topic = await Topic.findById(id);
  return topic;
}

const findByCategory = async (cat) => {
  const list = await Topic.find({ category: {$eq: cat } });
  return list;
}

const update = async (id, update) => {
  const topic = await Topic.findByIdAndUpdate(id, update, { new: true });
  return topic;
}

const remove = async (id) => {
  await Topic.findByIdAndRemove(id);
}

module.exports = {
  create,
  find,
  findAll,
  update,
  remove,
  findByCategory,
}