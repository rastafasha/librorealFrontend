import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EscapeHtmlPipe } from './keep-html.pipe';
import {KeysPipe} from './keys.pipe';

@NgModule({
  declarations: [
    EscapeHtmlPipe,
    KeysPipe
  ],
  exports: [
    EscapeHtmlPipe,
    KeysPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
