import React, {useState} from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Slider from '../components/slider/Slider';

let sliderDates = ['2020-01-01', '2020-02-01', '2020-03-01', '2020-04-01'];
let sliderValue = 0;
let keyIdentifier: number = 0;
let keyIdentifier2: number = 1000;

const sliderChange = ({target}) => {
  return sliderValue = parseInt(target.value),
  keyIdentifier++,
  keyIdentifier2++;
};

test("Slider functioning properly", () => {
  render(<Slider sliderTitle='Case Age' sliderDates={sliderDates} sliderValue={sliderValue} sliderChange={sliderChange} />);

  const slider = screen.getByLabelText('Case Age');
  expect(slider).toBeInTheDocument();
});

describe('update value', ()=> {
  it('updates on change', () => {
    const sliderChange = jest.fn();
    render(<Slider sliderTitle='Case Age' sliderDates={sliderDates} sliderValue={sliderValue} sliderChange={sliderChange} />);
    const slider = screen.getByLabelText('Case Age');

    fireEvent.change(slider, {target: {value: 1}});

    expect(slider.value).toBe('1');
    expect(sliderChange).toHaveBeenCalled();
  });
});
