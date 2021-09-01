//import * as React from 'react';
import React from 'react';
import ChartInterface from './ChartInterface'
import DataService from '../../data/services/DataService';
import { ChartData } from '../../data/interfaces/DataInterface';
import HighChartChart from './HighChartChart';
import './Charts.scss';


type State = {
  chartData: ChartData,
};

let options = {
    chart: {
      renderTo: 'container',
      type: 'column',
      verticalAlign: 'middle',
      align: 'left',
  },
   title: {
        text: 'Debt Size',
        align: 'left',
    },
    subtitle:{
      text: 'Each column shows the aggregated debt size for that month',
      align: 'left',
    },
    xAxis: {
        categories: [''],
        crosshair: true,
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Principal Value'
      },
      labels: {
        format: '{value}'
      }
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'top',
      floating: false,
    },
    colors: ['#F94545'],
    plotOptions: {
        series: {
            marker: {
                enabled: false
            }
        }
    },
    series: [{
        name: '',
        data: []
    }],
};

let options2 = {
  chart: {
    renderTo: 'container',
    type: 'line',
    verticalAlign: 'middle',
    align: 'left',
},
 title: {
      text: 'Case Overview',
      align: 'left',
  },
  subtitle:{
    text: 'Compare open and closed cases',
    align: 'left',
  },
  xAxis: {
      categories: [''],
      crosshair: true,
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Cases'
    },
    labels: {
      format: '{value}'
    }
  },
  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'top',
    floating: true,
  },
  colors: ['#F94545', '#B8DBFF'],
  plotOptions: {
      series: {
          marker: {
              enabled: false
          }
      }
  },
  series: [{
      name: '',
      data: []
  }],
};

let option1Activation: boolean = false;
let option2Activation: boolean = false;

export default class Chart extends React.Component <ChartInterface, State>{
  constructor(props: ChartInterface) {
    super(props);
    this.state = {
      chartData: {
        categories: [''],
        series: [{
          name: '',
          unit: '',
          data: [],
        }],
      }
    };
  }



  componentDidMount(){
    DataService.getChartsData(this.props.widgetId, this.props.segmentId, this.props.caseAge)
      .then(response => {
        if(this.props.widgetId === 1){
          options.xAxis.categories = response.data.categories;
          options.series = response.data.series;
          options.yAxis.labels.format = '{value} ' + response.data.series[0].unit;
          option1Activation = true;
        }else{
          options2.xAxis.categories = response.data.categories;
          options2.series = response.data.series;
          option2Activation = true;
        }
        this.setState({
          chartData: response.data
        });
      })
      .catch(e => {
        console.log(e);
      });
    }
    render(){
      let optionToUse = options;
      let optionActivation = option1Activation;
      if(this.props.widgetId !== 1){
        optionToUse = options2;
        optionActivation = option2Activation;
      }
      //options.xAxis.categories = this.state.chartData.categories;
      //options.series = this.state.chartData.series;
      return(
        <div className="chart" key={this.props.caseAge || this.props.segmentId}>
          <HighChartChart option={optionToUse} segment={this.props.segmentId} activated={optionActivation} caseAge={this.props.caseAge}/>
        </div>
      );
    }
}
