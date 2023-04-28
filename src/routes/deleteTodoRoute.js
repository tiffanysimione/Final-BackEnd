const TodoModel = require('../models/TodoModel');

module.exports = async (req, res) => {
  const {id} = req.params;
  await TodoModel.deleteOne({_id: id});
  res.status(204).json();
}