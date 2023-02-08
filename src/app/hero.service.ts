import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  headingsBook: any = [
    { "heading": 'Einführung', "id": 'ue1', "text": 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'},
    { "heading": 'Achtsamkeit', "id": 'ue2',  "text": 'lorem ipsum torquent dictumst nullam lorem tellus ac quis etiam odio dictumst fusce, tortor interdum purus ut etiam volutpat potenti sodales eu mi justo pretium, velit torquent id tellus imperdiet nibh placerat nullam feugiat est adipiscing. justo diam pretium id diam a, habitant inceptos curabitur congue, tempus id in venenatis.'},
    { "heading": 'Ziel: sich selbst annehmen', "id": 'n2',  "text": 'Ziemlich durchgeknallt, aber nicht unsympathisch! orem ipsum tellus nulla per commodo posuere porta diam ad taciti sagittis, vulputate libero per ligula velit ante fusce iaculis sed euismod suscipit, libero fames arcu quam tincidunt accumsan amet consequat accumsan augue. pretium lacinia dictumst sodales aenean eros, odio luctus cubilia faucibus.'},
    { "heading": 'Wahrnehmen', "id": 'ue3',  "text": 'orem ipsum tellus nulla per commodo posuere porta diam ad taciti sagittis, vulputate libero per ligula velit ante fusce iaculis sed euismod suscipit, libero fames arcu quam tincidunt accumsan amet consequat accumsan augue. pretium lacinia dictumst sodales aenean eros, odio luctus cubilia faucibus.'},
    { "heading": 'Gefühle: Teste Deine Kenntnisse', "id": 'n1',  "text": 'Welches Gefühl spielt eine wichtige Rolle in Deinem Leben? orem ipsum tellus nulla per commodo posuere porta diam ad taciti sagittis, vulputate libero per ligula velit ante fusce iaculis sed euismod suscipit, libero fames arcu quam tincidunt accumsan amet consequat accumsan augue. pretium lacinia dictumst sodales aenean eros, odio luctus cubilia faucibus.'},
    { "heading": 'Stresstoleranz', "id": 'ue7', "text": 'Skill xyz convallis fermentum aliquam volutpat, nullam lacinia justo sem viverra, pellentesque commodo elit enim. eleifend nulla felis quam hac, ligula tempor dictumst.'},
    { "heading": 'Zwischenmenschliche Fertigkeiten', "id": 'ue8', "text": 'Fertifkeiten convallis fermentum aliquam volutpat, nullam lacinia justo sem viverra, pellentesque commodo elit enim. eleifend nulla felis quam hac, ligula tempor dictumst. orem ipsum tellus nulla per commodo posuere porta diam.'},
    { "heading": 'Richtlinien für zielorientiertes Handeln', "id": 'n4',  "text": 'Richtlinien lorem ipsum eget commodo vehicula erat tempus tellus dapibus odio vulputate, dolor etiam fames cras primis rhoncus gravida sem sagittis potenti netus, nunc faucibus aptent mi nibh facilisis nisl suscipit convallis.'},
    { "heading": 'Wie kann man Glaubenssätze verändern?', "id": 'n3',  "text": 'Versuche, lorem ipsum torquent dictumst nullam lorem tellus ac quis etiam odio dictumst fusce, tortor interdum purus ut etiam volutpat potenti sodales eu mi justo pretium, velit torquent id tellus imperdiet nibh placerat nullam feugiat est adipiscing. justo diam pretium id diam a, habitant inceptos curabitur congue, tempus id in venenatis.'},    
    { "heading": 'Einführung in das Modul "Selbstwert"', "id": 'ue9', "text": 'S convallis fermentum aliquam volutpat, nullam lacinia justo sem viverra, pellentesque commodo elit enim. eleifend nulla felis quam hac, ligula tempor dictumst. libero fames arcu quam tincidunt accumsan amet consequat accumsan augue.'},
    { "heading": 'Fairer Blick', "id": 'ue10', "text": 'Tagesrückblick: ipsum eget commodo vehicula erat. convallis fermentum aliquam volutpat, nullam lacinia justo sem viverra, pellentesque commodo elit enim. eleifend nulla felis quam hac, ligula tempor dictumst. libero fames arcu quam tincidunt accumsan amet consequat accumsan augue.'},
    { "heading": 'Fragen', "id": 'ue11', "text": 'Lorem ipsum dolor sit amet, ipsum eget commodo vehicula erat. convallis fermentum aliquam volutpat, nullam lacinia justo sem viverra, pellentesque commodo elit enim. eleifend nulla felis quam hac, ligula tempor dictumst. libero fames arcu quam tincidunt accumsan amet consequat accumsan augue.'},
 
  ];
  selectedBook: string = 'Einführung';
  textBook: string = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.';
  oldIdBook: string = 'ue1';

  headingsCase: any = [
    { "heading": 'Gefühle: Teste Deine Kenntnisse', "id": 'n1',  "text": 'Welches Gefühl spielt eine wichtige Rolle in Deinem Leben? orem ipsum tellus nulla per commodo posuere porta diam ad taciti sagittis, vulputate libero per ligula velit ante fusce iaculis sed euismod suscipit, libero fames arcu quam tincidunt accumsan amet consequat accumsan augue. pretium lacinia dictumst sodales aenean eros, odio luctus cubilia faucibus.'},
    { "heading": 'Ziel: sich selbst annehmen', "id": 'n2',  "text": 'Ziemlich durchgeknallt, aber nicht unsympathisch! orem ipsum tellus nulla per commodo posuere porta diam ad taciti sagittis, vulputate libero per ligula velit ante fusce iaculis sed euismod suscipit, libero fames arcu quam tincidunt accumsan amet consequat accumsan augue. pretium lacinia dictumst sodales aenean eros, odio luctus cubilia faucibus.'},
    { "heading": 'Wie kann man Glaubenssätze verändern?', "id": 'n3',  "text": 'Versuche, lorem ipsum torquent dictumst nullam lorem tellus ac quis etiam odio dictumst fusce, tortor interdum purus ut etiam volutpat potenti sodales eu mi justo pretium, velit torquent id tellus imperdiet nibh placerat nullam feugiat est adipiscing. justo diam pretium id diam a, habitant inceptos curabitur congue, tempus id in venenatis.'},
    { "heading": 'Richtlinien für zielorientiertes Handeln', "id": 'n4',  "text": 'Richtlinien lorem ipsum eget commodo vehicula erat tempus tellus dapibus odio vulputate, dolor etiam fames cras primis rhoncus gravida sem sagittis potenti netus, nunc faucibus aptent mi nibh facilisis nisl suscipit convallis.'},
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
  public getHeadingsCase(){
    return this.headingsCase;
  }
  public setHeadingsCase(h : any){
    this.headingsCase = h;
  }
}
