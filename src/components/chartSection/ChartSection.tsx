import React from 'react';
import Chart from '../highCharts/Chart';
import DataService from '../../data/services/DataService';
import { SegmentData } from '../../data/interfaces/DataInterface';
import Slider from '../slider/Slider';
import './ChartSection.scss';

type Props = {

};

type State = {
  segments: Array<SegmentData>,
  allDates: Array<string>,
  widgetId: number,
  segmentId: number,
  caseAge: number,
  sliderValue: number,
  activeSegment: number,
};

let sliderDates: Array<string> = [];
let sliderValue: number = 0;
let activeSegmentOption: number = 0;
let keyIdentifier: number = 0;
let keyIdentifier2: number = 1000;
let segmentOptions = [{class: 'topLayer', id: 1, name: 'Loading'}];
let segmentListItems: JSX.Element[] = [];
const widgetId1: number = 1;
const widgetId2: number = 2;

export default class ChartSection extends React.Component <{}, State>{

  constructor(props: Props) {
    super(props);
    this.state = {
      segments: [],
      allDates: [''],
      widgetId: 1,
      segmentId: 1,
      caseAge: 0,
      sliderValue: 0,
      activeSegment: 1,
    };
    }

    componentDidMount(){
      DataService.getSegments()
        .then(response => {
          segmentOptions = [
            {class: 'topLayer', id: response.data.segmentId, name: response.data.segmentName},
              {class: 'secondLayer', id: response.data.children[0].segmentId, name: response.data.children[0].segmentName},
                {class: 'thirdLayer', id: response.data.children[0].children[0].segmentId, name: response.data.children[0].children[0].segmentName},
                {class: 'thirdLayer', id: response.data.children[0].children[1].segmentId, name: response.data.children[0].children[1].segmentName},
                {class: 'thirdLayer', id: response.data.children[0].children[2].segmentId, name: response.data.children[0].children[2].segmentName},
            {class: 'secondLayer', id: response.data.children[1].segmentId, name: response.data.children[1].segmentName},
              {class: 'thirdLayer', id: response.data.children[1].children[0].segmentId, name: response.data.children[1].children[0].segmentName},
          ];
          activeSegmentOption = response.data.segmentId;
          this.setState({
            segments: response.data
          });
        })
        .catch(e => {
          console.log(e);
        });

        DataService.getChartsData(1, 1, 0)
          .then(response => {
            this.setState({
              allDates: response.data.categories
            });
          })
          .catch(e => {
            console.log(e);
          });
    }

    sliderChange = ({target}) => {
      return sliderValue = parseInt(target.value),
      keyIdentifier++,
      keyIdentifier2++,
      this.setState({
        sliderValue: target.value
      });
    }

    dropDownChange = ({target}) => {
      return activeSegmentOption =  parseInt(target.value),
      keyIdentifier++,
      keyIdentifier2++,
      this.setState({
        activeSegment: activeSegmentOption
      });
    }

  render(){
    if(this.state){
      if(this.state.allDates){
        sliderDates = this.state.allDates;
      }
      segmentListItems = segmentOptions.map((s) => <option key={s.id} value={s.id} className={s.class}>{s.name}</option>);
    }
    return(
      <div className='chartSection'>
        <div className='chartsControlls'>
          <div className='selectListTitleBox'>
            <label htmlFor='selectListBox' className='selectListTitle'>Segment</label>
          </div>
          <div>
            <select id='selectListBox' className='selectList' defaultValue={activeSegmentOption} onChange={this.dropDownChange.bind(this)}>
              {segmentListItems}
            </select>
          </div>
          <Slider sliderTitle='Case Age' sliderDates={sliderDates} sliderValue={sliderValue} sliderChange={this.sliderChange.bind(this)} />
        </div>
        <div className='charts'>
          <Chart widgetId={widgetId1} segmentId={activeSegmentOption} caseAge={sliderValue} key={keyIdentifier.toString()}/>
          <Chart widgetId={widgetId2} segmentId={activeSegmentOption} caseAge={sliderValue} key={keyIdentifier2.toString()}/>
        </div>
      </div>
    );
  }
}

//        <input type="range" min="1" max={sliderDates.length - 1} defaultValue={sliderValue} className="slider" onChange={this.sliderChange.bind(this)}></input>
