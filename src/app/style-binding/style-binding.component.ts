import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'styleBinding',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.css'],
})
export class StyleBindingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  color = false;
  buttonCol = true;
  changeColor() {
    this.color = !this.color;
  }
  buttonColor() {
    this.buttonCol = !this.buttonCol;
  }
}
