import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const AppointmentList = () => {
  const [appointments, setAppointments] = useState([]);


  const handleUpdateStatus = async (appointmentId, status) => {
    // Implement your logic to update the appointment status
  };

  return (
    <div className="container">
      <div className="banner" style={{ marginBottom: '20px' }}>
        <h2 style={{ marginBottom: '10px' }}> My Appointments</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={tableHeaderStyle}>User</th>
              <th style={tableHeaderStyle}>Date</th>
              <th style={tableHeaderStyle}>Status</th>
              <th style={tableHeaderStyle}>Visited</th>
            </tr>
          </thead>
          <tbody>
            {appointments && appointments.length > 0 ? (
              appointments.map((appointment) => (
                <tr key={appointment._id}>
                  <td style={tableCellStyle}>
                    {`${appointment.firstName} ${appointment.lastName}`}
                  </td>
                  <td style={tableCellStyle}>
                    {appointment.appointment_date.substring(0, 16)}
                  </td>
                  <td style={tableCellStyle}>
                    {`${appointment.doctor.firstName} ${appointment.doctor.lastName}`}
                  </td>
                  <td style={tableCellStyle}>{appointment.department}</td>
                  <td style={tableCellStyle}>
                    <select
                      className={
                        appointment.status === 'Pending'
                          ? 'value-pending'
                          : appointment.status === 'Accepted'
                          ? 'value-accepted'
                          : 'value-rejected'
                      }
                      style={{ width: '100%' }}
                      value={appointment.status}
                      onChange={(e) =>
                        handleUpdateStatus(appointment._id, e.target.value)
                      }
                    >
                      <option value="Pending" className="value-pending">
                        Pending
                      </option>
                      <option value="Accepted" className="value-accepted">
                        Accepted
                      </option>
                      <option value="Rejected" className="value-rejected">
                        Rejected
                      </option>
                    </select>
                  </td>
                  <td style={tableCellStyle}>
                    {appointment.hasVisited === true ? (
                      <GoCheckCircleFill className="green" />
                    ) : (
                      <AiFillCloseCircle className="red" />
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" style={{ textAlign: 'center' }}>
                  No Appointments Found!
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const tableHeaderStyle = {
  backgroundColor: '#f2f2f2',
  padding: '12px',
  borderBottom: '1px solid #ddd',
  textAlign: 'left',
};

const tableCellStyle = {
  padding: '12px',
  borderBottom: '1px solid #ddd',
  textAlign: 'left',
};

export default AppointmentList;
