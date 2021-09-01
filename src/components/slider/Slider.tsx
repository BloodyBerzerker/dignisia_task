import * as React from "react";
import SliderInterface from './SliderInterface';
import './Slider.scss';

const Slider = (Props: SliderInterface) => {
  return (
    <div className="sliderContainer">
      <div className='sliderHeaderSection'>
        <label htmlFor='currentSliderAgeRange' className='sliderTitle'>{Props.sliderTitle}</label>
        <div className='currentSliderRange'>From {Props.sliderDates[Props.sliderValue]} to {Props.sliderDates[Props.sliderDates.length - 1]}</div>
      </div>
      <input id='currentSliderAgeRange' type="range" min="0" max={Props.sliderDates.length - 1} defaultValue={Props.sliderValue} className="slider" onChange={Props.sliderChange}></input>
      <div className='sliderValueSection'>
        <div className="sliderStartValue">{Props.sliderDates[0]}</div>
        <div className="sliderEndValue">{Props.sliderDates[Props.sliderDates.length - 1]}</div>
      </div>
    </div>
  );
};

export default Slider;
