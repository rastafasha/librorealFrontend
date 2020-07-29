import { Component, OnInit } from '@angular/core';
import { CmspageService } from '../cmspage.service';
import { Contact } from '../contact';
import { Router } from '@angular/router';

@Component({
  selector: 'app-preiscripcion-form',
  templateUrl: './preiscripcion-form.component.html',
  styleUrls: ['./preiscripcion-form.component.css']
})
export class PreiscripcionFormComponent implements OnInit {

  model = new Contact();
  submitted = false;
  error: any = {};

  constructor(
    private router: Router,
    private cmspageService: CmspageService
  ) { }

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
