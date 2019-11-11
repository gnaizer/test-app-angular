import { Component } from '@angular/core';
import { Items } from '../core/models/items';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  public displayedColumns: string[] = ['id', 'name', 'description', 'createdAt', 'editedAt'];
  public itemsList: Items[] = [];
  public dataSource = new MatTableDataSource(this.itemsList);

  constructor(private http: HttpClient) {
    this.getItemsData();
    console.log(this.dataSource);
  }

  public getItemsData() {
    this.http.get('http://localhost:3004/items')
      .subscribe(res => {
        this.itemsList.push(...(res as Array<Items>));
        console.log(this.itemsList);
        this.dataSource = new MatTableDataSource(this.itemsList);
      });
  }

  public applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
