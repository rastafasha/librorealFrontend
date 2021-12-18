import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    window.scrollTo(0,0);
  }

}
