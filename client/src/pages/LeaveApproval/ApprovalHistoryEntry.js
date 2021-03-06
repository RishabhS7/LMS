import React from "react";
import stringCap from '../../handlers/stringCap'
import getLeaveDuration from '../../handlers/noofdays'
import getStringDate from "../../handlers/StringData";

function ApprovalHistoryEntry(props) {
  let customStyling={
    background:props.entry.status==='rejected'?'rgb(233, 3, 3)':'rgb(27, 185, 27)'
  }
  return (
    <tbody>
      <tr>
        <td>{stringCap(props.entry.leaveType)}</td>
        <td>{props.entry.firstName}</td>
        <td>{getStringDate(props.entry.startDate)}</td>
        <td>{getStringDate(props.entry.endDate)}</td>
        <td>{getLeaveDuration(props.entry.startDate,props.entry.endDate,props.entry.halfDay)}</td>
        <td><span id="astatus" style={customStyling}>{stringCap(props.entry.status)}</span></td>
      </tr>
    </tbody>
  );
}

export default ApprovalHistoryEntry;
