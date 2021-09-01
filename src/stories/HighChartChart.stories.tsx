import React from 'react';
import { Story, Meta, ComponentStory, ComponentMeta } from '@storybook/react';
import HighChartChart from '../components/highCharts/HighChartChart';

export default {
  title: 'HighChartChart',
  component: HighChartChart,
} as ComponentMeta<typeof HighChartChart>;

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
        categories: ['2020-01-01', '2020-02-01', '2020-03-01', '2020-04-01'],
        crosshair: true,
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Principal Value'
      },
      labels: {
        format: '{value} EUR'
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
        name: 'EUR',
        data: [1000, 5000, 10000, 50000]
    }],
};

export const BarChart: Story = (args) => <HighChartChart option={options} segment={1} activated={true} caseAge={5} {...args}/>;

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
      categories: ['2020-01-01', '2020-02-01', '2020-03-01', '2020-04-01'],
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
      name: 'Closed cases',
      data: [25, 50, 75, 100, 125, 150]
  },
  { name: 'Open cases',
  data: [200, 175, 150, 130, 125, 160]
}],
};

export const LineChart: Story = (args) => <HighChartChart option={options2} segment={1} activated={true} caseAge={5} {...args}/>;
