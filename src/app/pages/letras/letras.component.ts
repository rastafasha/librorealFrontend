import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpBackend } from '@angular/common/http';
import { Letra } from '../../models/letras';
import { LetraService } from '../../services/letra.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-letras',
  templateUrl: './letras.component.html',
  styleUrls: ['./letras.component.css']
})
export class LetrasComponent implements OnInit {

  letras: Letra;

  error: string;

  documentos;

  letra;

  private http: HttpClient;

  ServerUrl = environment.baseUrl;

  p: number = 1;
  count: number = 10;


  constructor(
    public letraService: LetraService,

    handler: HttpBackend) {
    this.http = new HttpClient(handler);
   }

  ngOnInit() {

    this.letraService.getLetras().subscribe(
      (data: Letra) => this.letras = data,
      error => this.error = error
    );

    window.scrollTo(0,0);
    this.search;
    
  }
  

  search( text: string) {// funciona, devuelve la busqueda


    if( this.search.length == 0){
      return;
    }

    return this.http.get(this.ServerUrl + 'api_buscador/search?text=' + text )
      .toPromise()
      .then(letra=>{
        this.letra= {'results': JSON.stringify(letra, null),
        
        'json': ()=>{
          return letra;
        }
        
      };
      //this.product= product
      //console.log("Mostrando resultado final:");
      //console.log(product);

      // devolver el array     
      const mapped = Object.keys(letra)
      .map(key => ({type: key, value: letra[key]}));
      
      console.log(letra);
      this.letra = letra;

      });
      
  }

}
