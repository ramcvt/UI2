import { Component } from '@angular/core';
import { GlobalsService } from './services/globals.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public userName:string = localStorage.getItem('cust-name');

  title = 'food-order';

  constructor(private global:GlobalsService) {
    
   }
}
