import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ScoreboardModule } from './scoreboard/scoreboard.module';
import { BooksComponent } from './books/components/books/books.component';
import { ScoreboardComponent } from './scoreboard/components/scoreboard/scoreboard.component';
import { BooksModule } from './books/books.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { reducers } from './state/app.reducers';
import { EmptyDataComponent } from './common-components/empty-data/empty-data.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'scoreboard',
    component: ScoreboardComponent
  },
  {
    path: '**',
    component: BooksComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(),
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BooksModule,
    ScoreboardModule
  ],
  declarations: [AppComponent, LoginPageComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }