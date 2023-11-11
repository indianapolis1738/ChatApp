import React from 'react'
import './../styles/Home.scss'
import { NavLink, Link } from 'react-router-dom'
import Table from 'react-bootstrap/Table';


function HomeScreen() {
  return (
    <div className='home'>
        <p className="welcome">
            Welcome USER!!!
        </p>
        <div className="balance">
            <label htmlFor="p" >Total Balance</label>
            <p className="balance-amount">
                NGN200,000.00
            </p> <hr />
            <Link className='history' to='/history'>
                Transaction History &#8669;
            </Link>
        </div>
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
        <div className="links">
            <NavLink className='send' to='/send'>Send &#8663;</NavLink>
            <NavLink className='send' to='/receive'>Receive &#8665;</NavLink>
        </div>
    </div>
  )
}

export default HomeScreen