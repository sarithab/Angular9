import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [HeroDetailComponent],
  imports: [
    CommonModule,
    BrowserModule,
    HeroesRoutingModule,
    FormsModule
  ]
})
export class HeroesModule { }
