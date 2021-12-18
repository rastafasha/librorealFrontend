import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpErrorResponse, HttpBackend } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public activeLang = 'es';
  // show box msg
  flag = false;
   error: string;
   private http: HttpClient;

   ServerUrl = environment.baseUrl;

   p = 1;
   count = 2;


  constructor(
    private route: ActivatedRoute,
    private translate: TranslateService,

    handler: HttpBackend) {
    this.http = new HttpClient(handler);
    this.translate.setDefaultLang(this.activeLang);
   }





ngOnInit() {

    window.scrollTo(0, 0);
    this.flag = true;

  }

  public cambiarLenguaje(lang) {
    this.activeLang = lang;
    this.translate.use(lang);
    this.flag = !this.flag;
  }



}
