import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule, HttpClient } from '@angular/common/http';


// pages
import { HomeComponent, LetrasComponent , VideosComponent,
  ClasesComponent, MarkComponent, LibrorealComponent,
  NoticiasComponent, GraciasComponent, PreguntasComponent,
  ComprarComponent, PreinscripcionComponent,
  ContactComponent,
  BlogpostListComponent, BlogpostDetailComponent, BlogpostRecentComponent, BlogpostFeaturedComponent,   } from './pages/index.paginas';

// shared
import { SharedModule } from './shared/shared.modulo';

import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

// paginacion
import {NgxPaginationModule} from 'ngx-pagination';


// pipe
import { EscapeHtmlPipe } from './pipes/keep-html.pipe';
import {KeysPipe} from './pipes/keys.pipe';

import { NguCarouselModule } from '@ngu/carousel';

// formularios
import { ContactFormComponent } from './cmspage/contact-form/contact-form.component';
import { ShipingFormComponent } from './cmspage/shiping-form/shiping-form.component';
import { PreiscripcionFormComponent } from './cmspage/preiscripcion-form/preiscripcion-form.component';


// Translation
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LetrasComponent,
    VideosComponent,
    MarkComponent,
    ClasesComponent,
    LibrorealComponent,
    NoticiasComponent,
    EscapeHtmlPipe,
    KeysPipe,
    GraciasComponent,
    PreguntasComponent,
    ComprarComponent,
    PreinscripcionComponent,
    ContactComponent,
    ContactFormComponent,
    ShipingFormComponent,
    PreiscripcionFormComponent,
    BlogpostListComponent,
    BlogpostDetailComponent,
    BlogpostRecentComponent,
    BlogpostFeaturedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    NgxPaginationModule,
    CKEditorModule,
    HttpClientModule,
    NguCarouselModule,
    TranslateModule.forRoot({
      defaultLanguage: 'es',
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(http);
        },
        deps: [ HttpClient ]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
