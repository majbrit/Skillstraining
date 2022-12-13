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

  //heading: Array<string> = ['Überschrift 1', 'Überschrift 2', 'Wahrnehmen', 'Übung zum Wahrnehmen', 'Übung zum Teilnehmen', 'Übung zum Beschreiben', 'Skill xyz']
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
    //this.oldId = this.heroService.getIdBook();

      //(<HTMLInputElement>document.getElementById(this.oldId)).style.backgroundColor = "white";


      //(<HTMLInputElement>document.getElementById(id)).style.backgroundColor = "orange";
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



}



