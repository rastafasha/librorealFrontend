import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NoticiaService } from '../../services/noticia.service';
import { Noticia } from '../../models/noticia';

@Component({
  selector: 'app-blogpost-recent',
  templateUrl: './blogpost-recent.component.html',
  styleUrls: ['./blogpost-recent.component.css']
})
export class BlogpostRecentComponent implements OnInit {



  constructor(private noticiaService: NoticiaService, private route: ActivatedRoute) { }

  noticias: Noticia;
  error: {};

  ngOnInit() {
    this.noticiaService.getNoticias().subscribe(
      (data: Noticia) => this.noticias = data,
      error => this.error = error
    );

  }

}
