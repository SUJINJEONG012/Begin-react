import React, {useRef} from "react";
import Counter from './Counter';
import Hello from './Hello';
import Wrapper from './Wrapper';

import './App.css';
import InputSample from "./InputSample";
import UserList from "./UserList";
import CreateUser from "./CreateUser";

function App() {
  const users = [
    {
      id:1,
      username:'angela',
      email: 'peekaboo32@naver.com'
    },
    {
      id:2,
      username:'test',
      email:'test@naver.com'
    },
    {
      id:3,
      username:'liz',
      email:'liz@naver.com'
    }
  ];

  const nextId = useRef(4);
    const onCreate = () => {
        //나중에 구현 할 배열에 항목추가하는 로직
        nextId.current +=1;
    };


  return (
    // <Wrapper>
    // <Hello name="react" color="red" isSpecial={true} />
    // <Hello color ="pink"/>
    // <Counter/>
    // <br></br> <br></br> <br></br>
    // <InputSample/>
    // <UserList/>
    // </Wrapper>
    <>
    <CreateUser />
    <UserList users={users}/>
    </>
  );
}

export default App;
