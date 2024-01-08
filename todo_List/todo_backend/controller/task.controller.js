const Task = require('../model/task');

const taskController = {};

// 생성 API
taskController.createTask = async (req, res) => {
  try {
    const { task, isComplete } = req.body;
    const newTask = new Task({ task, isComplete });
    await newTask.save();
    res.status(200).json({ status: 'ok', data: newTask });
  } catch (error) {
    res.status(400).json({ status: 'fail', error });
  }
};

// 조회 API
taskController.getTask = async (req, res) => {
  try {
    const taskList = await Task.find({}).select('-__v');
    res.status(200).json({ status: 'ok', data: taskList });
  } catch (error) {
    res.status(400).json({ status: 'fail', error });
  }
};

// 수정 API
taskController.updateTask = async (req, res) => {
  try {
    const { isComplete } = req.body;
    const updateTask = await Task.findById(req.params.id);

    updateTask.isComplete = isComplete;

    await updateTask.save();

    res.status(200).json({ status: 'ok', data: updateTask });
  } catch (error) {
    res.status(400).json({ status: 'fail', error });
  }
};

// 삭제 API
taskController.deleteTask = async (req, res) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(req.params.id);
    if (!deletedTask) throw new Error('there is no Task');

    res.status(200).json({ status: 'ok', data: deletedTask });
  } catch (error) {
    res.status(400).json({ status: 'fail', error: error.message });
  }
};

module.exports = taskController;
