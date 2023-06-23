import React from 'react';
import "./UserList.css"

function UserList({ users }) {
  return (
    <div className="user-list">
      {users.map((user) => (
        <div className="user-item" key={user.id}>
            <p className='user-id'>{user.id}</p>
          <img className='user-avatar' src={user.avatar} alt={user.first_name} />
          <p className='userName'>{user.first_name}</p>
        </div>
      ))}
    </div>
  );
}

export default UserList;
