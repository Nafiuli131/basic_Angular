import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css'],
})
export class PipesComponent implements OnInit {
  constructor() {}
  name = 'nafiul islam';
  dob = new Date(1998, 12, 30);
  ngOnInit(): void {}
}
