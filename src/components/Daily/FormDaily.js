import React from 'react'

const FormDaily = () => {
  return (
    <div className="card">
      <div className="card-body">
        <form>
          <div class="row">
            <div class="col-md-6 mb-3">
              <label for="">วันที่</label>
              <input type="date" className="form-control" />
            </div>
            <div class="col-md-6 mb-3">
              <label for="">ช่วงเวลา</label>
              <select name="" className="form-control">
                <option value="">-- กรุณาเลือก --</option>
                <option value="">เช้า 08.00 - 16.00 น.</option>
                <option value="">บ่าย 16.00 - 24.00 น.</option>
              </select>
            </div>
            <div class="col-md-6 mb-3">
              <label for="">จุดปฏิบัติงาน/หอผู้ป่วย</label>
              <select name="" className="form-control">
                <option value="">-- กรุณาเลือก --</option>
              </select>
            </div>
            <div class="col-md-6 mb-3">
              <label for="">เตียงขยาย (กรณีขยายเตียง)</label>
              <input type="text" className="form-control" />
            </div>
            <div class="col-md-6 mb-3">
              <label for="">จำนวนผู้ป่วย</label>
              <div style={{ display: 'flex' }}>
                <input type="text" className="form-control" placeholder="ผู้ใหญ่" />
                <input type="text" className="form-control" placeholder="เด็กป่วย" />
                <input type="text" className="form-control" placeholder="NICU" />
                <input type="text" className="form-control" placeholder="Sick NB" />
                <input type="text" className="form-control" placeholder="NB" />
              </div>
            </div>
            <div class="col-md-6 mb-3">
              <label for="">เจ้าหน้าที่</label>
              <div style={{ display: 'flex' }}>
                <input type="text" className="form-control" placeholder="RN" />
                <input type="text" className="form-control" placeholder="EMT" />
                <input type="text" className="form-control" placeholder="PN/NA" />
              </div>
            </div>
            <div class="col-md-6 mb-3">
              <label for="">ห้องแยก</label>
              <input type="text" className="form-control" />
            </div>
            <div class="col-md-6 mb-3">
              <label for="">Bird's</label>
              <input type="text" className="form-control" />
            </div>
            <div class="col-md-6 mb-3">
              <label for="">Ventilator</label>
              <input type="text" className="form-control" />
            </div>
            <div class="col-md-6 mb-3">
              <label for="">หมายเหตุ</label>
              <input type="text" className="form-control" />
            </div>
            <div class="col-md-6 mb-3">
              <label for="">เหตุการณ์สำคัญ</label>
              <textarea type="text" className="form-control"></textarea>
            </div>
            <div class="col-md-6 mb-3">
              <label for="">การแก้ไขเบื้องต้น</label>
              <textarea type="text" className="form-control"></textarea>
            </div>
            <div class="col-md-12 p-3 d-grid gap-2">
              <button className="btn btn-primary">บันทึก</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default FormDaily
