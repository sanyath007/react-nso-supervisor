import React, { useEffect, useState } from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import api from '../../api'

const inspectionSchema = Yup.object().shape({
  inspect_date: Yup.string().required('Inspect date is required!'),
  office: Yup.string().required('Office is required!'),
  period: Yup.string().required('Period is required!'),
});

const FormDaily = () => {
  const [offices, setOffices] = useState([]);

  const fetchOffices = async () => {
    const res = await api.get('/offices');

    setOffices(res.data);
  };

  const handleSubmit = (values, props) => {
    console.log(values, props);
  };

  useEffect(() => {
    fetchOffices();
  }, []);

  return (
    <div className="card">
      <div className="card-body">
        <Formik
          initialValues={{
            inspect_date: '',
            period: '',
            office: '',
            patient_adult: '',
            patient_ped: '',
            patient_nicu: '',
            patient_snb: '',
            patient_nb: '',
            officer_rn: '',
            officer_emt: '',
            officer_pnna: '',
            adds: '',
            isolated: '',
            on_birds: '',
            on_ventilator: '',
            remark: '',
            incidence: '',
            handling: ''
          }}
          validationSchema={inspectionSchema}
          onSubmit={handleSubmit}
        >
          {(formik) => {
            console.log(formik.errors);
            return (
              <Form>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="">วันที่</label>
                    <input
                      type="date"
                      name="inspect_date"
                      value={formik.values.inspect_date}
                      onChange={formik.handleChange}
                      className={`form-control ${formik.errors.inspect_date && formik.touched.inspect_date ? 'is-invalid' : ''}`}
                    />
                    {formik.errors.name && formik.touched.name ? (
                      <div className="invalid-feedback">
                        {formik.errors.inspect_date}
                      </div>
                    ) : null}
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="">ช่วงเวลา</label>
                    <select
                      name="period"
                      value={formik.values.period}
                      onChange={formik.handleChange}
                      className={`form-control ${formik.errors.period && formik.touched.period ? 'is-invalid' : ''}`}
                    >
                      <option value="">-- กรุณาเลือก --</option>
                      <option value="1">เช้า 08.00 - 16.00 น.</option>
                      <option value="2">บ่าย 16.00 - 24.00 น.</option>
                    </select>
                    {formik.errors.period && formik.touched.period ? (
                      <div className="invalid-feedback">
                        {formik.errors.period}
                      </div>
                    ) : null}
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="">จุดปฏิบัติงาน/หอผู้ป่วย</label>
                    <select
                      name="office"
                      value={formik.values.office}
                      onChange={formik.handleChange}
                      className={`form-control ${formik.errors.office && formik.touched.office ? 'is-invalid' : ''}`}
                    >
                      <option value="">-- กรุณาเลือก --</option>
                      {offices && offices.map((office) => {
                        return (
                          <option key={office.id} value={office.id}>
                            {office.name}
                          </option>
                        );
                      })}
                    </select>
                    {formik.errors.office && formik.touched.office ? (
                      <div className="invalid-feedback">
                        {formik.errors.office}
                      </div>
                    ) : null}
                    
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="">เตียงขยาย (กรณีขยายเตียง)</label>
                    <input
                      type="text"
                      name="adds"
                      value={formik.values.adds}
                      onChange={formik.handleChange}
                      className="form-control"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="">จำนวนผู้ป่วย</label>
                    <div style={{ display: 'flex' }}>
                      <input
                        type="text"
                        name="patient_adult"
                        value={formik.values.patient_adult}
                        onChange={formik.handleChange}
                        className="form-control"
                        placeholder="ผู้ใหญ่"
                      />
                      <input
                        type="text"
                        name="patient_ped"
                        value={formik.values.patient_ped}
                        onChange={formik.handleChange}
                        className="form-control"
                        placeholder="เด็กป่วย"
                        />
                      <input
                        type="text"
                        name="patient_nicu"
                        value={formik.values.patient_nicu}
                        onChange={formik.handleChange}
                        className="form-control"
                        placeholder="NICU"
                      />
                      <input
                        type="text"
                        name="patient_snb"
                        value={formik.values.patient_snb}
                        onChange={formik.handleChange}
                        className="form-control"
                        placeholder="Sick NB"
                      />
                      <input
                        type="text"
                        name="patient_nb"
                        value={formik.values.patient_nb}
                        onChange={formik.handleChange}
                        className="form-control"
                        placeholder="NB"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="">เจ้าหน้าที่</label>
                    <div style={{ display: 'flex' }}>
                      <input
                        type="text"
                        name="officer_rn"
                        value={formik.values.officer_rn}
                        onChange={formik.handleChange}
                        className="form-control"
                        placeholder="RN"
                      />
                      <input
                        type="text"
                        name="officer_emt"
                        value={formik.values.officer_emt}
                        onChange={formik.handleChange}
                        className="form-control"
                        placeholder="EMT"
                      />
                      <input
                        type="text"
                        name="officer_pnna"
                        value={formik.values.officer_pnna}
                        onChange={formik.handleChange}
                        className="form-control"
                        placeholder="PN/NA"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="">ห้องแยก</label>
                    <input
                      type="text"
                      name="isolated"
                      value={formik.values.isolated}
                      onChange={formik.handleChange}
                      className="form-control"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="">Bird's</label>
                    <input
                      type="text"
                      name="on_birds"
                      value={formik.values.on_birds}
                      onChange={formik.handleChange}
                      className="form-control"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="">Ventilator</label>
                    <input
                      type="text"
                      name="on_ventilator"
                      value={formik.values.on_ventilator}
                      onChange={formik.handleChange}
                      className="form-control"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="">หมายเหตุ</label>
                    <input
                      type="text"
                      name="remark"
                      value={formik.values.remark}
                      onChange={formik.handleChange}
                      className="form-control"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="">เหตุการณ์สำคัญ</label>
                    <textarea type="text" className="form-control"></textarea>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="">การแก้ไขเบื้องต้น</label>
                    <textarea type="text" className="form-control"></textarea>
                  </div>
                  <div className="col-md-12 p-3 d-grid gap-2">
                    <button className="btn btn-primary">บันทึก</button>
                  </div>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  )
}

export default FormDaily
