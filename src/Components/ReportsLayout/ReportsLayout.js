import React, { useEffect, useState} from 'react';
import './ReportsLayout.css';

const ReportsLayout = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [doctorData, setDoctorData] = useState([]);
  const [isShowReportsLayout, setIsShowReportsLayout] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    sessionStorage.setItem('email',"davidyeung@a.com");

    const storedUsername = sessionStorage.getItem('email');
    let storedDoctorData = JSON.parse(localStorage.getItem('doctorData'));

    if (storedDoctorData){
        let i=1;
        storedDoctorData.forEach(element => {element.id = i++;});

        setDoctorData(storedDoctorData);

    }

    if (storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    }

    if (storedUsername && storedDoctorData){
      setIsShowReportsLayout(true);
    }
  }, []);

  return (
      <div className="ReportsLayoutPane">
        <div className="ReportsLayoutText">Reports</div>
        <center>
        <table className="ReportsLayoutTable">
          <thead>
            <tr>
                <th>Serial Number</th>
                <th>Doctor Name</th>
                <th>Doctor Speciality</th>
                <th>View Report</th>
                <th>Download Report</th>
            </tr>
        </thead>
        <tbody>
        {isLoggedIn && doctorData.map( (doctor) => (
            <tr key={doctor?.id}>
                <td style={{textAlign:'center'}}>{doctor?.id}</td>
                <td style={{textAlign:'center'}}>{doctor?.name}</td>
                <td style={{textAlign:'center'}}>{doctor?.speciality}</td>
                <td style={{textAlign:'center'}}><button>View Reports</button></td>
                <td><button> Download Reports</button></td>

            </tr>)
        )}
        </tbody>
      
      </table>
      </center>
    </div>
  );
};

export default ReportsLayout;