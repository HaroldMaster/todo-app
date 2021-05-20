import { Action, createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { borrar, cambiarCompletadoTodos, completado, crear, editar } from './todos.actions';
export const initialState : Todo[] =
 [
     new Todo('Estudiar angular'),
     new Todo('Estudiar NGRX'), 
     new Todo('Estudiar RXJS')

];
const _todoReducer = createReducer(
    initialState,
    on(crear, (state, {texto}) => [...state, new Todo(texto)]),
    on(completado, (state, {id}) => {
        return state.map(todoObject =>{
            if(todoObject.id == id){
                return {...todoObject, completado:!todoObject.completado}
            }
            else {
                return todoObject
            }
        })
    }),
    on(editar, (state, {id, texto}) => {
        return state.map(todoObject =>{
            if(todoObject.id == id){
                return {...todoObject, texto: texto}
            }
            else {
                return todoObject
            }
        })
    }),
    on(borrar, (state, {id}) => state.filter(e=> e.id != id)),
    on(cambiarCompletadoTodos, (state, {bandera}) => {
        return state.map(estado => {
            return {...estado, completado: bandera}
        })
    })
);
export function todoReducer(state:any, action:Action) {
    return _todoReducer(state, action);
}   
