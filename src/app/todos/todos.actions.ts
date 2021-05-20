import { createAction, props } from '@ngrx/store';
export const crear = createAction('[TODO] Crear',props<{texto: string}>());
export const completado = createAction('[TODO] Completado',props<{id: number}>());
export const editar = createAction('[TODO] Editar',props<{id: number, texto:string}>());
export const borrar = createAction('[TODO] Borrar',props<{id: number}>());
export const cambiarCompletadoTodos = createAction('[TODO] CambiarTodos',props<{bandera: boolean}>());
export const limpiarTodos = createAction('[TODO] Limpiar TODOS');