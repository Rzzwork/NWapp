import React from 'react'
import './MQPage.css'
import Table from 'react-bootstrap/Table';

export default function MQPage() {
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
                        <td>New Chart Check</td>
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
                        <td>Weekly Chart Check</td>
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
                        <td>Auto Form Generation</td>
                        <td></td>
                        <td></td>
                        <th></th>
                        <td></td>
                        <td></td>
                        <th></th>
                        <th></th>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Workflow Efficiency Evaluation</td>
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
