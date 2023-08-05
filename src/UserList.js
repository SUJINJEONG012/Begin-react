import React from "react";

function User({user}){
  return(
    <div>
        <b>{user.username}</b><span>{user.email}</span>
    </div>
  )
}


function UserList(){
    const users = [
        {
            id:1,
            username:'angela',
            email:'peekaboo32@naver.com'
        },
        {
            id:2,
            username:'test',
            email:'peekaboo32@nate.com'
        },
        {
            id:3,
            username:'liz',
            email:'test@naver.com'
        }
    ];

    return (
        <div>
           {users.map((user, index) => (
            <User user={user} key={index}/>
           ))}
        </div>
    );
}

export default UserList;