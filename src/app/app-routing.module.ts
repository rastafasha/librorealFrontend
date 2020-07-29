import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { HomeComponent, VideosComponent, LetrasComponent,
  ClasesComponent, MarkComponent, NoticiasComponent, LibrorealComponent,
  GraciasComponent, PreguntasComponent, ComprarComponent,
  PreinscripcionComponent, ContactComponent, BlogpostListComponent, BlogpostDetailComponent } from './pages/index.paginas';



const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'audio', component: VideosComponent},
  {path: 'letras', component: LetrasComponent},
  {path: 'clases-de-musica', component: ClasesComponent},
  {path: 'mark-brown', component: MarkComponent},
  {path: 'el-libro-real', component: LibrorealComponent},
  {path: 'gracias', component: GraciasComponent},
  {path: 'preguntas-frecuentes', component: PreguntasComponent},
  {path: 'comprar-libros-en-linea', component: ComprarComponent},
  {path: 'pre-inscripcion', component: PreinscripcionComponent},


  {path: 'noticias', component: NoticiasComponent},
  {path: 'noticia', component: BlogpostListComponent},
  {path: 'noticia/:id', component: BlogpostDetailComponent},

  {path: 'contacto', component: ContactComponent},

  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
