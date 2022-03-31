import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FilterTool from './FilterTool';
import api from '../../api';
import moment from 'moment';

const Daily = () => {
  const [inspections, setInspections] = useState([]);
  const [selectedDate, setSelectedDate] = useState(moment().format('YYYY-MM-DD'));
  const [selectedPeriod, setSelectedPeriod] = useState('1');

  const fetchInspections = async () => {
    const res = await api.get(`/inspections?date=${selectedDate}&period=${selectedPeriod}`);
    
    setInspections(res.data.items);
  }

  const handleFilter = (date, period) => {
    console.log(date, period);
  };

  useEffect(() => {
    fetchInspections();
  }, []);

  return (
    <>
      <FilterTool onSelected={handleFilter} />

      <div className="card">
        <div className="card-body">

          <div className="row mb-2">
            <div className="col-md-12">
              <Link to="/add" className="btn btn-primary float-end">
                <i className="uil uil-plus-circle"></i>
                บันทึกตรวจการ
              </Link>
            </div>
          </div>

          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th rowSpan={2} style={{ width: '10%', textAlign: 'center' }}>จุดปฏิบัติงาน/หอผู้ป่วย</th>
                <th rowSpan={2} style={{ width: '5%', textAlign: 'center' }}>โทรศัพท์</th>
                <th rowSpan={2} style={{ width: '5%', textAlign: 'center' }}>จำนวนเตียง</th>
                <th rowSpan={2} style={{ width: '5%', textAlign: 'center' }}>กรณีขยายเตียง</th>
                <th colSpan={6} style={{ textAlign: 'center' }}>จำนวนผู้ป่วย</th>
                <th rowSpan={2} style={{ width: '5%', textAlign: 'center' }}>ห้องแยก</th>
                <th colSpan={3} style={{ textAlign: 'center' }}>เจ้าหน้าที่</th>
                <th rowSpan={2} style={{ width: '5%', textAlign: 'center' }}>Bird's</th>
                <th rowSpan={2} style={{ width: '5%', textAlign: 'center' }}>Ventilator</th>
                <th rowSpan={2} style={{ textAlign: 'center' }}>หมายเหตุ</th>
                <th rowSpan={2} style={{ width: '8%', textAlign: 'center' }}>Actions</th>
              </tr>
              <tr>
                <th>ผู้ใหญ่</th>
                <th>เด็กป่วย</th>
                <th>NICU</th>
                <th>SB</th>
                <th>NB</th>
                <th>รวม</th>
                <th>RN</th>
                <th>EMT</th>
                <th>PN/NA</th>
              </tr>
            </thead>
            <tbody>
              {inspections && inspections.map((inspect) => (
                <tr key={inspect.id}>
                  <td>{inspect.office?.name}</td>
                  <td style={{ textAlign: 'center' }}>{inspect.office?.tel}</td>
                  <td style={{ textAlign: 'center' }}>{inspect.office?.beds}</td>
                  <td style={{ textAlign: 'center' }}>{inspect.adds}</td>
                  <td style={{ textAlign: 'center' }}>{inspect.patient_adult}</td>
                  <td style={{ textAlign: 'center' }}>{inspect.patient_ped}</td>
                  <td style={{ textAlign: 'center' }}>{inspect.patient_nicu}</td>
                  <td style={{ textAlign: 'center' }}>{inspect.patient_snb}</td>
                  <td style={{ textAlign: 'center' }}>{inspect.patient_nb}</td>
                  <td style={{ textAlign: 'center' }}>{inspect.patient_total}</td>
                  <td style={{ textAlign: 'center' }}>{inspect.isolated}</td>
                  <td style={{ textAlign: 'center' }}>{inspect.officer_rn}</td>
                  <td style={{ textAlign: 'center' }}>{inspect.officer_emt}</td>
                  <td style={{ textAlign: 'center' }}>{inspect.officer_pnna}</td>
                  <td style={{ textAlign: 'center' }}>{inspect.on_birds}</td>
                  <td style={{ textAlign: 'center' }}>{inspect.on_ventilator}</td>
                  <td style={{ textAlign: 'center' }}>{inspect.remark}</td>
                  <td style={{ textAlign: 'center' }}>
                    <div className="btn-group">
                      <Link to="/" className="btn btn-warning btn-sm mr-2">
                        <i className="uil uil-edit"></i>
                      </Link>
                      <Link to="/" className="btn btn-danger btn-sm">
                        <i className="uil uil-trash-alt"></i>
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>
      </div>
    </>
  )
}

export default Daily