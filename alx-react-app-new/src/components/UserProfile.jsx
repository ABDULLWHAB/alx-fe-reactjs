import { useContext } from 'react';
import UserContext from '../UserContext';

function UserProfile() {
  const users = useContext(UserContext);

  return (
    <div>
      {users.map((user, index) => (
        <div key={index} style={{ border: '1px solid gray', margin: '10px', padding: '10px' }}>
          <h2 style={{ color: 'blue' }}>{user.name}</h2>
          <p>Age: <span style={{ fontWeight: 'bold' }}>{user.age}</span></p>
          <p>Bio: {user.bio}</p>
        </div>
      ))}
    </div>
  );
}

export default UserProfile;

