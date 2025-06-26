import { useState, useEffect } from 'react';
import Signup from './Signup';
import Home from './Home';
import './App.css';



function App() {
  const [view, setView] = useState("login"); // 'login' | 'signup' | 'home' 
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('https://back-0fft.onrender.com/', { credentials: 'include' })
      .then((res) => res.ok ? res.json() : null)
      .then((data) => {
        if (data) {
          console.log(data)
          setUser(data);
          setView('home');
        }
      });
  }, []);

  if (view === "login") {
    return <Login onSwitchToSignup={() => setView("signup")} onLoginSuccess={(u) => { setUser(u); setView("home"); }} />;
  }

  if (view === "signup") {
    return <Signup onSwitchToLogin={() => setView("login")} onLoginSuccess={(u) => { setUser(u); setView("home"); }}/>;
  }

  if (view === "home" && user) {
    return <Home user={user} onLogout={() => { setUser(null); setView("login"); }} />;
  }
  return null;
}


function Login({ onSwitchToSignup, onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState('');
  
  const handleGoogleAuth = () => {
    window.location.href = 'https://back-0fft.onrender.com/auth/google';
  };

  const handleFacebookAuth = () => {
    window.location.href = 'https://back-0fft.onrender.com/auth/facebook';
  };

  const handleLogin = async (e) =>{
    e.preventDefault();
    fetch('https://back-0fft.onrender.com/login', {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
    })
    .then(res => {
      if (!res.ok) throw new Error('Login failed');
      return res.json();
    })
    .then(user => {
      console.log(user)
      onLoginSuccess(user)
      setUser(user);  
    })
    .catch(err => {
      console.error(err);
    });

  }


  return (
    <div className="auth-container">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>

      <p>
        Don't have an account?{' '}
        <button type="button" onClick={onSwitchToSignup}>Sign Up</button>
      </p>

      <hr />

      <button type="button" onClick={handleGoogleAuth}>Login with Google</button>
      <button type="button" onClick={handleFacebookAuth}>Login with Facebook</button>
    </div>
  );
}

export default App;
