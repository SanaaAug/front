// import { useState, useEffect } from 'react';
// import './App.css'


// function Remember({ user, onSwitchToLogin, onLoginSuccess }) {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
  
//   useEffect(() => {
//       setEmail(user.email)
//     }, []);


//   const handleLogin = async (e) =>{
//     e.preventDefault();
//     fetch('http://localhost:3000/login', {
//     method: 'POST',
//     credentials: 'include',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ email, password }),
//     })
//     .then(res => {
//       if (res.ok){
//         onLoginSuccess(user)
//       }; 
//     })
//     .catch(err => {
//       console.error(err);
//     });

//   }


//   return (
//     <div className="auth-container">
//       <h1>Login</h1>
//       <form onSubmit={handleLogin}>
//         <p>Hello {user.firstname} {user.lastname}</p>
//         <input
//           type="password"
//           placeholder="Password"
//           required
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="submit">Login</button>
//       </form>
//       <p>
//         Login different account?{' '}
//         <button onClick={onSwitchToLogin}>Login different</button>
//       </p>
//     </div>
//   );
// }

// export default Remember