import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ChartSection from "../components/chartSection/ChartSection";

test("Chart section functioning properly", () => {
  render(<ChartSection />);

  const selectList = screen.getByLabelText('Segment');
  expect(selectList).toBeInTheDocument();
});

describe('update segment', ()=> {
  it('updates on change', () => {
    const sliderChange = jest.fn();
    render(<ChartSection />);
    const selectList = screen.getByLabelText('Segment');

    fireEvent.change(selectList, {target: {value: 1}});

    expect(selectList.value).toBe('1');
  });
});
