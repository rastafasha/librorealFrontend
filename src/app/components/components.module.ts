import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news/news.component';

import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from '../app-routing.module';
import { PipesModule } from '../pipes/pipes.module';

// Translation
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@NgModule({
  declarations: [NewsComponent],
  exports: [NewsComponent],
  imports: [
    CommonModule,
    NgxPaginationModule,
    PipesModule,
    AppRoutingModule,
    TranslateModule
  ]
})
export class ComponentsModule { }
