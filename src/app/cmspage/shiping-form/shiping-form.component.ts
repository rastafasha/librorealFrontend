import { Component, OnInit } from '@angular/core';
import { CmspageService } from '../cmspage.service';
import { Contact } from '../contact';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-shiping-form',
  templateUrl: './shiping-form.component.html',
  styleUrls: ['./shiping-form.component.css']
})
export class ShipingFormComponent implements OnInit {

  model = new Contact();
  submitted = false;
  error: any = {};
  public activeLang = 'es';
  // show box msg
  flag = false;

  constructor(
    private router: Router,
    private cmspageService: CmspageService,
    private translate: TranslateService,
  ) {
    this.translate.setDefaultLang(this.activeLang);
  }

  ngOnInit() {
    window.scrollTo(0,0);
  }

  onSubmit() {
    this.submitted = true;
    return this.cmspageService.contactForm(this.model).subscribe(
      data => this.model = data,
      error => this.error = error
    );

  }

  gotoHome() {
    this.router.navigate(['/']);
  }

}
