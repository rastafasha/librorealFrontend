import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-lateral',
  templateUrl: './lateral.component.html',
  styleUrls: ['./lateral.component.css']
})
export class LateralComponent implements OnInit {

  // tslint:disable-next-line: variable-name
  @Input() is_visible: boolean;

  @Output() heroe: EventEmitter<boolean>;

  @Input() label: string;

  public activeLang = 'es';

  flag = false;
   // tslint:disable-next-line: variable-name
   crud_operation = {is_visible: false };


  constructor(
    private router: Router,
    private translate: TranslateService
    ) {
    this.translate.setDefaultLang(this.activeLang);
    this.heroe = new EventEmitter();
  }

  ngOnInit() {
    this.flag = true;
  }

  public cambiarLenguaje(lang) {
    this.activeLang = lang;
    this.translate.use(lang);
    this.flag = !this.flag;
    this.is_visible = !this.is_visible;
  }

}
