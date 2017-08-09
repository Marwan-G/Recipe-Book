import {Component, EventEmitter, Output} from '@angular/core';
import {validate} from "codelyzer/walkerFactory/walkerFn";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class AppHeader{
  @Output() tabSelected = new EventEmitter<string>();
  onSelect(feature:string){
      this.tabSelected.emit(feature);
  }
  constructor(){

  }

}
