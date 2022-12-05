import { Component } from '@angular/core';

@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.scss']
})

export class CaseComponent {
  
  headings: Array<string> = [];
  somefunction(heading:string){
    this.headings.push(heading);
    console.log(this.headings);
  }

  delete(heading:string){
  
  }
}