import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { InputComponent } from './input/input.component';
import { TodoService } from './services/todo.service';
import { FilteredTodoListComponent } from './filtered-todo-list/filtered-todo-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { LoaderComponent } from './loader/loader.component';
import { AuthInterceptor } from './services/auth.interceptor';

@NgModule({
    declarations: [
        AppComponent,
        TodosComponent,
        TodoListComponent,
        InputComponent,
        FilteredTodoListComponent,
        TodoItemComponent,
        LoaderComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [
        TodoService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
