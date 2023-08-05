import React, { useRef } from "react";

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
    
    const nextId = useRef(4);
    const onCreate = ()=>{
        //나중에 구현 할 배열에 항목추가하는 로직
        nextId.current +=1;
    };

    return (
        <div>
           {users.map((user, index) => (
            <User user={user} key={index}/>
           ))}
        </div>
    );
}

export default UserList;