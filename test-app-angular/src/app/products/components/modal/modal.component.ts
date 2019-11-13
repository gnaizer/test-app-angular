import { Item } from './../../../core/models/items';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  public form: FormGroup;

  constructor(public dialogRef: MatDialogRef<ModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Item) { }

  public onNoClick(): void {
    this.dialogRef.close(null);
  }

  public onSaveClick(): void {
    this.dialogRef.close(this.form.value);
  }
  ngOnInit() {
    this.form = new FormGroup({
      id: new FormControl(this.data ? this.data.id : null),
      name: new FormControl(this.data ? this.data.name : '', Validators.required),
      description: new FormControl(this.data ? this.data.description : '', Validators.required),
      createdAt: new FormControl(this.data && this.data.id ? this.data.createdAt : new Date()),
      editedAt: new FormControl(this.data && this.data.createdAt ? new Date() : '')
    });
  }

}
