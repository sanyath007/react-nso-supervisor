import React from 'react'

const FilterTool = () => {
  return (
    <div className="card mb-2">
      <div className="card-body">
        <h3>FilterTool</h3>
        <div className="row">
          <div className="col-md-6 form-group">
            <label htmlFor="">ประจำวัน</label>
            <input type="date" className="form-control" />
          </div>
          <div className="col-md-6 form-group">
            <label htmlFor="">ช่วงเวลา</label>
            <select name="" className="form-control">
              <option value="">-- ทั้งหมด --</option>
              <option value="">เช้า 08.00 - 16.00 น.</option>
              <option value="">บ่าย 16.00 - 24.00 น.</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilterTool