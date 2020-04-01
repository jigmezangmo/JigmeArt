import { Component, OnInit } from '@angular/core';
import { ShareService } from 'src/app/shared/share.service';
import { shoppingform } from './shopping.module';

@Component({
  selector: 'app-shopping-form',
  templateUrl: './shopping-form.component.html',
  styleUrls: ['./shopping-form.component.css']
})
export class ShoppingFormComponent implements OnInit {

  customs = ['custom1','custom2','custom3','custom4','custom5','custom6','custom7','custom8'];
  allShoppingform: shoppingform[];
  constructor(
    private shareservice: ShareService
  ) { }

  ngOnInit(): void {
    this.getAllShoppingform();
  }

  getAllShoppingform() {
    this.shareservice.getAllShoppingforms().subscribe(
      (data:shoppingform[]) => {
        this.allShoppingform = data;
      });
  }
}
