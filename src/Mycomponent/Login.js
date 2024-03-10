import logo from '../logo.svg';
import '../App.css';
import image from './Sc.jpg';
function Login() {

  function handleForm(event) {
    alert("form submitted");
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const un = data.get("un");
    const pw = data.get("pw");
    console.log(un + " --- " + pw);
  }

  return (
    <div className='image' style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', minHeight: '100vh' }}>
    <div className="login-container">
      <div className="login-form">
        <p align="center" style={{ color: 'black', fontStyle: 'italic' }}>Login</p>
        <form align="center" onSubmit={handleForm} style={{ color: 'white' }}>
          <span style={{ fontStyle: 'italic', color: 'black' }}>Email:</span> <input type="text" placeholder='' name="email" />
          <br />
          <span style={{ fontStyle: 'italic', color: 'black' }}>Password:</span> <input type="password" placeholder='' name="password" />
          <br /><br />
          <input type="submit" value="Login" />&nbsp;&nbsp;&nbsp;
          <input type="reset" value="Clear" />
        </form>
      </div>
    </div>
    </div>
  );
}


export default Login;
