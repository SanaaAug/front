import { useState } from 'react';
import './App.css'

function Signup({ onSwitchToLogin }) {
  const [form, setForm] = useState({ email: '', password: '', name: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3000/signup', {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id: user.id}),
    })
    .then(res => {
      if (!res.ok) throw new Error('Logout failed');
      onLogout()
      return res.json();
    })
    .catch(err => {
      console.error(err);
    });
  };


  return (
    <div className="auth-container">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <input name="name" type="text" placeholder="Full Name" required onChange={handleChange} />
        <input name="email" type="email" placeholder="Email" required onChange={handleChange} />
        <input name="password" type="password" placeholder="Password" required onChange={handleChange} />
        <button type="submit">Sign Up</button>
      </form>

      <p>
        Already have an account?{' '}
        <button onClick={onSwitchToLogin}>Login</button>
      </p>
    </div>
  );
}

export default Signup;
