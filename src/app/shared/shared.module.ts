import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card.component';
import { HelloComponent } from './components/hello.component';
import { WeatherComponent } from './components/weather.component';
import { AccordionGroupComponent } from './components/accordion-group.component';
import { AccordionComponent } from './components/accordion.component';
import { RowComponent } from './components/row.component';
import { ColComponent } from './components/col.component';
import { ChartjsComponent } from './components/chartjs.component';



@NgModule({
  declarations: [
    CardComponent,
    HelloComponent,
    WeatherComponent,
    AccordionGroupComponent,
    AccordionComponent,
    RowComponent,
    ColComponent,
    ChartjsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent,
    HelloComponent,
    WeatherComponent,
    AccordionGroupComponent,
    AccordionComponent,
    RowComponent,
    ColComponent,
    ChartjsComponent
  ]
})
export class SharedModule { }
