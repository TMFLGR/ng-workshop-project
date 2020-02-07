import { Injectable } from '@angular/core';
import { Todo } from './Todo';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
    todos: Todo[];
    todoId: number;

    constructor(private http: HttpClient) {
        this.todos = [];
        this.todoId = 1;
    }

    httpGetTodos (): any {
        return this.http.get<any>(environment.apiUrl + '/todos')
    }



    // getter for all todos
    getTodos(): Todo[] {
        return this.todos;
    }

    // getter for only done todos
    getOnlyDoneTodos(): Todo[] {
        const filter = this.todos.filter(todo => todo.isDone);
        return filter;
    }

    // find todoitem index inside array by todo id
    findTodoIndexById(todoId: number): number {
        return this.todos.findIndex(object => object.id === todoId);
    }

    // create a new todoitem
    createTodo(todoName: string): void {
        this.todos.push({
            id: this.todoId,
            name: todoName,
            isDone: false,
            editIsActive: false
        })
        this.todoId++;
    }

    // update / toggle the isDone value of a specific todo
    updateTodoDone(todoId: number): void {
        const index = this.findTodoIndexById(todoId);
        this.todos[index].isDone = !this.todos[index].isDone;
    }

    // set edit mode of specific todo to true
    setTodoEditMode(todoId: number): void {
        const index = this.findTodoIndexById(todoId);
        this.todos[index].editIsActive = true;
    }

    // unset edit mode and store the provided value
    unsetTodoEditMode(todoId: number, value: string): void {
        const index = this.findTodoIndexById(todoId);
        this.todos[index].name = value;
        this.todos[index].editIsActive = false;
    }

    // delete a specific todo item
    deleteTodo(todoId: number): void {
        const index = this.findTodoIndexById(todoId);
        this.todos.splice(index, 1);
    }

}
