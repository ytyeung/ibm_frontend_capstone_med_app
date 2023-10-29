import React, { useEffect, useState } from 'react';
import './Notification.css';
const Notification = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [doctorData, setDoctorData] = useState(null);
  const [appointmentData, setAppointmentData] = useState(null);
  const [isShowNotification, setIsShowNotification] = useState(false);

  useEffect(() => {
    const storedUsername = sessionStorage.getItem('email');
    const storedDoctorData = JSON.parse(localStorage.getItem('doctorData'));

    if (storedDoctorData){
        setDoctorData(storedDoctorData);
        const storedAppointmentData = JSON.parse(localStorage.getItem(storedDoctorData[1]?.name));
        if (storedAppointmentData) {
            setAppointmentData(storedAppointmentData);
        }
    }

    if (storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    }

    //if (storedUsername && storedDoctorData && storedAppointmentData){
      setIsShowNotification(true);
    //}
  }, []);
  return (
    <div>
      {isShowNotification && (
        <>
          <div className="appointment-card">
            <div className="appointment-card__content">
              <h3 className="appointment-card__title">Appointment Details</h3>
              <ul className="appointment-card__message">
                <li><strong>Doctor:</strong> {doctorData[1]?.name}</li>
                <li><strong>Speciality:</strong> {doctorData[1]?.speciality}</li>
                <li><strong>Name:</strong> {appointmentData?.name}</li>
                <li><strong>Phone Number:</strong> {appointmentData?.phoneNumber}</li>
                <li><strong>Date of Appointment:</strong> {appointmentData?.selectedDate}</li>
                <li><strong>Time Slot:</strong> {appointmentData?.selectedSlot}</li>

              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Notification;