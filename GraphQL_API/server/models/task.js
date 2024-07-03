const mongoose = require('mongoose');
const { description } = require('../schema/schema');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
	title: String,
	weight: Number,
	description: String,
	projectId: String
});

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;