import React from 'react'
import LeaveEntry from './LeaveEntry'
import { connect } from 'react-redux'
import '../styles/LeaveTable.css'

function LeaveTable(props) {

    const getRows=()=>{
        return props.data.map((entry)=>{
            return <LeaveEntry id={entry.id} entry={entry}></LeaveEntry>
        })
    }

    return (
        <div id="table">
            <table>
                <tr id="thr">
                    <th>Leave Type</th>
                    <th>Date</th>
                    <th>Days</th>
                    <th>Status</th>
                    <th>Edit</th>
                </tr>
                {getRows()}
            </table>
            
        </div>
    )
}

const mapStateToProps = state => {
    return {
        data: state.data
    }
}

export default connect(mapStateToProps)(LeaveTable)