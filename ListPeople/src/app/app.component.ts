import { Component } from '@angular/core';
import {Person} from "./models/person.class";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'List of people';

  people: Person[] =
    [
    {firstName : 'Ivan1', lastName : 'Ivanov1', age : 21},
    {firstName : 'Ivan2', lastName : 'Ivanov2', age : 22},
    {firstName : 'Ivan3', lastName : 'Ivanov3', age : 23},
    {firstName : 'Ivan4', lastName : 'Ivanov4', age : 24},
    {firstName : 'Ivan5', lastName : 'Ivanov5', age : 25},
    {firstName : 'Ivan6', lastName : 'Ivanov6', age : 26},
    {firstName : 'Ivan7', lastName : 'Ivanov7', age : 27},
    {firstName : 'Ivan8', lastName : 'Ivanov8', age : 28},
    {firstName : 'Ivan9', lastName : 'Ivanov9', age : 29},
    {firstName : 'Ivan10', lastName : 'Ivanov10', age : 30}
    ];

  // catchListEvent(ev: Person) {
  //   // console.log(ev);
  // }


}
