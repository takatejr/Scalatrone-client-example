import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
  <button (click)="hello()">Ok</button>
  `,
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  hello() {
    console.log()
  }
}
