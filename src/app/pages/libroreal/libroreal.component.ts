import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-libroreal',
  templateUrl: './libroreal.component.html',
  styleUrls: ['./libroreal.component.css']
})
export class LibrorealComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0,0);
  }

}
