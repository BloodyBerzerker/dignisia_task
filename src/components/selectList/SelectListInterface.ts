export default interface SelectListInterface{
  initialSegmentOption: number;
  segmentOptions: Array<Segments>;
  dropDownChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export interface Segments {
  class: string,
  id: number,
  name: string
}
