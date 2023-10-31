import React, { useEffect, useState } from 'react';
import './ReviewForm.css';
import Popup from 'reactjs-popup';

const ReviewForm = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [doctorData, setDoctorData] = useState([]);
  const [isShowReviewForm, setIsShowReviewForm] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const storedUsername = sessionStorage.getItem('email');
    let storedDoctorData = JSON.parse(localStorage.getItem('doctorData'));

    if (storedDoctorData){
        let i=1;
        storedDoctorData.forEach(element => {element.id = i++;});

        setDoctorData(storedDoctorData);
        //const storedAppointmentData = JSON.parse(localStorage.getItem(storedDoctorData[1]?.name));
        //if (storedAppointmentData) {
        //   setAppointmentData(storedAppointmentData);
        //}
    }

    if (storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    }

    if (storedUsername && storedDoctorData){
      setIsShowReviewForm(true);
    }
  }, []);

  const handleFormSubmit = (appointmentData) => {
    const newAppointment = {
      id: uuidv4(),
      ...appointmentData,
    };
    const updatedAppointments = [...appointments, newAppointment];
    setAppointments(updatedAppointments);
    setShowModal(false);

    const doctorData = {'name': name, 'speciality': speciality};
    const storedDoctorData = JSON.parse(localStorage.getItem('doctorData'));
    let updatedDoctorData = [];

    if (storedDoctorData){
        if (!storedDoctorData.includes(doctorData)){
            updatedDoctorData = [...storedDoctorData, doctorData];
        }
    }else{
        updatedDoctorData =[doctorData];
    }

    localStorage.setItem('doctorData',JSON.stringify(updatedDoctorData));
    localStorage.setItem(name,JSON.stringify(newAppointment));

    window.location.reload();

  };

  return (
      <div className="ReviewFormPane">
        <div className="ReviewFormText">Reviews</div>
        <center>
        <table className="ReviewFormTable">
          <thead>
            <tr>
                <th>Serial Number</th>
                <th>Doctor Name</th>
                <th>Doctor Speciality</th>
                <th>Provide Feedback</th>
                <th>Review Given</th>
            </tr>
        </thead>
        <tbody>
        {doctorData.map( (doctor) => (
            <tr key={doctor?.name}>
                <td></td>
                <td style={{textAlign:'center'}}>{doctor?.name}</td>
                <td style={{textAlign:'center'}}>{doctor?.speciality}</td>
                <td>
                    <Popup style={{ backgroundColor: '#FFFFFF'}}
                        trigger={
                        <button className="ReviewButton">
                            Click Me
                        </button>
                        }
                        modal open={showModal} onClose={() => setShowModal(false)}>
                        
                        {(close) => ( 
                            <AppointmentForm onSubmit={handleFormSubmit} />
                        )}
                    </Popup>
                </td>
                <td></td>

            </tr>)
        )}
        </tbody>
      
      </table>
      </center>
    </div>
  );
};


export default ReviewForm;