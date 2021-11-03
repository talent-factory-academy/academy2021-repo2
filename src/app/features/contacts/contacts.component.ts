import { ChangeDetectorRef, Component, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { CardComponent } from '../../shared/components/card.component';

@Component({
  selector: 'ac-contacts',
  template: `
    
    <div style="max-width: 300px">
     <ac-chartjs type="radar" [temps]="chartData"></ac-chartjs>
     <ac-chartjs type="bar" [temps]="chartData"></ac-chartjs>
     <button (click)="chartData = [22, 1, 43, 45, 12, 3]">Update</button>
     <button (click)="chartData = [1, 10, 23, 35, 42, 53]">Update</button>
    </div>
    
    <div class="row">
      <div class="col-xl-6">1</div>
      <div class="col-xl-6">2</div>
    </div>
   
    <ac-row mq="xl">
      <ac-col [value]="8">LEFT</ac-col>
      <ac-col [value]="4">RIGHT</ac-col>
    </ac-row>
    
    <div style="max-width: 500px">
      <ac-card title="pippo"></ac-card>
      <ac-card title="pluto"></ac-card>
      <ac-card title="topolino"></ac-card>
      
      <ac-accordion [multiple]="false">
        <ac-accordion-group *ngFor="let panel of panels" [title]="panel.title">
          {{panel.content}}
        </ac-accordion-group>
        <ac-accordion-group title="ultimo">...</ac-accordion-group>
        <ac-card></ac-card>
      </ac-accordion>

      
      <div #host></div>
    </div>
  `,
})
export class ContactsComponent {
  chartData = [12, 19, 3, 5, 2, 3];
  panels = [
    { id: 1, title: 'domanda 1', content: 'bla bla', opened: true},
    { id: 2, title: 'domanda 2', content: 'bla bla', opened: false},
    { id: 3, title: 'three', content: 'bla bla', opened: false},
    { id: 4, title: 'wefew', content: 'bla bla', opened: false},
  ]

  // @ViewChild('host') host! : ElementRef<HTMLElement>
  // @ViewChild(CardComponent) card! : CardComponent
  @ViewChildren(CardComponent) cards!: QueryList<CardComponent>
  constructor(private cd: ChangeDetectorRef) {

  }

  ngAfterViewInit() {
      this.cards.forEach(card => {
        console.log(card.title)
        card.title = 'title ' + Math.random()
      })

    this.cd.detectChanges();
  }
}
