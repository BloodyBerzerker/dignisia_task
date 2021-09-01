import * as React from "react";
import SelectListInterface from './SelectListInterface';
import './SelectList.scss';


const SelectList = (Props: SelectListInterface) => {
  const segmentListItems: JSX.Element[] = Props.segmentOptions.map((s) => <option key={s.id} value={s.id} className={s.class}>{s.name}</option>);

  return (
    <div>
      <div className='selectListTitleBox'>
        <label htmlFor='selectListBox' className='selectListTitle'>Segment</label>
      </div>
      <div>
        <select id='selectListBox' className='selectList' defaultValue={Props.initialSegmentOption} onChange={Props.dropDownChange}>
          {segmentListItems}
        </select>
      </div>
    </div>
  );
};

export default SelectList;
