import { Component, OnInit } from '@angular/core';
import { Noticia } from '../../models/noticia';
import { NoticiaService } from '../../services/noticia.service';
import { TranslateService } from '@ngx-translate/core';

import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpErrorResponse, HttpBackend } from '@angular/common/http';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  public activeLang = 'es';
  // show box msg
  flag = false;

  noticias: Noticia;
   error: string;
   private http: HttpClient;

   ServerUrl = environment.baseUrl;

   p = 1;
   count = 2;



   constructor(
    public noticiaService: NoticiaService,
    private route: ActivatedRoute,
    private translate: TranslateService,

    handler: HttpBackend) {
    this.http = new HttpClient(handler);
    this.translate.setDefaultLang(this.activeLang);
   }





ngOnInit() {

    window.scrollTo(0, 0);
    this.flag = true;

    this.noticiaService.getRecentNoticias().subscribe(
      (data: Noticia) => this.noticias = data,
      error => this.error = error
    );


  }

  public cambiarLenguaje(lang) {
    this.activeLang = lang;
    this.translate.use(lang);
    this.flag = !this.flag;
  }



}
