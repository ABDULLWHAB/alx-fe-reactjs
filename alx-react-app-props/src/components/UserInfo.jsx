// src/components/UserInfo.jsx
import UserDetails from './UserDetails';
import { useContext } from 'react';
import UserContext from './UserContext';

function UserInfo() {
  const userData = useContext(UserContext); // Consume context

  return <UserDetails userData={userData} />;
}

export default UserInfo;
