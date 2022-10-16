import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import app from '../firebase/firebase.init';

const auth = getAuth(app);

const LoginBootstrap = () => {
    const [success, setSuccess]=useState(false);
    const [userEmail, setUserEmail]= useState('')

    const handleSubmit = event=>{
        event.preventDefault();

        setSuccess(false);
        const form = event.target;

        const email = form.email.value;
        
        const password = form.password.value;
        console.log(email, password);

        signInWithEmailAndPassword(auth,email,password)
        .then(result => {
            const user = result.user
            console.log(user);
            setSuccess(true)
        })
        .catch(error => {
            console.error('error',error);
        })
    }
    const handleEmailBlur =event=>{
        const email =event.target.value;
        setUserEmail(email);
        console.log(email);

    }

    const handleForgetPassword=()=>{
        if(!userEmail){
            alert('please enter your email address')
            return;
        }

        sendPasswordResetEmail(auth, userEmail)
        .then(() =>{
            alert('password Reset email sent, please check your email')
        })
        .catch(error =>{
            console.error('error',error);
        })
    }
    return (
        <div className='w-50 mx-auto'>
            <h3>please Login</h3>
           <form onSubmit={handleSubmit} >
           <div className="mb-3">
                <label htmlFor="formGroupExampleInput" className="form-label">Example label</label>
                <input onBlur={handleEmailBlur} type="email" name='email' className="form-control" id="formGroupExampleInput" placeholder="Types of your Email" required/>
            </div>
            <div className="mb-3">
                <label htmlFor="formGroupExampleInput2" className="form-label">Another label</label>
                <input type="password" name='password' className="form-control" id="formGroupExampleInput2" placeholder="Types of your password" required/>
                
            </div>
            <button type="submit" className="btn btn-warning">Login</button>
           </form>
           {success && <p>successfully login to the account</p>}
           <p>New to this website ? please <Link to='/register'>Register</Link></p>
           <p>Forget password? <button type="button" onClick={handleForgetPassword} className="btn btn-link">Reset Password</button></p>
    
        </div>
    );
};

export default LoginBootstrap;