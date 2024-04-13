import { Component, ViewChild } from "@angular/core";
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexLegend,
} from "ng-apexcharts";
import { series } from "./data";
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  yaxis: ApexYAxis;
  title: ApexTitleSubtitle;
  labels: string[];
  legend: ApexLegend;
  subtitle: ApexTitleSubtitle;
};
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css'
})
export class ApexChartComponent {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "إستخدام",
          data: series.monthDataSeries1.prices,
        }
      ],
      chart: {
        type: "area",
        height: 250,
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      // to control the curve
      stroke: {
        curve: "smooth",
        lineCap: 'round', // Make the line endings rounded
        colors: ['#8A74F9'], // Base color
        fill: {
          type: 'gradient',
          gradient: {
            type: 'vertical',
            shadeIntensity: 0.5,
            gradientToColors: ['#8A74F9'], // Gradient to base color
          }
        }
      },

      title: {
        text: "إحصائيات إستخدام القسيمة",
        align: "right",
      },
      subtitle: {
        text: "05 يوليو , 2023 - 05 أغسطس , 2023",
        align: "right"
      },
      // labels: series.monthDataSeries1.dates,
      xaxis: {
        type: "category",
        categories: series.monthDataSeries1.dates,
      },
      yaxis: {
        opposite: true,
        show: false,
        min: 0,
      },
      legend: {
        horizontalAlign: "left"
      },

    };
  }
}




