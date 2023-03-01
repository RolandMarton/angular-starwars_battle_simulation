import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss']
})
export class ErrorPageComponent implements OnInit {
  errorMessage: string;
  errorMessage2: string;

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.data.subscribe(
      (data: Data) => {
        this.errorMessage = data['message'];
        this.errorMessage2 = data['message2'];
      }
    )
  }

}
