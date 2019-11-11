import { ModalComponent } from './components/modal/modal.component';
import { Component } from '@angular/core';
import { Item } from '../core/models/items';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmModalComponent } from '../core/components/confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  public displayedColumns: string[] = ['id', 'name', 'description', 'createdAt', 'editedAt', 'Edit Item'];
  public itemsList: Item[] = [];
  public dataSource = new MatTableDataSource(this.itemsList);

  constructor(private http: HttpClient,
    // tslint:disable-next-line: align
    public dialog: MatDialog) {
    this.getItemsData();
    console.log(this.dataSource);
  }

  public openDialog(element: Item = null ): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '400px',
      data: element ? element : null
    });

    dialogRef.afterClosed().pipe().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      if (result) {
        this.http.put(`http://localhost:3004/items/${result.id}`, result).subscribe(x => {
          console.log(x);
        });
      } else {
        this.http.post('http://localhost:3004/items', result).subscribe(x => {
          console.log(x);
        });
      }
      // this.itemsList = result;
    });
  }

  public getItemsData() {
    this.http.get('http://localhost:3004/items')
      .subscribe(res => {
        this.itemsList.push(...(res as Array<Item>));
        this.dataSource = new MatTableDataSource(this.itemsList);
      });
  }

  public openConfirmDialog(element: Item): void {
    const dialogRef = this.dialog.open(ConfirmModalComponent, {
      width: '400px',
      data: element.id
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.http.delete(`http://localhost:3004/items/${result}`).subscribe();
      }
    });
  }

  public applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
