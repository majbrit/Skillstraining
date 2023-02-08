import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router } from "@angular/router";


import { NavigationComponent } from './components/navigation/navigation.component';
import { CaseComponent } from './components/case/case.component';
import { BookComponent } from './components/book/book.component';
import { BonusComponent } from './components/bonus/bonus.component';
import { NotebookComponent } from './components/notebook/notebook.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  { path: "navigation", component: NavigationComponent },
  { path: "case", component: CaseComponent },
  { path: "book", component: BookComponent },
  { path: "bonus", component: BonusComponent },
  { path: "notebook", component: NotebookComponent },
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
export class AppRoutingModule { 
  constructor(private _router:Router){
    this._router.navigate(['/**']);
  }
}
