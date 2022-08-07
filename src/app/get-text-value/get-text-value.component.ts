import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-text-value',
  templateUrl: './get-text-value.component.html',
  styleUrls: ['./get-text-value.component.css'],
})
export class GetTextValueComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  getTextValue(val) {
    alert(val.value);
  }
  inputVal(item){
    alert(item.target.value)
  }
}
