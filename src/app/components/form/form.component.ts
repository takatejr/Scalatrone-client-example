import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-button',
  template: `
<label aria-label="ingredient">Add an item: <input #newItem></label>
<button (click)="btnClick(newItem.value)">Add to parent's list</button>
  `,
  styles: [],
})
export class FormComponent {

  @Output() clickedBtn = new EventEmitter<Observable<string>>();
  
  constructor() { }

  btnClick(e: string) {
    this.clickedBtn.emit(of(e));
  }

}
