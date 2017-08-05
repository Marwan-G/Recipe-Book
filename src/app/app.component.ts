import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    storing = 'shoppingList';
  onNavigate(recievedData: string){
  this.storing = recievedData;
}
}
