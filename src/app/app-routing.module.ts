import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodosComponent } from './todos/todos.component';
import { FilteredTodoListComponent } from './filtered-todo-list/filtered-todo-list.component';


const routes: Routes = [
    {
        path: '',
        component: TodosComponent
    },
    {
        path: 'done',
        component: FilteredTodoListComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
