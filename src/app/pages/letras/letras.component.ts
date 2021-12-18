import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpBackend } from '@angular/common/http';
import { Letra } from '../../models/letras';
import { LetraService } from '../../services/letra.service';
import { environment } from '../../../environments/environment';
import { TranslateService } from '@ngx-translate/core';

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

  public activeLang = 'es';
  // show box msg
  flag = false;


  constructor(
    public letraService: LetraService,
    private translate: TranslateService,

    handler: HttpBackend) {
    this.http = new HttpClient(handler);
    this.translate.setDefaultLang(this.activeLang);
   }

  ngOnInit() {

    this.letraService.getLetras().subscribe(
      (data: Letra) => this.letras = data,
      error => this.error = error
    );

    window.scrollTo(0,0);
    this.search;
    this.flag = true;

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

  public cambiarLenguaje(lang) {
    this.activeLang = lang;
    this.translate.use(lang);
    this.flag = !this.flag;
  }

}
