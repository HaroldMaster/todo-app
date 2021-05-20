import { createAction, props } from '@ngrx/store';
export type tipoFiltros = 'todos' | 'completados' | 'pendientes';
export const render = createAction('[Filtro] renderFiltros',props<{filtro:tipoFiltros}>());