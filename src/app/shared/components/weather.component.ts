import { ChangeDetectionStrategy, Component, Input, OnChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Meteo } from '../model/meteo';

@Component({
  selector: 'ac-weather',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h1>{{city}}</h1>
    
    <ng-container *ngIf="data">
      <div>{{data?.main?.temp}}°</div>
      <img [src]="icon" alt="" *ngIf="icon">
    </ng-container>
    
  `,
})
export class WeatherComponent implements OnChanges {
  @Input() city: string | null = null;
  data: Meteo | null = null;
  icon: string | null = null;

  constructor(private http: HttpClient) { }

  ngOnChanges() {
    if (this.city) {
      this.http.get<Meteo>(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&APPID=eb03b1f5e5afb5f4a4edb40c1ef2f534`)
        .subscribe(res => {
          this.data = res;
          this.icon =  'http://openweathermap.org/img/w/' + this.data.weather[0].icon + '.png'
        })
    }
  }

}
