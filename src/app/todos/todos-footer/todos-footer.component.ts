import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import * as actions from 'src/app/filtro/filtro.actions';
import {limpiarTodos} from '../todos.actions'

@Component({
  selector: 'app-todos-footer',
  templateUrl: './todos-footer.component.html',
  styleUrls: ['./todos-footer.component.scss']
})
export class TodosFooterComponent implements OnInit {
  filtroActual: actions.tipoFiltros = 'todos';
  filtros: actions.tipoFiltros[] = ['todos','completados','pendientes'];
  pendientes: number = 0;

  constructor(private store: Store<AppState>) { 
    
  }

  ngOnInit(): void {
    this.store.subscribe( state => {

      this.filtroActual = state.filtros;
      this.pendientes   = state.todos.filter( todo => !todo.completado ).length;

    });
  }
  cambiarFiltro( filtro: actions.tipoFiltros ) {

    this.store.dispatch( actions.render({ filtro }) );

  }

  limpiarCompletados() {

    this.store.dispatch(limpiarTodos())

  }

}
