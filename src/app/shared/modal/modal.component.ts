import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { VideoService } from '../../services/video.service';
import { HttpClient, HttpErrorResponse, HttpBackend } from '@angular/common/http';
import { Video } from '../../models/videos';
import { environment } from '../../../environments/environment';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';



@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})


export class ModalComponent implements OnInit {
  


  audios: Video;
  error: string;

  private http: HttpClient;

  ServerUrl = environment.baseUrl;

  constructor(private videoService: VideoService,  private _sanitizer: DomSanitizer
    ) { }

  ngOnInit() {
    this.videoService.getVideos().subscribe(
      (data: Video) => this.audios = data,
      error => this.error = error
    );
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

close() {
  let video = <HTMLVideoElement>document.getElementById("videyou");
    if(video.play) {

      video.pause();
    }
    else {
      video.pause();
    }


  }


}
