import { Component, OnInit } from '@angular/core';
import { TodoService } from './../services/todo.service';

@Component({
  selector: 'app-input',
  template: `
    <input
        class="new-todo"
        placeholder="what needs to be done?"
        autofocus
        (keyup.enter)="handleEnterKey($event)"
    />
  `,
})
export class InputComponent implements OnInit {

    constructor(private todoService: TodoService) { }

    ngOnInit() {
    }

    // handler for the enter event inside the component input
    handleEnterKey (event: any):void {
        const input = event.target.value.trim();
        if (input != '') {
            this.todoService.createTodo(input);
            event.target.value = '';
        }
    }



}
