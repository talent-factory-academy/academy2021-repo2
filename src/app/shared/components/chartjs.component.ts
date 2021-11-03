import { AfterViewInit, Component, ElementRef, Input, OnChanges, ViewChild } from '@angular/core';
import { Chart, ChartConfiguration, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'ac-chartjs',
  template: `
    <canvas #host width="400" height="400"></canvas>
  `,
  styles: [
  ]
})
export class ChartjsComponent implements OnChanges {
  @ViewChild('host', { static: true }) host!: ElementRef<HTMLCanvasElement>
  @Input() type: 'bar' | 'radar' = 'bar'
  @Input() temps: number[] = [];
  myChart!: Chart;

  init() {
    const ctx = this.host.nativeElement.getContext('2d')
    if(ctx) {
      this.myChart = new Chart(ctx, { ...options, type: this.type });
    }
  }

  ngOnChanges() {
    if(!this.myChart) {
      this.init()
    }
    this.myChart.data.datasets[0].data = this.temps;
    this.myChart.update();

  }
}


const options: ChartConfiguration = {
  type: 'bar',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
}
