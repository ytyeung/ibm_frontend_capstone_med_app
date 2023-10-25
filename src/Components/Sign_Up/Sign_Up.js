import './Sign_Up.css'

function Sign_Up(){
    return(
      <div className="SignUpPane">
      <div className="SignUpText">Sign Up</div>
      <div className="AlreadyAMemberLogin"><span className="alreadyamember">Already a member? <a href="../Login/Login.html">Login</a></span></div>
      <form>
      <div className="form_area">
        <label className="label" for="role">Role</label>
      <select id="role" required name="role" type="role" className="select-control">
        <option value="" disabled selected>Please Choose...</option>
        <option value="patient">Patient</option>
        <option value="doctor">Doctor</option>
      </select>
      </div>
      <div className="form_area">
        <label className="label" for="name">Name</label>
        <input autocomplete="off" type="name" name="name" id="name" required className="form-control" placeholder="Enter your name" />
      </div>   
      <div className="form_area">
        <label className="label" for="phone">Phone</label>
        <input autocomplete="off" type="tel" name="phone" id="phone" required className="form-control" placeholder="Enter your phone number" />
      </div>
      <div className="form_area">
        <label className="label" for="email">Email</label>
        <input autocomplete="off" type="email" name="email" id="email" required className="form-control" placeholder="Enter your email" />
      </div>
      <div className="form_area">
        <label className="label" for="password">Password</label>
        <div className="password_input">
        <input autocomplete="none" type="password" name="password" id="password" required className="form-control" placeholder="Enter your password" /><i className="far fa-eye" id="togglePassword"></i>
        </div>
      </div>
      
        
      <div className="button_area">
        <button type="reset" className="reset_btn">Reset</button>
        <button type="submit" className="submit_btn">Submit</button>
      </div>
    </form>
  </div>
    );
}

export default Sign_Up;