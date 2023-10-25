import './Login.css'

function Login(){
    return(    
    <div className="LoginPane">
      <form>
      <div className="LoginText">Login</div>
      <div className="AreYouANewMemberSignUpHere">
        <span className="areyouanewmember">Are you a new member? <a href="/Sign_Up">Sign Up Here</a></span>
      </div>
      
      <div className="form_area">
        <label className="label" for="email">Email (name@example.com)</label>
        <input type="email" required pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}" name="email" id="email" className="form-control" placeholder="Enter your email" />
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
      <div className="ForgotPassword">Forgot Password?</div>
  </div>
    );
}

export default Login;