import {Component, OnInit} from '@angular/core';
import {Collegue} from '../models/list.model';
import {CrudService} from "../service/crud.service";

//import {DatabaseService} from "../services/database.service";

@Component({
  selector: 'app-list-collegues',
  templateUrl: './list-collegues.component.html',
  styleUrls: ['./list-collegues.component.css']
  //providers: [DatabaseService]
})

export class ListColleguesComponent implements OnInit {

  collegues: Collegue[] = [];
  selectedCollegue!: Collegue;


  constructor(private crudService : CrudService) {
      //this.databaseService.getCollegue();
  }

  ngOnInit(): void {
    this.crudService.getCollegues().subscribe((res : any) => {
      this.collegues =res;
    });
  }


  selectNext(max : number) {
    return Math.floor(Math.random() * max);
  }

  isPresent (element : Collegue) {
    return element.present;
  }



  onSelect() {
    this.selectedCollegue = this.collegues.filter(this.isPresent)[this.selectNext(this.collegues.length)];
  }




}
