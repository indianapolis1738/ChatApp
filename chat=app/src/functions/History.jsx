import React from 'react'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom'



function History() {
  return (
    <div className='home'>

     <Link to='/'>
        <button className='Back'>&#8656;</button>
     </Link>
      

      <div className="recent">
            <h3>Recent Transactions</h3>
            <Table responsive>
                <thead>
                    <tr>
                        <th>Coin</th>
                        <th>Amount</th>
                        <th>Type</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Bitcoin</td>
                        <td>0.005</td>
                        <td>Send</td>
                        <td>Successful</td>
                    </tr>
                    <tr>
                        <td>Bitcoin</td>
                        <td>0.005</td>
                        <td>Send</td>
                        <td>Successful</td>
                    </tr>
                    <tr>
                        <td>Bitcoin</td>
                        <td>0.005</td>
                        <td>Send</td>
                        <td>Successful</td>
                    </tr>
                    <tr>
                        <td>Bitcoin</td>
                        <td>0.005</td>
                        <td>Send</td>
                        <td>Successful</td>
                    </tr>
                    <tr>
                        <td>Bitcoin</td>
                        <td>0.005</td>
                        <td>Send</td>
                        <td>Successful</td>
                    </tr>
               
                </tbody>
            </Table>
        </div>
    </div>
  )
}

export default History