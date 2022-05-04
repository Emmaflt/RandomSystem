import {Injectable} from '@angular/core';
import {Collegue} from '../models/list.model';
import {catchError, flatMap, map} from 'rxjs/operators';
import {Observable, of, throwError} from 'rxjs';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CrudService {

  // Node/Express API
  REST_API: string = 'http://localhost:8000/api';

  // Http Header
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) {
  }





  //----------------- Zone Captain --------------------//
  // Get Captain
  getCaptain(): Observable<any> {
    let API_URL = `${this.REST_API}/read-all-captains`;
    return this.httpClient.get(API_URL, {headers: this.httpHeaders})
      .pipe(map((res: any) => {
            console.log(res[0])
            return res[0];
          },
          (error : any) => {
            console.log(error);
            catchError(this.handleError);
          }
        )
      )
  }

  // Choose
  chooseCaptain(newCaptain: Collegue): Observable<any> {
    return this.getCaptain().pipe(
      map((oldCaptain: Collegue) => {
        if (!oldCaptain) {
          // new captain
          console.log(" Add captain", newCaptain);
          this.addCaptain(newCaptain);
          return of(newCaptain);
        }
        if (oldCaptain.name === newCaptain.name) {
          console.log("Meme captain", newCaptain);
          return of(oldCaptain);
        } else {
          console.log(" Update new captain", newCaptain);
          this.updateCaptain(oldCaptain._id, newCaptain);
          return of(newCaptain);
        }
      }));
  }

  // Add
  private addCaptain(captain: Collegue): void {
    console.log("dans addCaptain de crud service");
    let API_URL = `${this.REST_API}/add-captain`;
    this.httpClient.post(API_URL, captain).subscribe();
      /*.pipe(
        catchError(this.handleError)
      )*/
  }

  // Update
  private updateCaptain(id: any, captain: Collegue): void {
    let API_URL = `${this.REST_API}/update-captain/${id}`;
    this.httpClient.put(API_URL, captain, {headers: this.httpHeaders}).subscribe();
  }

  //----------------- Fin Zone Captain --------------------//


  // Get all objects
  getCollegues(): any {
    return this.httpClient.get(`${this.REST_API}`);
  }

  // Get single object
  getCollegue(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/read-collegue/${id}`;
    return this.httpClient.get(API_URL, {headers: this.httpHeaders})
      .pipe(map((res: any) => {
          return res || {}
        }),
        catchError(this.handleError)
      )
  }

  // Delete
  deleteCollegue(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/delete-collegue/${id}`;
    return this.httpClient.delete(API_URL, {headers: this.httpHeaders}).pipe(
      catchError(this.handleError)
    )
  }

  // Error
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Handle client error
      errorMessage = error.error.message;
    } else {
      // Handle server error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
