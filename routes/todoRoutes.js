const router  = require('express').Router()
const TodoController = require('../controllers/todos.controller')


router.get('', (req, res) => {
    let todos = TodoController.fetchTodos();
    res.json({
        todos
    })
})

router.post('/add', (req, res) => {
    let data = req.body;
    let todo = TodoController.addTodo(data)
    
    return res.status(201).json({
        message: todo
    })
})

router.get('/:id', (req, res) => {
    let { id } = req.params;

    let data =  TodoController.getTodo(id);
    return res.json({
        data
    })
})

router.delete('/:id/delete', (req, res)=> {
    let { id } = req.params;

    let data = TodoController.deleteTodo(id);
    return res.json({
        data
    })
})



module.exports = router;