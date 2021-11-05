import { Directive, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Directive({
  selector: '[acXhr]'
})
export class XhrDirective implements OnInit {
  @Input() url!: string;
  @Output() success = new EventEmitter()

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get(this.url)
      .subscribe(res => {
        this.success.emit(res);
      },)
    console.log(this.url)
  }

}
