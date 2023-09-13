import React from 'react'
import Layout from './Layout'
import { Link } from 'react-router-dom'
import './index.css'

const mockData = [
    { id:'E001', name: 'Harry', lastname: 'Potter', position: 'Senior Software Developer'},
    { id:'E002', name: 'Hermione', lastname: 'Granger', position: 'Product Manager'},
    { id:'E003', name: 'Ronald', lastname: 'Weasley', position: 'Junior Software Developer'},
    { id:'E004', name: 'Draco', lastname: 'Malfoy', position: 'Business Analyst'},
  ]

const User = () => {
    
    return (
        <Layout>
            <div className="user-page">
                <h1 className='user-h1'>Generation Thailand</h1>
                <h2 className='user-h2'>Home - User Sector</h2>
                <div className="btn-role">
                    <Link to='/user'><button className='btn-user'>User</button></Link>
                    <Link to='/admin'><button className='btn-admin'>Admin</button></Link>
                </div>
                <table className='user-table'>
                    <thead>
                        <tr>
                            <th className='th-user'>Name</th>
                            <th className='th-user'>Last Name</th>
                            <th className='th-user'>Position</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Harry</td>
                            <td>Potter</td>
                            <td>Software Developer</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </Layout>
    )
}



export default User