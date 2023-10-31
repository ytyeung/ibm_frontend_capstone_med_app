import React, { useEffect, useState } from 'react';
import './ReviewForm.css';
const ReviewForm = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [doctorData, setDoctorData] = useState([]);
  const [isShowReviewForm, setIsShowReviewForm] = useState(false);

  useEffect(() => {
    const storedUsername = sessionStorage.getItem('email');
    const storedDoctorData = JSON.parse(localStorage.getItem('doctorData'));

    if (storedDoctorData){
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
        {doctorData.map( (doctor,i) => (
            <tr key={doctor?.name}>
                <td>{i++}</td>
                <td style={{textAlign:'center'}}>{doctor?.name}</td>
                <td style={{textAlign:'center'}}>{doctor?.speciality}</td>
                <td></td>
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