import { Injectable } from '@angular/core';
import { Noticia } from '../models/noticia';
import { HttpClient, HttpErrorResponse, HttpBackend } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  ServerUrl = environment.baseUrl;
  errorData: {};

  private http: HttpClient;


  constructor(handler: HttpBackend) {
      this.http = new HttpClient(handler);
  }

  getNoticias() {
    return this.http.get<Noticia>(this.ServerUrl + 'api_noticia/Noticias/').pipe(
      catchError(this.handleError)
    );
  }


  getNoticia(id: number) {
    return this.http.get<Noticia>(this.ServerUrl + 'api_noticia/Noticia/' + id)
    .pipe(
      catchError(this.handleError)
    );
  }

  getFeaturedNoticias() {
    return this.http.get<Noticia>(this.ServerUrl + 'api_noticia/featured_noticias/').pipe(
      catchError(this.handleError)
    );
  }

  getRecentNoticias() {
    return this.http.get<Noticia>(this.ServerUrl + 'api_noticia/recent_noticias').pipe(
      catchError(this.handleError)
    );
  }






  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    this.errorData = {
      errorTitle: 'Oops! Request for document failed',
      errorDesc: 'Something bad happened. Please try again later.'
    };
    return throwError(this.errorData);
  }
}
