import React from 'react';
import FilterTool from './FilterTool';

const Daily = () => {
  return (
    <>
      <FilterTool />

      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th rowSpan={2}>จุดปฏิบัติงาน/หอผู้ป่วย</th>
            <th rowSpan={2}>โทรศัพท์</th>
            <th rowSpan={2}>จำนวนเตียง</th>
            <th rowSpan={2}>กรณีขยายเตียง</th>
            <th colSpan={6}>จำนวนผู้ป่วย</th>
            <th rowSpan={2}>ห้องแยก</th>
            <th colSpan={3}>เจ้าหน้าที่</th>
            <th rowSpan={2}>Bird's</th>
            <th rowSpan={2}>Ventilator</th>
            <th rowSpan={2}>หมายเหตุ</th>
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
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td>8</td>
            <td>9</td>
            <td>10</td>
            <td>11</td>
            <td>12</td>
            <td>13</td>
            <td>14</td>
            <td>15</td>
            <td>16</td>
            <td>17</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default Daily