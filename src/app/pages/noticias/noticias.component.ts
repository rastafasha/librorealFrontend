import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpBackend } from '@angular/common/http';
import { Noticia } from '../../models/noticia';
import { NoticiaService } from '../../services/noticia.service';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

   // tslint:disable-next-line: variable-name
   is_visible: boolean;
   label = 'botonlateral';

   public activeLang = 'es';
  // show box msg
  flag = false;

  noticias: Noticia;

   error: string;

   private http: HttpClient;

   ServerUrl = environment.baseUrl;

   p = 1;
   count = 5;


constructor(
    public noticiaService: NoticiaService,
    private router: Router,
    private translate: TranslateService,

    handler: HttpBackend) {
    this.http = new HttpClient(handler);
    this.translate.setDefaultLang(this.activeLang);
   }



ngOnInit() {

    window.scrollTo(0, 0);
    this.flag = true;

    this.noticiaService.getNoticias().subscribe(
      (data: Noticia) => this.noticias = data,
      error => this.error = error
    );

  }

  public cambiarLenguaje(lang) {
    this.activeLang = lang;
    this.translate.use(lang);
    this.flag = !this.flag;
    this.is_visible = !this.is_visible;
  }

  functioncall(event) {
    console.log('functioncall', event);
  }


}
