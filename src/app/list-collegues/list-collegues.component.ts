import {Component, OnInit} from '@angular/core';
import {Collegue} from '../models/list.model';
import {CrudService} from "../service/crud.service";
import {of} from "rxjs";
// import {anySymbolName} from "@angular/core/schematics/migrations/typed-forms/util";

@Component({
  selector: 'app-list-collegues',
  templateUrl: './list-collegues.component.html',
  styleUrls: ['./list-collegues.component.css']
})

export class ListColleguesComponent implements OnInit {

  private IMG_DIR: string = "../assets/img/[NAME].jpg";

  collegues: Collegue[] = [];
  selectedCollegue!: Collegue;

  constructor(private crudService : CrudService) {
  }

  ngOnInit(): void {
    this.crudService.getCollegues().subscribe((res : any) => {
      this.collegues =res.filter(this.isPresent);
    });

    this.crudService.getCaptain().subscribe((res : any) => {
      this.selectedCollegue =res;
      console.log("collegue sélectionner :")
      console.log(this.selectedCollegue)
    });
  }

  selectNext(max : number): number {
    let result = Math.floor(Math.random() * max);
    return result;
  }

  isPresent (element : Collegue) {
    return element.present;
  }

  onSelect() {
    this.selectedCollegue = this.collegues[this.selectNext(this.collegues.length)];
    console.log(this.selectedCollegue);
    this.crudService.chooseCaptain(this.selectedCollegue).subscribe((res : any) => {
    }, (error)=> {
      console.log('J\'ai eu une erreur' + error)
    });
  }

  public getImageDir(individu: Collegue): string {
    return this.IMG_DIR.replace("[NAME]", individu.name);
  }
}
