import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private actr: ActivatedRoute) {
    this.actr.data.pipe(
      map( e => console.log(e))
    )
   }

  ngOnInit(): void {
  }

}
