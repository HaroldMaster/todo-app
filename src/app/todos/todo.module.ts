import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosAddComponent } from './todos-add/todos-add.component';
import { TodosFooterComponent } from './todos-footer/todos-footer.component';
import { TodosItemComponent } from './todos-item/todos-item.component';
import { TodosListComponent } from './todos-list/todos-list.component';
import { TodosPageComponent } from './todos-page/todos-page.component';
//reactive forms
import { ReactiveFormsModule} from '@angular/forms';
import { FiltroPipe } from './filtro.pipe'


@NgModule({
  declarations: [
    TodosAddComponent,
    TodosFooterComponent,
    TodosItemComponent,
    TodosListComponent,
    TodosPageComponent,
    FiltroPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    TodosPageComponent
  ]
})
export class TodoModule { }
