import { Todo } from "./todos/models/todo.model";
import { todoReducer } from "./todos/todo.reducer";
import {filtroReducer} from "./filtro/filtro.reducer"
import { ActionReducerMap } from "@ngrx/store";
import { tipoFiltros } from "./filtro/filtro.actions";

export interface AppState {
    todos : Todo[],
    filtros: tipoFiltros
}
export const appReducers: ActionReducerMap<AppState> = {
    todos: todoReducer,
    filtros: filtroReducer
}