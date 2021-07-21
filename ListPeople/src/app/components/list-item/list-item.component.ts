import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Person} from "../../models/person.class";

@Component({
  selector: '[my-tr]',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent {

  @Input("line") row: any;
  @Output() itemClickEvent = new EventEmitter<Person>();

  deleteItem () {
    this.itemClickEvent.emit(this.row);
    // console.log(this.row);
  }
}
