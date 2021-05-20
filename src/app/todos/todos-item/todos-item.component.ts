import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { Todo } from '../models/todo.model';
import { borrar, completado, editar } from '../todos.actions';

@Component({
  selector: 'app-todos-item',
  templateUrl: './todos-item.component.html',
  styleUrls: ['./todos-item.component.scss']
})
export class TodosItemComponent implements OnInit {
  @Input()
  todo !: Todo;
  check !: FormControl;
  txtInput !: FormControl;
  editando : boolean = false;
  @ViewChild('inputEdit') inputEdit !: ElementRef;
  constructor(private store : Store<AppState>) {
   }

  ngOnInit(): void {
   this.check = new FormControl(this.todo.completado);
   this.txtInput = new FormControl(this.todo.texto, Validators.required);
   this.check.valueChanges.subscribe(value=> {
     console.log(this.todo.id)
     this.store.dispatch(completado({id: this.todo.id}))
   })
  }

  editar(){
    this.editando=true;
    this.txtInput.setValue(this.todo.texto)
    console.log('Input',this.inputEdit);
    setTimeout(() => {
        this.inputEdit.nativeElement.select();
    }, 1);
  }
  terminarEdicion(){
    this.editando = false;
    if(this.txtInput.invalid){return}
    if(this.txtInput.value == this.todo.texto){return} //para que no cambie de estado si es que no modifico con algo nuevo
    this.store.dispatch(editar({id: this.todo.id, texto: this.txtInput.value}));
  }
  borrar(){
    this.store.dispatch(borrar({id: this.todo.id}))
  }

}
