import { ItemsService } from './../core/services/items.service';
import { ModalComponent } from './components/modal/modal.component';
import { Component } from '@angular/core';
import { Item } from '../core/models/items';
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

  constructor(public dialog: MatDialog,
              private itemsService: ItemsService) {
    this.getAllItems();
  }

  public getAllItems() {
    this.itemsService.getItems().subscribe(result => {
      this.itemsList = result as Item[];
      this.dataSource = new MatTableDataSource(this.itemsList);
    });
  }

  public openDialog(item: Item): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '400px',
      data: item
    });

    dialogRef.afterClosed().subscribe((result: Item) => {
      if (result === null) {
        return;
      } else if (result && result.id) {
        this.itemsService.updateItem(result.id, result).subscribe(data => {
          this.getAllItems();
        });
      } else {
        this.itemsService.createItem(result).subscribe(data => {
          this.getAllItems();
        });
      }
    });
  }

  public openConfirmDialog(element: Item): void {
    const dialogRef = this.dialog.open(ConfirmModalComponent, {
      width: '400px',
      data: element
    });
    dialogRef.afterClosed().subscribe(id => {
      if (id) {
        this.itemsService.deleteItem(id).subscribe(data => {
          this.getAllItems();
        });
      }
    });
    this.getAllItems();
  }

  public applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
