import React from 'react';

function UserCard({ user }) {
  return (
    <div className="border p-4 rounded shadow">
      <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
      <h3>{user.name || user.login}</h3>
      <p>{user.bio}</p>
      <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
        View Profile
      </a>
    </div>
  );
}

export default UserCard;
