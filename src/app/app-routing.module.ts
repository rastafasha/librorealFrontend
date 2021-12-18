import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogpostDetailComponent } from './pages/blogpost-detail/blogpost-detail.component';
import { BlogpostListComponent } from './pages/blogpost-list/blogpost-list.component';
import { ClasesComponent } from './pages/clases/clases.component';
import { ComprarComponent } from './pages/comprar/comprar.component';
import { ContactComponent } from './pages/contact/contact.component';
import { GraciasComponent } from './pages/gracias/gracias.component';
import { HomeComponent } from './pages/home/home.component';
import { LetrasComponent } from './pages/letras/letras.component';
import { LibrorealComponent } from './pages/libroreal/libroreal.component';
import { MarkComponent } from './pages/mark/mark.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { PreguntasComponent } from './pages/preguntas/preguntas.component';
import { PreinscripcionComponent } from './pages/preinscripcion/preinscripcion.component';
import { VideosComponent } from './pages/videos/videos.component';






const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'audio', component: VideosComponent},
  {path: 'lyrics', component: LetrasComponent},
  {path: 'music-clases', component: ClasesComponent},
  {path: 'mark-brown', component: MarkComponent},
  {path: 'el-libro-real', component: LibrorealComponent},
  {path: 'gracias', component: GraciasComponent},
  {path: 'faq', component: PreguntasComponent},
  {path: 'buy-online', component: ComprarComponent},
  {path: 'pre-inscripcion', component: PreinscripcionComponent},


  {path: 'news', component: NoticiasComponent},
  {path: 'new', component: BlogpostListComponent},
  {path: 'news/:id', component: BlogpostDetailComponent},

  {path: 'contact', component: ContactComponent},

  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
