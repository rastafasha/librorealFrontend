import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';
import { NoticiaService } from '../../services/noticia.service';
import { Noticia } from '../../models/noticia';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-blogpost-detail',
  templateUrl: './blogpost-detail.component.html',
  styleUrls: ['./blogpost-detail.component.css']
})
export class BlogpostDetailComponent implements OnInit {

  @Input () noticia: any = {};
   // tslint:disable-next-line: variable-name
   @Input () is_visible: boolean;

  noticia$: Observable<Noticia>;

  public activeLang = 'es';
  // show box msg
  flag = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private noticiaService: NoticiaService,
    private titleService: Title,
    private translate: TranslateService,
  ) {
    this.translate.setDefaultLang(this.activeLang);
  }

  ngOnInit() {
    this.noticia$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.noticiaService.getNoticia(+params.get('id'))
      )
    );

    window.scrollTo(0, 0);

    // this.titleService.setTitle('SVCBMF - Blog Detail');

    this.flag = true;
  }

  public cambiarLenguaje(lang) {
    this.activeLang = lang;
    this.translate.use(lang);
    this.flag = !this.flag;
    this.is_visible = !this.is_visible;
  }

}
