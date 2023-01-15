import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  selected: string ='';

  select(navItem:string){

    console.log("select");
    /*
    if(this.selected != null && this.selected != ''){
      console.log("select neeein");
      (<HTMLInputElement>document.getElementById(this.selected)).classList.remove("focused-button");
      (<HTMLInputElement>document.getElementById(this.selected)).classList.add("notfocused-button");
    }

    (<HTMLInputElement>document.getElementById(navItem)).classList.remove("notfocused-button");
    (<HTMLInputElement>document.getElementById(navItem)).classList.add("focused-button");
    */

    if(this.selected != null && this.selected != ''){
      (<HTMLInputElement>document.getElementById(this.selected)).style.backgroundColor="white";
      (<HTMLInputElement>document.getElementById(this.selected)).style.color="rgb(82, 82, 82)";
    }
    (<HTMLInputElement>document.getElementById(navItem)).style.backgroundColor="orangered";
    (<HTMLInputElement>document.getElementById(navItem)).style.color="white";
    this.selected = navItem;
  }

  hover(navItem:string){

    console.log("hover");
    if(navItem != this.selected){
      (<HTMLInputElement>document.getElementById(navItem)).style.backgroundColor="rgb(254, 166, 135)";
    }
  }

  
  hoverend(navItem:string){

    console.log("hover");
    if(navItem != this.selected){
      (<HTMLInputElement>document.getElementById(navItem)).style.backgroundColor="white";
    }
  }

  deselect(){
    console.log("deselect");

    if(this.selected != null && this.selected != ''){
      (<HTMLInputElement>document.getElementById(this.selected)).style.backgroundColor="white";
      (<HTMLInputElement>document.getElementById(this.selected)).style.color="rgb(82, 82, 82)";
    }
    this.selected = '';
  }
}
