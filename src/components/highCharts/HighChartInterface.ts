export interface HighChartInterface{
  //option: Array<OptionData>,
  option: {
    chart: {
      renderTo: string;
      type: string,
      align: string,
      verticalAlign: string,
    },
   title: {
        text: string,
        align: string,
    },
    subtitle:{
      text: string,
      align: string,
    },
    xAxis: {
        categories: Array<string>,
        crosshair: boolean,
    },
    yAxis: {
      min: number,
      title: {
          text: string
      },
      labels: {
        format: string
      }
    },
    legend: {
      layout: string,
      align: string,
      verticalAlign: string,
      floating: boolean,
    },
    colors: Array<string>,
    plotOptions: {
        series: {
            marker: {
                enabled: boolean
            }
        }
    },
    series: Array<SeriesOption>,
  },

  segment: number,

  activated: boolean,

  caseAge: number,
}

export interface SeriesOption {
  name: string,
  data: Array<number>
}
