import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  selected: string ='book-nav';
  select(navItem:string){

    (<HTMLInputElement>document.getElementById(this.selected)).style.backgroundColor="white";
    (<HTMLInputElement>document.getElementById(this.selected)).style.color="rgb(82, 82, 82)";
    (<HTMLInputElement>document.getElementById(navItem)).style.backgroundColor="orangered";
    (<HTMLInputElement>document.getElementById(navItem)).style.color="white";
    this.selected = navItem;
  }
}
