import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ac-catalog',
  template: `
    <p >
      catalog works!
      
    </p>
    
    <ac-card></ac-card>
  `,
  styles: [
  ]
})
export class CatalogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
