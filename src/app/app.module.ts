import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavigationComponent } from './components/navigation/navigation.component';
import { BookComponent } from './components/book/book.component';
import { CaseComponent } from './components/case/case.component';
import { BonusComponent } from './components/bonus/bonus.component';
import { NotebookComponent } from './components/notebook/notebook.component';
import { SettingsComponent } from './components/settings/settings.component';
import { HomeComponent } from './components/home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    BookComponent,
    CaseComponent,
    BonusComponent,
    NotebookComponent,
    SettingsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
