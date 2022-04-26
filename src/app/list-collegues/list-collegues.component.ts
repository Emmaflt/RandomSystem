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
  }

  isPresent (element : Collegue) {
    return element.present;
  }

  // isHere = this.collegues.isHere.filter(isHere = true);

  constructor() {
    this.collegues = [{
        id: 1,
        name: 'Emma',
        present: true
      },
      {
        id: 2,
        name: 'Lea',
        present: true
      },
      {
        id: 3,
        name: 'Etienne',
        present: true
      },
      {
        id: 4,
        name: 'Paul',
        present: false
      },
      {
        id: 5,
        name: 'Jilianne',
        present: false
      },
      {
        id: 6,
        name: 'Michael',
        present: false
      },
      {
        id: 7,
        name: 'Harald',
        present: false
      },
      {
        id: 5,
        name: 'Jilianne',
        present: false
      }
    ]
  }

  ngOnInit(): void {
  }

  onSelect() {
    this.selectedCollegue = this.collegues.filter(this.isPresent)[this.selectNext(this.collegues.length)];
  }




}
