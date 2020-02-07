import { Component, OnInit } from '@angular/core';

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

    constructor() { }

    ngOnInit() {
    }

    // handler for the enter event inside the component input
    handleEnterKey (event: any):void {
        const input = event.target.value.trim();
        if (input != '') {
            console.log(input);
            // handle service here
            event.target.value = '';
        }
    }



}
