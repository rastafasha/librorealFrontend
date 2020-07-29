import { Component, OnInit } from '@angular/core';
import { NoticiaService } from '../../services/noticia.service';
import { Noticia } from '../../models/noticia';

@Component({
  selector: 'app-blogpost-recent',
  templateUrl: './blogpost-recent.component.html',
  styleUrls: ['./blogpost-recent.component.css']
})
export class BlogpostRecentComponent implements OnInit {

  noticias: Noticia;
  error: {};

  constructor(private noticiaService: NoticiaService) { }

  ngOnInit() {
    this.noticiaService.getRecentNoticias().subscribe(
      (data: Noticia) => this.noticias = data,
      error => this.error = error
    );

  }

}
