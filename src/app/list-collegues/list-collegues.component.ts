import {Component, OnInit} from '@angular/core';
import {Collegue} from '../models/list.model';

@Component({
  selector: 'app-list-collegues',
  templateUrl: './list-collegues.component.html',
  styleUrls: ['./list-collegues.component.css']
})
export class ListColleguesComponent implements OnInit {


  collegues: Collegue[];
  selectedCollegue!: Collegue;
  selectNext(max : number) {
    return Math.floor(Math.random() * max);
    //0.1 x 3 =0.3 =0   0.9x3=2.7=2   0.4x3=1.2=1
  }

  constructor() {
    this.collegues = [{
        id: 1,
        name: 'Emma',
        isHere: true
      },
      {
        id: 2,
        name: 'Lea',
        isHere: true
      },
      {
        id: 3,
        name: 'Etienne',
        isHere: true
      },
      {
        id: 4,
        name: 'Paul',
        isHere: false
      },
      {
        id: 5,
        name: 'Jilianne',
        isHere: false
      }
    ]
  }

  ngOnInit(): void {

  }

  onSelect() {
    this.selectedCollegue = this.collegues[this.selectNext(5)];
  }

}
