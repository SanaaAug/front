

function Home({ user, onLogout }) {
  const handleChangePassword = () => {
    e.preventDefault()
    fetch('https://back-0fft.onrender.com/changepass', {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id: user.id}),
    })
    .then(res => {
      if (!res.ok) throw new Error('Change pass failed');
      onLogout()
      return res.json();
    })
    .catch(err => {
      console.error(err);
    });
  };

  const handleDeleteAccount = async (e)=>{
    e.preventDefault()
    fetch('https://back-0fft.onrender.com/delete', {
    method: 'DELETE',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id: user.id}),
    })
    .then(res => {
      if (!res.ok) throw new Error('delete failed');
      onLogout()
      return res.json();
    })
    .catch(err => {
      console.error(err);
    });
  }

  const handleLogout = async (e) =>{
    e.preventDefault();
    fetch('https://back-0fft.onrender.com/logout', {
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

  }

  return (
    <div className="home-container">
      <img src={user.profilePic} alt="Profile" className="profile-pic" />
      <h2>Welcome, {user.username}</h2>
      <p>
        Name: {user.firstname} {user.lastname}
      </p>
      <p>
        Email: {user.email}
      </p>
      <button onClick={handleDeleteAccount}>Delete</button>
      <button onClick={handleChangePassword}>Change Password</button>
      <button onClick={handleLogout} className="logout-btn">Logout</button>
    </div>
  );
}

export default Home;
