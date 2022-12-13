import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  headingsBook: any = [
    { "heading": 'Einführung', "id": 'ue1', "text": 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'},
    { "heading": 'Achtsamkeit', "id": 'ue2',  "text": 'lorem ipsum torquent dictumst nullam lorem tellus ac quis etiam odio dictumst fusce, tortor interdum purus ut etiam volutpat potenti sodales eu mi justo pretium, velit torquent id tellus imperdiet nibh placerat nullam feugiat est adipiscing. justo diam pretium id diam a, habitant inceptos curabitur congue, tempus id in venenatis.'},
    { "heading": 'Wahrnehmen', "id": 'ue3',  "text": 'orem ipsum tellus nulla per commodo posuere porta diam ad taciti sagittis, vulputate libero per ligula velit ante fusce iaculis sed euismod suscipit, libero fames arcu quam tincidunt accumsan amet consequat accumsan augue. pretium lacinia dictumst sodales aenean eros, odio luctus cubilia faucibus.'},
    { "heading": 'Übung zum Wahrnehmen', "id": 'ue4',  "text": 'lorem ipsum tincidunt convallis arcu mi pellentesque litora auctor, aenean adipiscing pretium tempus nisl rhoncus facilisis, non lacinia quis pharetra phasellus venenatis arcu. et tristique ut torquent at blandit, arcu proin orci.'},
    { "heading": 'Übung zum Teilnehmen', "id": 'ue5',  "text": 'lorem ipsum eget commodo vehicula erat tempus tellus dapibus odio vulputate, dolor etiam fames cras primis rhoncus gravida sem sagittis potenti netus, nunc faucibus aptent mi nibh facilisis nisl suscipit convallis.'},
    { "heading": 'Übung zum Beschreiben', "id": 'ue6',  "text": 'lorem ipsum tincidunt eleifend arcu non luctus massa lacinia, pretium sapien semper magna amet ipsum. ut vestibulum convallis dictum malesuada vehicula nisi tristique fames, lacus vitae nibh euismod sapien neque himenaeos.'},
    { "heading": 'Stresstoleranz', "id": 'ue7', "text": 'Skill xyz convallis fermentum aliquam volutpat, nullam lacinia justo sem viverra, pellentesque commodo elit enim. eleifend nulla felis quam hac, ligula tempor dictumst.'},
    { "heading": 'Zwischenmenschliche Fertigkeiten', "id": 'ue8', "text": 'Fertifkeiten convallis fermentum aliquam volutpat, nullam lacinia justo sem viverra, pellentesque commodo elit enim. eleifend nulla felis quam hac, ligula tempor dictumst. orem ipsum tellus nulla per commodo posuere porta diam.'},
    { "heading": 'Selbstwert', "id": 'ue9', "text": 'S convallis fermentum aliquam volutpat, nullam lacinia justo sem viverra, pellentesque commodo elit enim. eleifend nulla felis quam hac, ligula tempor dictumst. libero fames arcu quam tincidunt accumsan amet consequat accumsan augue.'},
  ];
  selectedBook: string = 'Überschrift 1';
  textBook: string = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.';
  oldIdBook: string = 'ue1';


  headingCase: Array<string> = ['Überschrift 2', 'Wahrnehmen', 'Übung zum Teilnehmen', 'Skill xyz']
  headingsCase: any = [
    { "heading": 'Achtsamkeit', "id": 'ue2',  "text": 'lorem ipsum torquent dictumst nullam lorem tellus ac quis etiam odio dictumst fusce, tortor interdum purus ut etiam volutpat potenti sodales eu mi justo pretium, velit torquent id tellus imperdiet nibh placerat nullam feugiat est adipiscing. justo diam pretium id diam a, habitant inceptos curabitur congue, tempus id in venenatis.'},
    { "heading": 'Wahrnehmen', "id": 'ue3',  "text": 'orem ipsum tellus nulla per commodo posuere porta diam ad taciti sagittis, vulputate libero per ligula velit ante fusce iaculis sed euismod suscipit, libero fames arcu quam tincidunt accumsan amet consequat accumsan augue. pretium lacinia dictumst sodales aenean eros, odio luctus cubilia faucibus.'},
    { "heading": 'Übung zum Teilnehmen', "id": 'ue5',  "text": 'lorem ipsum eget commodo vehicula erat tempus tellus dapibus odio vulputate, dolor etiam fames cras primis rhoncus gravida sem sagittis potenti netus, nunc faucibus aptent mi nibh facilisis nisl suscipit convallis.'},
    { "heading": 'Stresstoranz', "id": 'ue7', "text": 'Skill xyz convallis fermentum aliquam volutpat, nullam lacinia justo sem viverra, pellentesque commodo elit enim. eleifend nulla felis quam hac, ligula tempor dictumst.'}
  ];
  selectedCase: string = '';
  textCase: string = '';
  oldIdCase: string = '';

  constructor() { }

  public getSelectedBook(){
    return this.selectedBook;
  }
  public setSelectedBook(s : string){
    this.selectedBook = s;
  }
  public getIdBook(){
    return this.oldIdBook;
  }
  public setIdBook(id : string){
    this.oldIdBook = id;
  }
  public getTextBook(){
    return this.textBook;
  }
  public setTextBook(t : string){
    this.textBook = t;
  }
  public getHeadingsBook(){
    return this.headingsBook;
  }
  public setHeadingsBook(h : any){
    this.headingsBook = h;
  }
  public saveInCase(heading:string, id:string, text:string){
    for (var h of this.headingsCase) {
      if(h.id == id){   
          return 'old';
      }
    }
    this.headingCase.push(heading);
    this.headingsCase.push({ "heading": heading, "id": id, "text": text});
    return 'new';
  }


  public getSelectedCase(){
    return this.selectedCase;
  }
  public setSelectedCase(s : string){
    this.selectedCase = s;
  }
  public getIdCase(){
    return this.oldIdCase;
  }
  public setIdCase(id : string){
    this.oldIdCase = id;
  }
  public getTextCase(){
    return this.textCase;
  }
  public setTextCase(t : string){
    this.textCase = t;
  }
  public getHeadingCase(){
    return this.headingCase;
  }
  public setHeadingCase(h : Array<string>){
    this.headingCase = h;
  }
  public getHeadingsCase(){
    return this.headingsCase;
  }
  public setHeadingsCase(h : any){
    this.headingsCase = h;
  }


}
