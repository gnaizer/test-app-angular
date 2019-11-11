import { ItemsService } from './core/services/items.service';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Items } from './core/models/items';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() { }

}
