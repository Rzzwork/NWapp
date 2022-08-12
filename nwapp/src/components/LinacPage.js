import React from 'react'
import './LinacPage.css'
import Table from 'react-bootstrap/Table';

export default function LinacPage() {
    return (
        <div className='homepage container'>
            <Table striped>
                <thead>
                    <tr>
                        <th>Action</th>
                        <th>Test/Cycle</th>
                        <th>Due Date</th>
                        <th>Unit</th>
                        <th>Frenquency</th>
                        <th>Assigned To</th>
                        <th>Completed</th>
                        <th>Pass/Fail</th>
                        <th>Review Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Monthly QA</td>
                        <td></td>
                        <td></td>
                        <th></th>
                        <td></td>
                        <td></td>
                        <th></th>
                        <th></th>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Annual QA</td>
                        <td></td>
                        <td></td>
                        <th></th>
                        <td></td>
                        <td></td>
                        <th></th>
                        <th></th>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Patient QA</td>
                        <td></td>
                        <td></td>
                        <th></th>
                        <td></td>
                        <td></td>
                        <th></th>
                        <th></th>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}
