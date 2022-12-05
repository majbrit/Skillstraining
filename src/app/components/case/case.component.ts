import { Component } from '@angular/core';

@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.scss']
})

export class CaseComponent {
  heading: Array<string> = ['Überschrift 1', 'Überschrift 2', 'Wahrnehmen', 'Übung zum Wahrnehmen', 'Übung zum Teilnehmen', 'Übung zum Beschreiben', 'Skill xyz']
  headings: any = [
    { "heading": 'Überschrift 1', "id": 'ue1'},
    { "heading": 'Überschrift 2', "id": 'ue2'},
    { "heading": 'Wahrnehmen', "id": 'ue3'},
    { "heading": 'Übung zum Wahrnehmen', "id": 'ue4'},
    { "heading": 'Übung zum Teilnehmen', "id": 'ue5'},
    { "heading": 'Übung zum Beschreiben', "id": 'ue6'},
    { "heading": 'Skill xyz', "id": 'ue7'}];
  selected: string ='';
  oldId: string = '';
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
    if(this.oldId != ''){
    (<HTMLInputElement>document.getElementById(this.oldId)).style.backgroundColor = "white";
    }
    (<HTMLInputElement>document.getElementById(id)).style.backgroundColor = "orange";
    
    this.selected = heading;
    this.oldId = id;
    //this.headings.push(heading);
    console.log(this.headings);
  }

  delete(){
    console.log("hall");
    //console.log(this.headings.heading.indexOf(this.selected));
    this.headings.splice(this.heading.indexOf(this.selected),1);
    this.heading.splice(this.heading.indexOf(this.selected),1);
    this.oldId = '';
    
    (<HTMLInputElement>document.getElementById('deleteDialog')).style.display = "none";
  }

  cancle(){
    (<HTMLInputElement>document.getElementById('deleteDialog')).style.display = "none";

  }


}