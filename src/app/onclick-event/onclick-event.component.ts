import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onclick-event',
  templateUrl: './onclick-event.component.html',
  styleUrls: ['./onclick-event.component.css'],
})
export class OnclickEventComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  button_1() {
    alert('button_1 without parameter');
  }
  button_2(a, b) {
    alert(
      'sum is ' +
        (a + b) +
        ' multiplication is ' +
        a * b +
        ' subtraction is ' +
        (a - b) +
        ' division is ' +
        a / b
    );
  }
}
