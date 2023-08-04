import React from "react";

function User({user}){

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
            <div>
                <b>{users[0].username}</b><span>({users[0].email})</span>
            </div>
            <div>
                <b>{users[1].username}</b><span>{users[1].email}</span>
            </div>
            <div>
                <b>{users[2].username}</b><span>{users[2].email}</span>
            </div>
        </div>
    )
}

export default UserList;