import React, { useEffect, useState } from 'react';
import './ReviewForm.css';
import Popup from 'reactjs-popup';
import GiveReviews from '../GiveReviews/GiveReviews';

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

  const handleFormSubmit = (submittedMessage) => {
 

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
        {doctorData.map( (doctor,index) => (
            <tr key={doctor?.name}>
                <td>{doctor?.id}</td>
                <td style={{textAlign:'center'}}>{doctor?.name}</td>
                <td style={{textAlign:'center'}}>{doctor?.speciality}</td>
                <td style={{textAlign:'center'}}>
                    <Popup style={{ backgroundColor: '#FFFFFF'}}
                        trigger={
                        <button className="ReviewButton">
                            Click Here
                        </button>
                        }
                        modal open={showModal} onClose={() => setShowModal(false)}>
                        
                        {(close) => (
                            <div className="doctorbg" style={{overflow: 'scroll' }}>
                                <button className="close" onClick={close}>
                                      &times;
                                </button>
                            <GiveReviews doctor={doctor} onSubmit={handleFormSubmit} />
                            </div>
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