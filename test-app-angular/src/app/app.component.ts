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
  public itemsList: Items[] = [];

  constructor(private http: HttpClient) {
    this.getItemsData();
  }

  public getItemsData() {
    this.http.get('http://localhost:3004/items')
      .subscribe(res => {
        this.itemsList.push(...res as Array<Items>);
        console.log(this.itemsList);
      });
  }
    // "users": {
  //   "id": 1,
  //   "name": "nazar",
  //   "email": "naizer@gmail.com",
  //   "password": "nazar"
  // }
  // {
  //   "id": 1,
  //   "name": "Nazar",
  //   "cost": 1,
  //   "description": "player",
  //   "createdAt": "",
  //   "editedAt": ""
  // }

}
