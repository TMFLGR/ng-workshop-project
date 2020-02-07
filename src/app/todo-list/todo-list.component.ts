import { Component, OnInit } from '@angular/core';
import { Todo } from './../services/Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

    editMode: boolean;
    todos: Todo[];

    constructor() {
        this.todos = [
            {
                id: 1,
                name: 'buy a unicorn (urgent)',
                isDone: true,
                editIsActive: false
            },
            {
                id: 2,
                name: 'eat some variables',
                isDone: false,
                editIsActive: true
            },
            {
                id: 3,
                name: 'taste some typescript',
                isDone: false,
                editIsActive: false
            },
        ];
        this.editMode = false;
    }

    ngOnInit() {

    }

    // find todoitem index inside array by todo id
    findTodoIndexById (todoId: number): number {
        return this.todos.findIndex(object => object.id === todoId);
    }

    // clickhandler to delete a todo on button click
    handleDeleteClick (todoId: number): void {
        const index = this.findTodoIndexById(todoId);
        this.todos.splice(index, 1);
    }

    // clickhandler to set or unset the todo done
    handleToggleDoneClick (todoId: number): void {
        const index = this.findTodoIndexById(todoId);
        this.todos[index].isDone = !this.todos[index].isDone;
    }

    // activate edit mode by todoId
    handleSetEditMode (todoId: number): void {
        const index = this.findTodoIndexById(todoId);
        this.todos[index].editIsActive = true;
        this.editMode = true;
    }

    // unset edit mode and change value by todoId
    handleUnsetEditMode (todoId: number, value: string): void {
        const index = this.findTodoIndexById(todoId);
        this.todos[index].name = value;
        this.todos[index].editIsActive = false;
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
