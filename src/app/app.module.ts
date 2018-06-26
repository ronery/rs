import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { QuemSouComponent } from './quem-sou/quem-sou.component';
import { QueFacoComponent } from './que-faco/que-faco.component';
import { TrabalhosComponent } from './trabalhos/trabalhos.component';
import { ContatoComponent } from './contato/contato.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselComponent,
    HomeComponent,
    FooterComponent,
    QuemSouComponent,
    QueFacoComponent,
    TrabalhosComponent,
    ContatoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
