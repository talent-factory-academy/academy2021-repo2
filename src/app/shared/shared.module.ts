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
import { PadDirective } from './directives/pad.directive';
import { HighlightDirective } from './directives/highlight.directive';
import { XhrDirective } from './directives/xhr.directive';
import { DivDirective } from './directives/div.directive';
import { UrlDirective } from './directives/url.directive';
import { StopPropagationDirective } from './directives/stop-propagation.directive';
import { InputPrefixDirective } from './directives/input-prefix.directive';
import { IfLoggedDirective } from './directives/if-logged.directive';
import { IfSigninDirective } from './directives/if-signin.directive';
import { AwesomePipe } from './pipes/awesome.pipe';
import { FilterByOSPipe } from './pipes/filter-by-os.pipe';
import { FilterByNamePipe } from './pipes/filter-by-name.pipe';
import { FilterByIdPipe } from './pipes/filter-by-id.pipe';
import { IntToArrayPipe } from './pipes/int-to-array.pipe';



@NgModule({
  declarations: [
    CardComponent,
    HelloComponent,
    WeatherComponent,
    AccordionGroupComponent,
    AccordionComponent,
    RowComponent,
    ColComponent,
    ChartjsComponent,
    PadDirective,
    HighlightDirective,
    XhrDirective,
    DivDirective,
    UrlDirective,
    StopPropagationDirective,
    InputPrefixDirective,
    IfLoggedDirective,
    IfSigninDirective,
    AwesomePipe,
    FilterByOSPipe,
    FilterByNamePipe,
    FilterByIdPipe,
    IntToArrayPipe
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
    ChartjsComponent,
    PadDirective,
    HighlightDirective,
    XhrDirective,
    DivDirective,
    UrlDirective,
    StopPropagationDirective,
    InputPrefixDirective,
    IfLoggedDirective,
    IfSigninDirective,
    AwesomePipe,
    FilterByOSPipe,
    FilterByNamePipe,
    FilterByIdPipe,
    IntToArrayPipe
  ]
})
export class SharedModule { }
