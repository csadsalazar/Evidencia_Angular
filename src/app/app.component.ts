// src/app/app.component.ts

import { Component, OnDestroy } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnDestroy {
  constructor(private dataService: DataService) {}

  ngOnDestroy() {
    this.dataService.ngOnDestroy();
  }
}
