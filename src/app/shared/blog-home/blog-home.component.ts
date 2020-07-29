import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpBackend } from '@angular/common/http';
import { Noticia } from '../../models/noticia';
import { NoticiaService } from '../../services/noticia.service';
import { environment } from '../../../environments/environment';

// import { NguCarouselConfig } from '@ngu/carousel';

import 'hammerjs';

@Component({
  selector: 'app-blog-home',
  templateUrl: './blog-home.component.html',
  styles: []
})
export class BlogHomeComponent implements OnInit {

  noticias: Noticia;
  error: {};

  number: any;
  Number = [];

  constructor(
    public noticiaService: NoticiaService) {
   }

  ngOnInit() {


    this.noticiaService.getRecentNoticias().subscribe(

      (data: Noticia) => this.noticias = data,
      error => this.error = error
      );

    window.scrollTo(0, 0);

  }


}
