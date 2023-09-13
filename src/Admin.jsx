import React, { useState } from 'react'
import Layout from './Layout'
import { Link } from 'react-router-dom'
import './index.css'


const Admin = () => {
    const [name,setName] = useState();
    const [lastName,setLastName] = useState();
    const [position,setPositions] = useState();
    const [deleteData,setDeleteData] = useState();

    return (
        <Layout>
            <div className="admin-page">
                <h1 className='admin-h1'>Generation Thailand</h1>
                <h2 className='admin-h2'>Home - Admin Sector</h2>
                <div className="btn-role">
                    <Link to='/user'><button className='btn-user'>User</button></Link>
                    <Link to='/admin'><button className='btn-admin'>Admin</button></Link>
                </div>
                <div className="create-user-data">
                    <h2>Create User</h2>
                    <form>
                    <input type="text" name="name" id="name" placeholder='Name'/>
                    <input type="text" name="name" id="name" placeholder='Last Name'/>
                    <input type="text" name="name" id="name" placeholder='Position'/>
                    <button className='btn-save-data'>Save</button>
                    </form>
                </div>
                <TableData/>
            </div>
        </Layout>
    )
}
const TableData = () => {
    return (
        <table className='admin-table'>
            <thead>
                <tr>
                    <th className='th-admin'>Name</th>
                    <th className='th-admin'>Last Name</th>
                    <th className='th-admin'>Position</th>
                    <th className='th-admin'>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Harry</td>
                    <td>Potter</td>
                    <td>Software Developer</td>
                    <td><button className='delete-action'>DELETE</button></td>
                </tr>
            </tbody>
        </table>
    )
}

export default Admin