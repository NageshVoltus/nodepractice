const express = require('express')
const router = express.Router();
const { getAllTasks,
    createTash,
    getSingleTask,
    patchTask,
    deleteTask } = require('../controller/items')

router.route('/').get(getAllTasks).post(createTash)
router.route('/:id').get(getSingleTask).patch(patchTask).delete(deleteTask)

module.exports = router