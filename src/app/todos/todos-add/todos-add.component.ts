import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import * as actions from '../todos.actions';

@Component({
  selector: 'app-todos-add',
  templateUrl: './todos-add.component.html',
  styleUrls: ['./todos-add.component.scss']
})
export class TodosAddComponent implements OnInit {

  inputText !: FormControl;
  constructor(private store: Store<AppState>) {
    this.inputText = new FormControl('', Validators.required)
   }

  ngOnInit(): void {
  }
  agregar(event:Event){
    console.log(this.inputText.valid)
    console.log(this.inputText.value);
    if(this.inputText.invalid){return}
    this.store.dispatch(actions.crear({texto: this.inputText.value}))
    this.inputText.reset();

    
  }
}
