let {Todo, todos} = require('../models/Todo');

class TodoController {
    static addTodo (data) {
        let {name, description} = data;
        let todo = new Todo(name, description);
        todos.push({...todo})
        return todos;
    }
    static fetchTodos () {
        return todos;
    }

    static getTodo(id) {
        if(todos.length) {
            let todo = todos.find(todo => todo.id == id);
            if (todo) {
                return todo;
            }
            return "Todo not found"
        } else {
            return "No todos in database"
        }
    }
    static deleteTodo(id) {
        let todo = this.getTodo(id);

        if(!todo =="Todo not found" || !todo =="No todos in database") {
            todos = todos.filter(item => item.id !== todo.id);
            return todos;
        }
        return todo;
    }
}

module.exports = TodoController;
