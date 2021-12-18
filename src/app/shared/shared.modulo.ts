import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

// import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// paginacion
import { NgxPaginationModule } from 'ngx-pagination';


import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './slider/slider.component';
import { BlogHomeComponent } from './blog-home/blog-home.component';
import { ModalComponent } from './modal/modal.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { LateralComponent } from './lateral/lateral.component';
import { NguCarouselModule } from '@ngu/carousel';
import { TranslateModule } from '@ngx-translate/core';







@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        // CarouselModule,
        BrowserAnimationsModule,
        NgxPaginationModule,
        NguCarouselModule,
        TranslateModule
    ],
    declarations: [
        HeaderComponent,
        FooterComponent,
        SliderComponent,
        BlogHomeComponent,
        ModalComponent,
        NewsletterComponent,
        LateralComponent,


    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        SliderComponent,
        BlogHomeComponent,
        ModalComponent,
        NewsletterComponent,
        LateralComponent
    ]
})

export class SharedModule {}
