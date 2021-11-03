import {
  AfterContentInit,
  AfterViewInit,
  EventEmitter,
  Component,
  ElementRef,
  Input, OnChanges,
  OnDestroy,
  OnInit, Output, SimpleChanges,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'ac-hello',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h2 #host>Hello {{name}}</h2>
    <ng-content></ng-content>
    <button (click)="nameChange.emit('topolino')">change to topolino</button>
  `,
})
export class HelloComponent implements OnInit, OnChanges, OnDestroy, AfterViewInit, AfterContentInit {
  @Input() name: string | null = null;
  // enable binding 2-ways
  @Output() nameChange = new EventEmitter()

  @Input() counter: number = 0;
  @ViewChild('host', { static: true }) host!: ElementRef<HTMLInputElement>;

  constructor() {
    console.log('ctr', this.name, this.host)
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', this.name, this.host)
    // console.log(changes)
  }

  ngOnInit(): void {
    console.log('ngOnInit', this.name, this.host)
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit', this.name, this.host)
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit', this.name, this.host)
  }

  ngOnDestroy() {
    console.log('onDestroy')
  }
}
