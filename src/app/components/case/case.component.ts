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
    this.heading = this.heroService.getHeadingCase();
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
/*headings : any = [
  {
    "heading": "Überschrift 1"

  },
  {
    "heading": "Überschrift 2"

  },
  {
    "heading": "Überschrift 3"

  }
]*/

  somefunction(heading:string, id:string){
    //if(this.oldId != ''){
      //(<HTMLInputElement>document.getElementById(this.oldId)).style.backgroundColor = "white";
    //}
    //(<HTMLInputElement>document.getElementById(id)).style.backgroundColor = "orange";
    
    for (var h of this.headings) {
      if(id==h.id){
        this.text = h.text;
        this.selected = h.heading;
      }
    }
    //this.oldId = id;

    this.heroService.setIdCase(id);
      this.heroService.setSelectedCase(this.selected);
      this.heroService.setTextCase(this.text);
    //this.headings.push(heading);
    //console.log(this.headings);
  }

  delete(){
    console.log("hall");
    //console.log(this.headings.heading.indexOf(this.selected));
    this.headings = this.heroService.getHeadingsCase();
    this.heading = this.heroService.getHeadingCase();
    this.headings.splice(this.heading.indexOf(this.heroService.getSelectedCase()),1);
    this.heading.splice(this.heading.indexOf(this.heroService.getSelectedCase()),1);

    this.heroService.setHeadingsCase(this.headings);
    this.heroService.setHeadingCase(this.heading);
    this.heroService.setIdCase('');
    
    (<HTMLInputElement>document.getElementById('deleteDialog')).style.display = "none";
  }

  cancle(){
    (<HTMLInputElement>document.getElementById('deleteDialog')).style.display = "none";

  }


}