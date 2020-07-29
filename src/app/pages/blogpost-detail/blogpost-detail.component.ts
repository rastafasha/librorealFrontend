import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';
import { NoticiaService } from '../../services/noticia.service';
import { Noticia } from '../../models/noticia';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-blogpost-detail',
  templateUrl: './blogpost-detail.component.html',
  styleUrls: ['./blogpost-detail.component.css']
})
export class BlogpostDetailComponent implements OnInit {

  noticia$: Observable<Noticia>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private noticiaService: NoticiaService,
    private titleService: Title
  ) { }

  ngOnInit() {
    this.noticia$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.noticiaService.getNoticia(+params.get('id'))
      )
    );

    window.scrollTo(0, 0);

    // this.titleService.setTitle('SVCBMF - Blog Detail');
  }

}
