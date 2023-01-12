import { Component, OnInit } from '@angular/core';

import { HeroService } from '../../hero.service';
import { timer } from 'rxjs';
import { take } from 'rxjs/operators';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})

export class BookComponent {
  constructor(private heroService: HeroService) {
    this.oldId = this.heroService.getIdBook();
    this.selected = this.heroService.getSelectedBook();
    this.text = this.heroService.getTextBook();
    this.headings = this.heroService.getHeadingsBook();
   }

  headings: any = [];
  selected: string = '';
  text: string = '';
  oldId: string = '';
  snackbar: string = '';
 
  color(id: string){
    if(id == this.heroService.getIdBook()){
      return 'orange';
    }
      return 'white';
  }
  somefunction(id:string){
      for (var h of this.headings) {
        if(id==h.id){
          this.text = h.text;
          this.selected = h.heading;
        }
      }
      this.heroService.setIdBook(id);
      this.heroService.setSelectedBook(this.selected);
      this.heroService.setTextBook(this.text);
  }

  save() {
    for (var h of this.headings) {
      if(this.heroService.getIdBook()==h.id){
        var snack = this.heroService.saveInCase(h.heading, h.id, h.text);
        if(snack == 'new') {
          this.snackbar = 'Seite wurde im Notfallkoffer gespeichert';
        }
        else {
          this.snackbar = 'Seite ist bereits im Notfallkoffer vorhanden';
        }
        var x = (<HTMLInputElement>document.getElementById("snackbar"))
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
        return true;
      }
    }
    return false;  
  }

  next(){
    let next: boolean = false;
    for (var h of this.headings) {
      if(next){
        this.oldId = h.id;
        this.selected = h.heading;
        this.text = h.text;
        this.heroService.setIdBook(h.id);
        this.heroService.setSelectedBook(h.heading);
        this.heroService.setTextBook(h.text);
        next = false;
        return;
      }
      if(this.heroService.getIdBook()==h.id){
        next = true;
      }
    }
  }

  prev(){
    let s: string = 'Einführung';
    let t: string = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.';
    let oId: string = 'ue1';
    for (var h of this.headings) {

      if(this.heroService.getIdBook()==h.id){
        this.oldId = oId;
        this.selected = s;
        this.text = t;
        this.heroService.setIdBook(oId);
        this.heroService.setSelectedBook(s);
        this.heroService.setTextBook(t);
        return;
      }
      s = h.heading;
      t = h.text;
      oId = h.id;
    }    
  }
}