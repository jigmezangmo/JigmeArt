import { Component, OnInit } from '@angular/core';
import { ShareService } from 'src/app/shared/share.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(
    private shareservice:ShareService
  ) { }

  ngOnInit(): void {
  }
getAllshopingform(){
  this.shareservice.getAllShoppingforms().subscribe(
    function abc(){
      
    }
  )
}
}
