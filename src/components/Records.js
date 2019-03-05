import React, { Component } from 'react';
import Record from './Record';
class Records extends Component {
  constructor() {
    super();
    this.state = {
      records: [
        { 'id': 1,'date':'2019-2-20','title':'收入','amount':100},
        { 'id': 2, 'date': '2019-2-21', 'title': '收入', 'amount': 50 },
        { 'id': 3,'date':'2019-2-25','title':'支出','amount':150},        
      ]
    }
  }
  render() {
    return (
      <div>
        <h2>Records</h2>
        <table className='table table-bordered'>
          <thead>
            <tr>
              <th>Date </th>
              <th>Title</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {this.state.records.map((record,i) => <Record key={i} record={record}/>)}
          </tbody>
        </table>
      </div>
    );
  }
}
export default Records;
