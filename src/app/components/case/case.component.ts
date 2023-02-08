import { Component } from '@angular/core';
import { HeroService } from '../../hero.service';

@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.scss']
})

export class CaseComponent {
  constructor(private heroService: HeroService) {
    this.oldId = this.heroService.getIdCase();
    this.selected = this.heroService.getSelectedCase();
    this.text = this.heroService.getTextCase();
    this.headings = heroService.getHeadingsCase();
   }
  heading: Array<string> = []
  headings: any = [];
  selected: string = '';
  text: string = '';
  oldId: string = '';

  color(id: string){
    if(id == this.heroService.getIdCase()){
      return 'orange';
    }
      return 'white';
  }
  visible(){
    if(this.heroService.getIdCase() == ''){
      return 'hidden';
    }
    return 'visible';
  }

  select(id:string){
    for (var h of this.headings) {
      if(id==h.id){
        this.text = h.text;
        this.selected = h.heading;
      }
    }
    this.heroService.setIdCase(id);
    this.heroService.setSelectedCase(this.selected);
    this.heroService.setTextCase(this.text);
  }

  delete(){
    this.headings = this.heroService.getHeadingsCase();
    let index: number = 0;
    for (var h of this.headings) {
      if(this.heroService.getIdCase()==h.id){
        this.headings.splice(index, 1);
      }
      index++;
    }
    this.heroService.setHeadingsCase(this.headings);
    this.heroService.setIdCase('');
    
    (<HTMLInputElement>document.getElementById('deleteDialog')).style.display = "none";
  }

  cancle(){
    (<HTMLInputElement>document.getElementById('deleteDialog')).style.display = "none";

  }
}