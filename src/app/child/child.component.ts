import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  constructor() {}
  @Input() passData;
  @Output() newItemEvent = new EventEmitter<string>();
  ngOnInit(): void {
    // this.newItemEvent.emit("Hello Nafiul");
  }
    
  addNewItem( ) {
    this.newItemEvent.emit("Hello Nafiul");
   
  }
}
