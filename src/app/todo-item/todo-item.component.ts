import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../services/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
    @Input() todo: Todo;
    @Input() editMode: boolean;
    @Input() lockTodoEdit: boolean;
    @Output() toggleDone: EventEmitter<any> = new EventEmitter();
    @Output() clickDelete: EventEmitter<any> = new EventEmitter();
    @Output() setEditMode: EventEmitter<any> = new EventEmitter();
    @Output() unsetEditMode: EventEmitter<any> = new EventEmitter<string>();

    constructor() { }

    ngOnInit() {

    }

    // click handler for the toggle done click
    handleToggleDoneClick (): void {
        this.toggleDone.emit();
    }

    // click handler for the delete click
    handleDeleteClick (): void {
        this.clickDelete.emit();
    }

    // double click handler to set the edit mode of a todo to true
    handleSetEditMode (): void {
        // the exclamation mark saves our life!
        // its the "non null assertion operator"
        // it prevents angular to throw no error when setEditMode is null or undefined
        this.setEditMode!.emit();
    }

    // handler to handle enter key press or blur event of the input
    handleUnsetEditMode (value: string): void {
        this.unsetEditMode!.emit(value.trim());
    }


}
