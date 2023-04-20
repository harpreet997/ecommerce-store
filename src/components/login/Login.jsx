import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginLogo from '../../assets/loginlogo.jpg';
import { toast } from "react-toastify";
import '../../styles/login/login.css';
import '../../App.css';

const Login = () => {
  const [logindata, setLogindata] = useState({
    username: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    setLogindata({
      ...logindata,
      [event.target.name]: event.target.value
    })
  }

  const handleLogin = (event) => {
    event.preventDefault();
    if(logindata.username !== "mor_2314")
    {
      toast.error("Please enter valid username", {
        position: "top-center",
        autoClose: 2000
    })
    }
    else if(logindata.password !== "83r5^_")
    {
      toast.error("Please enter valid password", {
        position: "top-center",
        autoClose: 2000
    })
    }
    else {
      localStorage.setItem('msg', "success")
      setTimeout(() => {
        toast.success("Login successfully", {
          position: "top-center",
          autoClose: 3000
      })
        navigate('/dashboard');
        window.location.reload(false);
      }, 2000)
    }
  }

  
  return (
    <div className="container-fluid" style={{ backgroundColor: 'purple' }}>
      <div className="App" >
        <div className='row' style={{paddingTop: 200}}>
          <div className='col-lg-5'>
            <img src={LoginLogo} className='login-logo' alt="loginLogo" />
          </div>
          <div className='col-lg-1 d-flex vertical-row vertical-line'>
            <div className="vr vertical-line"></div>
          </div>
          <div className='col-lg-6 align-items'>
            <form onSubmit={handleLogin}>
              <p className='text-start fs-3 text-color'>Login</p>
              <div className="mb-3">
                <p className="text-start text-color">User Name</p>
                <input type="text" className="form-input-width form-control w-50" id="username" name="username" placeholder="Enter your Username" onChange={handleChange}
                  required />
              </div>
              <div className="mb-3">
                <p className="text-start text-color">Password</p>
                <input type="password" className="form-input-width form-control w-50" id="password" name="password" placeholder="Enter your Password" onChange={handleChange}
                  required />
              </div>
              <div className='text-start'>
                <button className='btn btn-primary login-button' type='submit'><p className='fs-4'>Login</p></button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
