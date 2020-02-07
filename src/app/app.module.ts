import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { InputComponent } from './input/input.component';
import { TodoService } from './services/todo.service';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoListComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
