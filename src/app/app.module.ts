import { MaterialModule } from "./modules/material/material.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { MoviesComponent } from "./components/movies/movies.component";
import { MovieCardComponent } from "./components/movie-card/movie-card.component";
import { HttpClientModule } from "@angular/common/http";
import { HomeComponent } from './components/pages/home/home.component';
import { AccountComponent } from './components/pages/account/account.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavBarComponent,
    MoviesComponent,
    MovieCardComponent,
    HomeComponent,
    AccountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
