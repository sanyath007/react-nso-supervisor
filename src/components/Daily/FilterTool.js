import moment from 'moment';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const FilterTool = ({ onSelected }) => {
  const [values, setValues] = useState({ date: new Date(), period: '' });

  const handleChange = (e) => {
    const newValues = { ...values, [e.target.name]: e.target.value };
    setValues(newValues)

    
    onSelected(moment(newValues.date).format('YYYY-MM-DD'), newValues.period);
  };
  
  const dateChange = (date) => {
    const newValues = { ...values, date };
    setValues(newValues)

    onSelected(moment(newValues.date).format('YYYY-MM-DD'), newValues.period);
  };

  return (
    <div className="card mb-2">
      <div className="card-body">
        <h3>FilterTool</h3>
        <div className="row">
          <div className="col-md-6 form-group">
            <label htmlFor="">ประจำวัน</label>
            <DatePicker
              name="date"
              selected={values.date}
              onChange={(e) => dateChange(e)}
              dateFormat="dd/MM/yyyy"
              className="form-control"
            />
          </div>
          <div className="col-md-6 form-group">
            <label htmlFor="">ช่วงเวลา</label>
            <select name="period" className="form-control" onChange={(e) => handleChange(e)}>
              <option value="">-- ทั้งหมด --</option>
              <option value="1">เช้า 08.00 - 16.00 น.</option>
              <option value="2">บ่าย 16.00 - 24.00 น.</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilterTool