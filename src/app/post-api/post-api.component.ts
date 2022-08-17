import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-post-api',
  templateUrl: './post-api.component.html',
  styleUrls: ['./post-api.component.css'],
})
export class PostApiComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}
  onClickSubmit(data) {
    data = {
      p_name: data.projecetName,
      c_name: data.companyName,
    };

    this.http
      .post('http://localhost:8080/saveProject', data)
      .subscribe((result) => {
        console.log(result);
      });
  }
}
