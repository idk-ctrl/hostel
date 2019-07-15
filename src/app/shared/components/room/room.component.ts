import { Component, OnInit } from '@angular/core';

export class Room {
  id: number;
  Nomer: number;
  storona: string;
}

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {

  constructor() {}

  ngOnInit() {}

}
