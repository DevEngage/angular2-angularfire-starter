import { Component, OnInit } from '@angular/core';
import {AngularFire} from 'angularfire2';
import {Observable} from 'rxjs/Observable';

@Component({
  moduleId: module.id,
  selector: 'app-chat',
  templateUrl: 'chat.component.html',
  styleUrls: ['chat.component.css']
})
export class ChatComponent {
  items: Observable<any[]>;
  message: string;
  constructor(af: AngularFire) {
    // create a list at /items
    this.items = af.database.list('/table-elements');
  }

  addMessage(message: string) {
    // this.items.push(message);
    this.message = '';
  }

}
