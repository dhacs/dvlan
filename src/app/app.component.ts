import { Component } from '@angular/core';
import { OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})

export class AppComponent implements OnInit {
  page = {
    title: '530angularsite',
    subtitle: 'Angular Site Lab',
  };

  title = '530angularsite';

  constructor() { }

  ngOnInit() { }

}
