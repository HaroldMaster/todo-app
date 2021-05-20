import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { tipoFiltros } from 'src/app/filtro/filtro.actions';
import { Todo } from '../models/todo.model';
import { cambiarCompletadoTodos } from '../todos.actions';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss']
})
export class TodosListComponent implements OnInit {

  todos !: Todo[];
  filtroActual!: tipoFiltros;
  banderaCambio: boolean = false;
  constructor(private store : Store<AppState>) { }

  ngOnInit(): void {
    this.store.subscribe( ({ todos, filtros }) => {
      this.todos        = todos;
      this.filtroActual = filtros;

    });
  }
  marcarTodos(){
    this.banderaCambio = !this.banderaCambio;
    console.log(this.banderaCambio);
    this.store.dispatch(cambiarCompletadoTodos({bandera: this.banderaCambio}))
    
  }
}
