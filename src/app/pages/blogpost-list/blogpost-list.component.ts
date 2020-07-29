import { Component, OnInit } from '@angular/core';
import { NoticiaService } from '../../services/noticia.service';
import { Noticia } from '../../models/noticia';
import { Title } from '@angular/platform-browser';
import { HttpClient, HttpErrorResponse, HttpBackend } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-blogpost-list',
  templateUrl: './blogpost-list.component.html',
  styleUrls: ['./blogpost-list.component.css']
})
export class BlogpostListComponent implements OnInit {

  title = 'Blogs';
  noticias: Noticia;
  error: {};

  private http: HttpClient;

  ServerUrl = environment.baseUrl;

  p: 1;
  count: 4;


  constructor(
    private titleService: Title,
    private noticiaService: NoticiaService,

    handler: HttpBackend) {
    this.http = new HttpClient(handler);
   }

  ngOnInit() {
    // this.titleService.setTitle(this.title);

    this.noticiaService.getNoticias().subscribe(
      (data: Noticia) => this.noticias = data,
      error => this.error = error
    );
  }

}
