export interface SegmentData {
  segmentId: number,
  segmentName: string,
  children: Array<Node>,
}

export interface ChartData {
  categories: Array<string>,
  series: Array<SeriesData>,
}

export interface SeriesData{
  name: string,
  unit: string,
  data: Array<number>,
}
