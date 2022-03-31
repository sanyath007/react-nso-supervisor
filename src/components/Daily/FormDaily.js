import React from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';

const FormDaily = () => {
  return (
    <div className="card">
      <div className="card-body">
        <Formik
          initialValues={{
            inspect_date: new Date(),
            period: '',
            office: '',
            adult: '',
            ped: '',
            nicu: '',
            snb: '',
            nb: '',
            rn: '',
            emt: '',
            pnna: '',
            adds: '',
            isolated: '',
            on_birds: '',
            on_ventilator: '',
            remark: ''
          }}
        >
          {(formik) => (
            <Form>
              <div class="row">
                <div class="col-md-6 mb-3">
                  <label for="">วันที่</label>
                  <input
                    type="date"
                    name="inspect_date"
                    value={formik.values.inspect_date}
                    onChange={formik.handleChange}
                    className="form-control"
                  />
                </div>
                <div class="col-md-6 mb-3">
                  <label for="">ช่วงเวลา</label>
                  <select
                    name="period"
                    value={formik.values.period}
                    onChange={formik.handleChange}
                    className="form-control"
                  >
                    <option value="">-- กรุณาเลือก --</option>
                    <option value="">เช้า 08.00 - 16.00 น.</option>
                    <option value="">บ่าย 16.00 - 24.00 น.</option>
                  </select>
                </div>
                <div class="col-md-6 mb-3">
                  <label for="">จุดปฏิบัติงาน/หอผู้ป่วย</label>
                  <select
                    name="office"
                    value={formik.values.period}
                    onChange={formik.handleChange}
                    className="form-control"
                  >
                    <option value="">-- กรุณาเลือก --</option>
                  </select>
                </div>
                <div class="col-md-6 mb-3">
                  <label for="">เตียงขยาย (กรณีขยายเตียง)</label>
                  <input
                    type="text"
                    name="add_beds"
                    value={formik.values.add_beds}
                    onChange={formik.handleChange}
                    className="form-control"
                  />
                </div>
                <div class="col-md-6 mb-3">
                  <label for="">จำนวนผู้ป่วย</label>
                  <div style={{ display: 'flex' }}>
                    <input
                      type="text"
                      name="adult"
                      value={formik.values.adult}
                      onChange={formik.handleChange}
                      className="form-control"
                      placeholder="ผู้ใหญ่"
                    />
                    <input
                      type="text"
                      name="ped"
                      value={formik.values.ped}
                      onChange={formik.handleChange}
                      className="form-control"
                      placeholder="เด็กป่วย"
                      />
                    <input
                      type="text"
                      name="nicu"
                      value={formik.values.nicu}
                      onChange={formik.handleChange}
                      className="form-control"
                      placeholder="NICU"
                    />
                    <input
                      type="text"
                      name="snb"
                      value={formik.values.snb}
                      onChange={formik.handleChange}
                      className="form-control"
                      placeholder="Sick NB"
                    />
                    <input
                      type="text"
                      name="nb"
                      value={formik.values.nb}
                      onChange={formik.handleChange}
                      className="form-control"
                      placeholder="NB"
                    />
                  </div>
                </div>
                <div class="col-md-6 mb-3">
                  <label for="">เจ้าหน้าที่</label>
                  <div style={{ display: 'flex' }}>
                    <input
                      type="text"
                      name="rn"
                      value={formik.values.rn}
                      onChange={formik.handleChange}
                      className="form-control"
                      placeholder="RN"
                    />
                    <input
                      type="text"
                      name="emt"
                      value={formik.values.emt}
                      onChange={formik.handleChange}
                      className="form-control"
                      placeholder="EMT"
                    />
                    <input
                      type="text"
                      name="pnna"
                      value={formik.values.pnna}
                      onChange={formik.handleChange}
                      className="form-control"
                      placeholder="PN/NA"
                    />
                  </div>
                </div>
                <div class="col-md-6 mb-3">
                  <label for="">ห้องแยก</label>
                  <input
                    type="text"
                    name="isolated"
                    value={formik.values.isolated}
                    onChange={formik.handleChange}
                    className="form-control"
                  />
                </div>
                <div class="col-md-6 mb-3">
                  <label for="">Bird's</label>
                  <input
                    type="text"
                    name="on_birds"
                    value={formik.values.on_birds}
                    onChange={formik.handleChange}
                    className="form-control"
                  />
                </div>
                <div class="col-md-6 mb-3">
                  <label for="">Ventilator</label>
                  <input
                    type="text"
                    name="on_ventilator"
                    value={formik.values.on_ventilator}
                    onChange={formik.handleChange}
                    className="form-control"
                  />
                </div>
                <div class="col-md-6 mb-3">
                  <label for="">หมายเหตุ</label>
                  <input
                    type="text"
                    name="remark"
                    value={formik.values.remark}
                    onChange={formik.handleChange}
                    className="form-control"
                  />
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
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default FormDaily
