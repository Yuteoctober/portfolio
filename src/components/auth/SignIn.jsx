import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { sendPasswordResetEmail } from 'firebase/auth';
import { onAuthStateChanged, signOut } from "firebase/auth"
import { useState, useEffect } from "react"
import { auth } from './FirebaseAuth'
import './SignIn.css'
import google from '../auth/google.png'

 
function SignIn() {

    const [signInEmail, setSignInEmail] = useState('')
    const [signInPassword, setSignInPassword] = useState('')
    const [signUpEmail, setSignUpEmail] = useState('')
    const [signUpPassword, setSignUpPassword] = useState('')
    const [authUser, SetAuthUser] = useState(null)
    const [loginPage, setLoginPage] = useState(true)

    function signIn(e) { // Sign in
        e.preventDefault();
        signInWithEmailAndPassword(auth, signInEmail , signInPassword)
        .then((useCredential) => {
            console.log(useCredential)
            setSignInEmail('')
            setSignInPassword('')
        }).catch((error) => {
            console.log(error)
            alert('Please check your email and password')
        })
    }

    function signUp(e) { // sign up
        e.preventDefault();
        createUserWithEmailAndPassword(auth, signUpEmail , signUpPassword)
        .then((useCredential) => {
            console.log(useCredential)
            setSignUpEmail('')
            setSignUpPassword('')
        }).catch((error) => {
            console.log(error)
        })
    }

    function userSignOut() { // sign out
        signOut(auth).then(() => {
            console.log('signout seccessful')
        }).catch(error => console.log(error))
    }


    useEffect(() => { 
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                SetAuthUser(user)
            } else {
                SetAuthUser(null)
            }
        })

        return () =>  {
            listen()
        }
    }, [])

    function forgotPassword(signInEmail) { //forget password
        if(signInEmail.length === 0) {
            alert('Please enter your email')
        }
        sendPasswordResetEmail(auth, signInEmail)
        .then(() => {
            alert('Password reset email sent. Check your email.')
            console.log('Password reset email sent. Check your email.')
        })
        .catch((error) => {
            console.error('Error sending password reset email:', error)
        })
    }

    async function signInWithGoogle() {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            console.log('Signed in with Google:', user);
            setLoginPage(true)
            setSignInEmail('')
            setSignInPassword('')
            setSignUpEmail('')
            setSignUpPassword('')
        } catch (error) {
            console.error('Error signing in with Google:', error);
        }
    }
  return (
    <section className='section_login'>
     <div className='login_status'>
      { authUser ? 
      <>
        <p className='signout_one'>{`Signed In as ${authUser.email}`}</p>
        <button onClick={userSignOut}>Sign Out</button>
      </>
      : 
      <p className='signout_two'>Signed Out</p>}
     </div>
     <div className='sign_in_container'>
      {loginPage? (
        <form onSubmit={signIn}>
            <h2>Login</h2>
                <input className='input_login_email'
                type="email" 
                placeholder='Email' 
                value={signInEmail}
                onChange={(e) => setSignInEmail(e.target.value)}
                />
            <input type="password" 
                placeholder='Password' 
                value={signInPassword}
                onChange={(e) => setSignInPassword(e.target.value)}
            />
            <p onClick={() => forgotPassword(signInEmail)}
                className='forget_password'
                >Forget Password</p>
            <button className='login_btn' type='submit'>Login</button>
            <button className='google_signin_btn' onClick={signInWithGoogle}><img src={google} alt="google" /> Sign in with Google</button>
            <p onClick={() => setLoginPage(false)} className='register'>Don't have an account? <span>Register</span></p>
        </form>
      ):(
        <form onSubmit={signUp}>
        <h2>Sign Up</h2>
        <p onClick={() => setLoginPage(true)} className='already_member'>Already a member? <span>Login</span></p>
        <input className='input_sign_up_email'
            type="email" 
            placeholder='Email' 
            value={signUpEmail}
            onChange={(e) => setSignUpEmail(e.target.value)}
            />
        <input type="password" 
            placeholder='Password' 
            value={signUpPassword}
            onChange={(e) => setSignUpPassword(e.target.value)}
            />
            <button className='signup_btn' type='submit'>Sign Up</button>
            <p className='or'>or signup with</p>
            <img onClick={signInWithGoogle} className='google_signup' src={google} alt="google" />
      </form>
      )}  
     </div>
    </section>
  )
}

export default SignIn
