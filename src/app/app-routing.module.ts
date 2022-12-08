import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";

import { NavigationComponent } from './components/navigation/navigation.component';
import { CaseComponent } from './components/case/case.component';
import { BookComponent } from './components/book/book.component';
import { BonusComponent } from './components/bonus/bonus.component';
import { NotebookComponent } from './components/notebook/notebook.component';
import { SettingsComponent } from './components/settings/settings.component';
import { EmptyComponent } from './components/empty/empty.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  { path: "navigation", component: NavigationComponent },
  { path: "case", component: CaseComponent },
  { path: "book", component: BookComponent },
  { path: "bonus", component: BonusComponent },
  { path: "notebook", component: NotebookComponent },
  { path: "settings", component: SettingsComponent },
  { path: "empty", component: EmptyComponent },
  { path: "**", component: HomeComponent },

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
