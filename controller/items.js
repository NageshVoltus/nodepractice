
const getAllTasks = ((req, res) => {
    res.send("in routerr")
})
const createTash = ((req, res) => {
    res.send("in createTash")
})
const getSingleTask = ((req, res) => {
    res.send("in getSingleTask")
})
const patchTask = ((req, res) => {
    res.send("patchTask")
})
const deleteTask = ((req, res) => {
    res.send("in deleteTask")
})


module.exports = {
    getAllTasks,
    createTash,
    getSingleTask,
    patchTask,
    deleteTask
}