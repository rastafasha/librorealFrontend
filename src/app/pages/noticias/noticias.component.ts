import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpBackend } from '@angular/common/http';
import { Noticia } from '../../models/noticia';
import { NoticiaService } from '../../services/noticia.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  noticias: Noticia;

  error: string;

  private http: HttpClient;

  ServerUrl = environment.baseUrl;

  // show box msg
flag = true;

p = 1;
count = 5;


constructor(
    public noticiaService: NoticiaService,

    handler: HttpBackend) {
    this.http = new HttpClient(handler);
   }

ngOnInit() {

    window.scrollTo(0, 0);

    this.noticiaService.getNoticias().subscribe(
      (data: Noticia) => this.noticias = data,
      error => this.error = error
    );

    this.flag = true;

  }



  public cambiarLenguaje(lang) {
    this.flag = false;
  }

}
