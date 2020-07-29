import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpBackend } from '@angular/common/http';
import { Video } from '../../models/videos';
import { VideoService } from '../../services/video.service';
import { environment } from '../../../environments/environment';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {


  videos: Video;
  error: string;
  audios;

  private http: HttpClient;

  ServerUrl = environment.baseUrl;

  p: number = 1;
  count: number = 4;


  constructor(
    public videoService: VideoService, private _sanitizer: DomSanitizer,

    handler: HttpBackend) {
    this.http = new HttpClient(handler);
   }

  ngOnInit() {

    window.scrollTo(0,0);

    this.videoService.getVideos().subscribe(
      (data: Video) => this.videos = data,
      error => this.error = error
    );

  }


  search( text: string) {// funciona, devuelve la busqueda


    if( this.search.length == 0){
      return;
    }

    return this.http.get(this.ServerUrl + 'api_buscador_video/searchvideo?text=' + text )
      .toPromise()
      .then(audios=>{
        this.audios= {'results': JSON.stringify(audios, null),

        'json': ()=>{
          return audios;
        }

      };
      //this.product= product
      //console.log("Mostrando resultado final:");
      //console.log(product);

      // devolver el array
      const mapped = Object.keys(audios)
      .map(key => ({type: key, value: audios[key]}));

      //console.log(audios);
      this.audios = audios;

      });

  }

  getVideoIframe(url) {
    var video, results;

    if (url === null) {
        return '';
    }
    results = url.match('[\\?&]v=([^&#]*)');
    video   = (results === null) ? url : results[1];

    return this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + video);
}




}
