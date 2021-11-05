import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'ac-directives-demo',
  template: `
    {{'Fabio Biondi Se ne va!' | awesome: 'F' : '🚣🏻' }}
    <hr>
    {{filters.id}}<br>
    <input type="number" min="0" max="10" step="1" placeholder="age" [(ngModel)]="filters.id"><br>
    <input type="text" placeholder="name" [(ngModel)]="filters.name"><br>
    <li *ngFor="let user of (users 
                            | filterById: filters.id 
                            | filterByName: filters.name)">
      {{user.name}}
    </li>

    <span  *ngFor="let star of rate | intToArray">
      ⭐️
    </span>
    
    
    <input type="text" acInputPrefix>
    
    <div (click)="doParent()">
      <div 
        (click)="doChild()"
        acStopPropagation
      >aaaa</div>
    </div>
    
    <div acUrl="https://www.fabiobiondi.io" >Visit FB</div>
    <button acUrl="https://www.google.com">click me</button>
    
    <div [acPad]="5" #d="ngDiv">
      <div style="background-color: yellow"></div>
      <div acHighlight="red">bla bla</div>
      <div [acHighlight]="'cyan'">bla bla</div>
      <div [acHighlight]="value">bla bla</div>
      <hr>
      
      <input type="text" [(ngModel)]="theme">
      <div class="pippo" [theme]="theme" [acPad]="pad" [margin]="2">b</div>
      
      <div
        [acPad]="2"
        acXhr
        url="https://jsonplaceholder.typicode.com/users" 
        (success)="doSomething($event)"
      ></div>
    </div>
  `,
})
export class DirectivesDemoComponent {

  rate = 4;
  theme: 'danger' | 'success' | null = 'danger'
  pad: 0 | 1 | 2 | 3 | 4 | 5 = 5;
  value = 'purple'
  data: any[] = [];
  users: any[] = [];

  filters = {
    name: '',
    id: 0
  }

  constructor(http: HttpClient) {
    http.get<any[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe(res => {
        this.users = res;
      })
  }
  doSomething(res: any) {
    console.log(res)
    this.data = res;
  }

  doParent() {
    console.log('doParent')
  }

  doChild() {
    console.log('doChild')
  }
}
