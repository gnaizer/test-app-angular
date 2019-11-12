import { Item } from './../../../core/models/items';
import { ItemsService } from './../../../core/services/items.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss']
})
export class ViewProductComponent implements OnInit {
  public item: Item;
  constructor(private route: ActivatedRoute,
              private itemsService: ItemsService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = +params.get('id');
      this.itemsService.getItem(id).subscribe(item => {
        this.item = item;
      });
    });
  }

}
