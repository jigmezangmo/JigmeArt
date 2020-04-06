import { Component, OnInit } from '@angular/core';
import { ShareService } from '../shared/share.service';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  
  constructor(
    private shareService: ShareService
  ) { }

  ngOnInit(): void {
   
  }

}
