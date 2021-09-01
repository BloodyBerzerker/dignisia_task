export default interface SliderInterface{
  sliderTitle: string;
  sliderDates: Array<string>;
  sliderValue: number;
  sliderChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
