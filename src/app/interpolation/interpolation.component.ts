import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css'],
})
export class InterpolationComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  title = 'Learning with Nafiul_Islam';
  array = ['cow', 'cat', 'dog'];
  obj = {
    name: 'nafiul_islam',
    age: 26,
    profession: 'Programmer',
  };
}
