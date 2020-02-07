import { Component, OnInit, DoCheck } from '@angular/core';
import { Todo } from '../services/Todo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-filtered-todo-list',
  templateUrl: './filtered-todo-list.component.html',
  styleUrls: ['./filtered-todo-list.component.css']
})
export class FilteredTodoListComponent implements OnInit, DoCheck {

    doneTodos: Todo[];

    constructor(private todoService: TodoService) {
        this.doneTodos = [];
    }

    ngOnInit() {
        this.doneTodos = this.todoService.getOnlyDoneTodos();
    }

    ngDoCheck() {
        const changedTodos: Todo[] = this.todoService.getOnlyDoneTodos();
        if(this.doneTodos.length != changedTodos.length) {
            this.doneTodos = changedTodos;
        }
    }

    // clickhandler to set or unset the todo done
    handleTodoDoneClick (todoId: number): void {
        this.todoService.updateTodoDone(todoId);
    }

    // clickhandler to delete the todo item
    handleDeleteClick (todoId: number): void {
        this.todoService.deleteTodo(todoId);
    }
}
