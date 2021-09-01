import React, {useState} from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Chart from '../components/highCharts/Chart';

const widgetId1: number = 1;
let activeSegmentOption: number = 0;
let sliderValue: number = 0;
let keyIdentifier: number = 0;

test("Chart functioning properly", () => {
  const { container } = render(<Chart widgetId={widgetId1} segmentId={activeSegmentOption} caseAge={sliderValue} key={keyIdentifier.toString()}/>);

  const chart = container.getElementsByClassName('chart');
  expect(chart.length).toBe(1);
});
