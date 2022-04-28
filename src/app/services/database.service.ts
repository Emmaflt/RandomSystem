import {Injectable, OnInit} from '@angular/core';
import { CrudService } from '../service/crud.service';

@Injectable()
export class DatabaseService implements OnInit {

  Collegues:any = [];

  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
  }

  /*delete(id:any, i:any) {
    console.log(id);
    if(window.confirm('Do you want to go ahead?')) {
      this.crudService.deleteCollegue(id).subscribe((res) => {
        this.Collegues.splice(i, 1);
      })
    }
  }*/





/* import {Injectable} from "@angular/core";
import {Collegue} from "../models/list.model";


@Injectable()
export class DatabaseService {
  //export const collections: { collegue?: mongoDB.Collection } = {}

  colleguelist: ;

  constructor() {
    this.collegueList = this.formBuilder.group({
      id: [''],
      name : [''],
      present: ['']
    }
  }

  const findCollegue = async name => {
    const collegue = await Collegue.findOne({name})
    return collegue
  } */


  /*

    private async connectToDatabase() {


      const client: mongoDB.MongoClient = new mongoDB.MongoClient(environment.mongodb.DB_CONN_STRING);

      await client.connect();

      const db: mongoDB.Db = client.db(environment.mongodb.DB_NAME);

      const collegueCollection: mongoDB.Collection = db.collection(environment.mongodb.RANDOMSYSTEM_COLLECTION_NAME);

      console.log(`Successfully connected to database: ${db.databaseName} and collection: ${collegueCollection.collectionName}`);


    }


    getCollegue(): string {

      //mongoDB.Collection

      return "";
    }
    */

}
