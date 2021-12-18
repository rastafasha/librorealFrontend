import { Component, OnInit, Input } from '@angular/core';
import { NoticiaService } from '../../services/noticia.service';
import { Noticia } from '../../models/noticia';
import { Title } from '@angular/platform-browser';
import { HttpClient, HttpErrorResponse, HttpBackend } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-blogpost-list',
  templateUrl: './blogpost-list.component.html',
  styleUrls: ['./blogpost-list.component.css']
})
export class BlogpostListComponent implements OnInit {

  title = 'Blogs';
  noticias: Noticia;
  error: {};

  @Input () is_visible: boolean;

  private http: HttpClient;

  ServerUrl = environment.baseUrl;

  p: 1;
  count: 4;

  public activeLang = 'es';
  // show box msg
  flag = false;


  constructor(
    private titleService: Title,
    private noticiaService: NoticiaService,
    private translate: TranslateService,
    handler: HttpBackend) {
    this.http = new HttpClient(handler);
    this.translate.setDefaultLang(this.activeLang);
   }

  ngOnInit() {
    this.flag = true;
    // this.titleService.setTitle(this.title);

    this.noticiaService.getNoticias().subscribe(
      (data: Noticia) => this.noticias = data,
      error => this.error = error
    );
    window.scrollTo(0, 0);
  }

  public cambiarLenguaje(lang) {
    this.activeLang = lang;
    this.translate.use(lang);
    this.flag = !this.flag;
    this.is_visible = !this.is_visible;
  }


}
