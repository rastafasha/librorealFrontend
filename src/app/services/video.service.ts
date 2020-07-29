import { Injectable } from '@angular/core';
import { Video } from '../models/videos';
import { HttpClient, HttpErrorResponse, HttpBackend } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  ServerUrl = environment.baseUrl;
  errorData: {};

  private http: HttpClient;


  constructor(handler: HttpBackend) {
      this.http = new HttpClient(handler);
  }

  getVideos() {
    return this.http.get<Video>(this.ServerUrl + 'api_video/Videos/');
  }


  getVideo(id: number) {
    return this.http.get<Video>(this.ServerUrl + 'api_video/Video/' + id);
  }


}
