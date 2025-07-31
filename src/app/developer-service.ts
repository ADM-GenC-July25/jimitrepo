import { Injectable } from '@angular/core';
import { Developer } from './developer';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DeveloperService {

  private baseUrl = 'https://dev-bios-api-dot-cog01hprmn542jqme4w772bk1dxpr.uc.r.appspot.com/developers/';

  devs: Developer[] = [];

  postHeaders = new HttpHeaders({
    'Content-Type': 'application/json' 
  });

  // constructor() {
    
  //   this.devs = [
  //     new Developer(1, 'John', 'Doe', 'JavaScript', 2015),
  //     new Developer(2, 'Jane', 'Smith', 'TypeScript', 2016)
  //   ];
  // }

  constructor(private http: HttpClient) { }

  getAllDevelopers(): Observable<Developer[]> {
    return this.http.get<Developer[]>(this.baseUrl+"all").pipe(
      map(response => {this.devs = response; return response;}),
      catchError(this.handleError<Developer[]>('getAllDevelopers', []))
    );
  }

  addDeveloper(developer: Developer): boolean {
    this.http.post<Developer>(this.baseUrl + "add", developer, { headers: this.postHeaders }).pipe(
      tap((newDev: Developer) => this.devs.push(newDev)),
      catchError(this.handleError<Developer>('addDeveloper'))
    ).subscribe();

    return true;
  }

  handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
    console.error(`${operation} failed: ${error.message}`);
    return of(result as T);
  };
}


  /*getAllDevelopers(): Developer[] {
    return this.devs;
  }*/

  getDeveloperById(id: string): Developer | undefined {
    return this.devs.find(dev => dev.id === id);
  }

}