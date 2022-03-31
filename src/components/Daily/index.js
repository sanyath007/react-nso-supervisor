import React from 'react';
import { Link } from 'react-router-dom';
import FilterTool from './FilterTool';
import daily from '../../data/daily';

const Daily = () => {
  return (
    <>
      
      <FilterTool />

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
              {daily && daily.map((dl) => (
                <tr>
                  <td>{dl.name}</td>
                  <td style={{ textAlign: 'center' }}>{dl.phone}</td>
                  <td style={{ textAlign: 'center' }}>{dl.beds}</td>
                  <td style={{ textAlign: 'center' }}>4</td>
                  <td style={{ textAlign: 'center' }}>5</td>
                  <td style={{ textAlign: 'center' }}>6</td>
                  <td style={{ textAlign: 'center' }}>7</td>
                  <td style={{ textAlign: 'center' }}>8</td>
                  <td style={{ textAlign: 'center' }}>9</td>
                  <td style={{ textAlign: 'center' }}>10</td>
                  <td style={{ textAlign: 'center' }}>11</td>
                  <td style={{ textAlign: 'center' }}>12</td>
                  <td style={{ textAlign: 'center' }}>13</td>
                  <td style={{ textAlign: 'center' }}>14</td>
                  <td style={{ textAlign: 'center' }}>15</td>
                  <td style={{ textAlign: 'center' }}>16</td>
                  <td style={{ textAlign: 'center' }}>17</td>
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