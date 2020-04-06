import { Component, OnInit } from '@angular/core';
import { ShareService } from 'src/app/shared/share.service';
@Component({
  selector: 'app-shopping-form',
  templateUrl: './shopping-form.component.html',
  styleUrls: ['./shopping-form.component.css']
})
export class ShoppingFormComponent implements OnInit {

  customs = ['custom1','custom2','custom3','custom4','custom5','custom6','custom7','custom8'];
  public greeting= "";

  constructor(
    private shareservice: ShareService
  ) { }

  ngOnInit(): void {
    
  }
onClick (event) {
  console.log(event);
  this.greeting= 'Thank You! We received your order & will process it within the next 24hours!'
}

  
}
