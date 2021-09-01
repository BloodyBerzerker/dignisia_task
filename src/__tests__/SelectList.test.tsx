import React, {useState} from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SelectList from '../components/selectList/SelectList';

let segmentOptions = [{class: 'topLayer', id: 1, name: 'All Countries'}, {class: 'secondLayer', id: 2, name: 'Sweden'}, {class: 'thirdLayer', id: 3, name: 'Invoice'}, {class: 'thirdLayer', id: 4, name: 'Credit Card'}, {class: 'thirdLayer', id: 5, name: 'Loan'}];
let initialSegmentOption = 1;
let keyIdentifier: number = 0;
let keyIdentifier2: number = 1000;

const dropDownChange = ({target}) => {
  return activeSegmentOption =  parseInt(target.value),
  keyIdentifier++,
  keyIdentifier2++;
};



test("SelectList renders properly", () => {
  render(<SelectList initialSegmentOption={initialSegmentOption} segmentOptions={segmentOptions} dropDownChange={dropDownChange}/>);

  const dropDown = screen.getByLabelText('Segment');
  expect(dropDown).toBeInTheDocument();
});

describe('SelectList updates value', ()=> {
  it('updates on change', () => {
    const dropDownChange = jest.fn();
    render(<SelectList initialSegmentOption={initialSegmentOption} segmentOptions={segmentOptions} dropDownChange={dropDownChange}/>);
    const dropDown = screen.getByLabelText('Segment');

    fireEvent.change(dropDown, {target: {value: 2}});

    expect(dropDown.value).toBe('2');
    expect(dropDownChange).toHaveBeenCalled();
  });
});
