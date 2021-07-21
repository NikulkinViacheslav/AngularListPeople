import {Component, EventEmitter, Input, Output} from "@angular/core";
import {Person} from "../../models/person.class";

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input() people: Person[] | undefined;
  @Output() listClickEvent = new EventEmitter<Person>();

  catchItemEvent(ev: Person, idx: number) {
    // console.log(ev);
    // console.log(idx);
    this.listClickEvent.emit(ev);
    this.people?.splice(idx, 1);
    // console.log(this.people?.length);
  }

}
