import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forloop',
  templateUrl: './forloop.component.html',
  styleUrls: ['./forloop.component.css']
})
export class ForloopComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  fruits=['mango','apple','guava','banana']
  info = [{
    'name':"nafiul",
    'age':26
  },
{
  'name':"nafi",
  'age':26
},
{
  'name':"nafiul",
  'age':25
}
]
}
