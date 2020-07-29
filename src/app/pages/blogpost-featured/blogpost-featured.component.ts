import { Component, OnInit } from '@angular/core';
import { NoticiaService } from '../../services/noticia.service';
import { Noticia } from '../../models/noticia';

@Component({
  selector: 'app-blogpost-featured',
  templateUrl: './blogpost-featured.component.html',
  styleUrls: ['./blogpost-featured.component.css']
})
export class BlogpostFeaturedComponent implements OnInit {

  noticias: Noticia;
  error: {};

  constructor(
    private noticiaService: NoticiaService
  ) { }

  ngOnInit() {
    this.noticiaService.getFeaturedNoticias().subscribe(
      (data: Noticia) => this.noticias = data,
      error => this.error = error
    );
  }

}
