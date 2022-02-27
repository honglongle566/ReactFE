import React, {useState} from "react";
import { Link } from "react-router-dom";
import '../css/Form.css';

const SignUp = (props) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function validationForm() {
        console.log(username,password);
        let returnData = {
          error : false,
          msg: ''
        }
        if(password.length <= 6){
            returnData = {
                error: true,
                msg: 'Mật khẩu phải lớn hơn 6 ký tự'
            }
        }
        return returnData;
    }

    function submitForm(e) {
        e.preventDefault();
        const validation = validationForm()
        if (validation.error) {
          alert(validation.msg)
        }
        props.doRegister(username, password, (accessToken) => {
            alert('Đăng ký thành công')
            props.setAccessToken(accessToken);
            props.history.push('/');
        },(res) => {
            alert(res);
        });

    }

    return (
        <form onSubmit={submitForm} className="auth-form">
            <h3>SignUp</h3>
            <div className="form-group">
                <label>Username</label>
                <input type="username" className="form-control" value={username} onChange={e => setUsername(e.target.value)} placeholder="Enter username" />
                <label>Password</label>
                <input type="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)} placeholder="Enter password" />
            </div>
            <div className="form-control__submit2" >
                <button className="meo"
                    type="submit" style={{width:'100px',margin:'10px',border:'1px solid gray', borderRadius: '10px'}}>
                    <Link onClick={e => {
                        e.preventDefault();
                        props.doRegister(username, password, (accessToken) => {
                            props.setAccessToken(accessToken);
                            props.history.push('/');
                        });
                    }} style={{textDecoration:'none', color:'black'}} to="/home">Confirm</Link>
                </button>
                <button className="meo" type="submit" style={{width:'300px',border:'1px solid gray',borderRadius: '10px'}} >  
                        <Link style={{textDecoration:'none', color:'black'}} to="/sign-in"> Don't have an account? Log in!</Link>
                </button>
            </div>
        </form>
    );
}

export default SignUp;