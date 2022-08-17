import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../service/api-service.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-get-apiby-service',
  templateUrl: './get-apiby-service.component.html',
  styleUrls: ['./get-apiby-service.component.css'],
})
export class GetAPIbyServiceComponent implements OnInit {
  constructor(private getService: ApiServiceService) {}
  getResult;
  ngOnInit(): void {}
  getData() {
    this.getService.getData().subscribe((result) => {
      this.getResult = result;
    });
  }
}
