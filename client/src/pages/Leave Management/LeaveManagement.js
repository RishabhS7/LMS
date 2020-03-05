import React, { useState } from "react";
import Modal from "react-modal";
import { useFormState } from "react-use-form-state";
import DatePicker from "react-date-picker";

function LeaveManagement() {
  let [isModalOpen, setIsModalOpen] = useState(false);
  let [formState, { text, number, checkbox }] = useFormState();

  let [startDate, setStartDate] = useState(new Date());
  let [endDate, setEndDate] = useState(startDate);

  // const modalHandler =()=>{
  //     setIsModalOpen(true);
  // }
  function handleSubmit() {
    let obj = {};
    console.log("yup working");
    setIsModalOpen(false);
  }

  Modal.defaultStyles.content.width = "30vw";
  Modal.defaultStyles.content.boxSizing = "border-box";
  Modal.defaultStyles.content.height = "18vw";
  Modal.defaultStyles.content.textAlign = "center";
  Modal.defaultStyles.content.marginLeft = "35vw";
  Modal.defaultStyles.content.padding = "2.5rem";

  return (
    <>
      <div>
        <button type="button" id="submit" onClick={() => setIsModalOpen(true)}>
          Add Leave
        </button>

        <div id="tableManage">
          <table>
            <tr id="leaveManage">
              <th>Leave Type</th>
              <th>Alloted Leaves</th>
              <th>Weekends</th>
              <th>Status</th>
              <th>Leave year</th>
              <th>Edit</th>
            </tr>
          </table>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        ariaHideApp={false}
      >
        <h3>Add leave type</h3>

        <form onSubmit={handleSubmit}>
          <label>Leave Type:</label>
          <input {...text("leaveType")} />
          <br />
          <label>Alloted Leaves:</label> <input {...number("allotedLeaves")} />
          <br />
          <label>Leave Year</label>
          <div>
            <label>From:</label>
            <DatePicker
              className="datep"
              onChange={date => {
                setStartDate(date);
                setEndDate(date);
              }}
              value={startDate}
              format="dd.MM.yy"
            />
            <label>To:</label>
            <DatePicker
              className="datep"
              onChange={date => setEndDate(date)}
              value={endDate}
              format="dd.MM.yy"
              minDate={startDate}
            />
          </div>
          <br />
          <label>Status:</label>
          <br />
          <label>Active</label>
          <input {...checkbox("checkboxActive")} />
          <br />
          <label>Weekends</label>
          <input {...checkbox("checkboxWeekends")} />
          <div>
            <button type="submit" id="resb" onClick={handleSubmit}>
              save
            </button>
            <button
              type="button"
              id="resb"
              onClick={() => setIsModalOpen(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
}

export default LeaveManagement;
