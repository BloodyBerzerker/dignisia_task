import * as React from 'react';
import {HighChartInterface} from './HighChartInterface';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';


const HighChartChart = (Props: HighChartInterface) => {
  return(
    <div className="highChart" key={Props.option.xAxis.categories.length || Props.segment}>
      <HighchartsReact
          highcharts={Highcharts}
          options={Props.option}
      />
    </div>
  );
};

export default HighChartChart;
/*
*Fungerade för en rendering och initierande av charts. Hinner dock inte med årtalen från slidern, chartsen hamnar i föregående prop.

export default class HighChartChart extends React.Component <HighChartInterface, HighChartInterface>{

  shouldComponentUpdate(nextProps: HighChartInterface, nextState: HighChartInterface) {
    if (nextProps.option.xAxis.categories.length === this.props.option.xAxis.categories.length && nextProps.segment === this.props.segment && nextProps.activated === this.props.activated && nextProps.caseAge === this.props.caseAge) {
      return false
    }else {
      return true
    }
  }


  render(){
    return(
      <div className="highChart" key={this.props.option.xAxis.categories.length || this.props.segment}>
        <HighchartsReact
            highcharts={Highcharts}
            options={this.props.option}
        />
      </div>
    );
  }
}
*/
