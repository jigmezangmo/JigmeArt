import { Component, OnInit } from '@angular/core';
import { ShareService } from 'src/app/shared/share.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor(
    private ShareService: ShareService
  ) { }

  ngOnInit(): void {
  }
  
}
