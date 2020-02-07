import { Component, OnInit } from '@angular/core';
import { Todo } from '../services/Todo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

    editMode: boolean;
    todos: Todo[];

    constructor(private todoService: TodoService) {
        this.editMode = false;
    }

    ngOnInit() {
        this.todos = this.todoService.getTodos();
    }

    // clickhandler to delete a todo on button click
    handleDeleteClick (todoId: number): void {
        this.todoService.deleteTodo(todoId);
    }

    // clickhandler to set or unset the todo done
    handleToggleDoneClick (todoId: number): void {
        this.todoService.updateTodoDone(todoId);
    }

    // activate edit mode by todoId
    handleSetEditMode (todoId: number): void {
        this.todoService.setTodoEditMode(todoId);
        this.editMode = true;
    }

    // unset edit mode and change value by todoId
    handleUnsetEditMode (todoId: number, value: string): void {
        this.todoService.unsetTodoEditMode(todoId, value);
        this.editMode = false;
    }

    // count and return the number of undone todos
    countUndoneTodos (): number {
        let count = 0;
        this.todos.forEach(el => {
            if (!el.isDone) {
                count++;
            }
        });
        return count;
    }
}
