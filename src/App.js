import React from "react";
import Counter from './Counter';
import Hello from './Hello';
import Wrapper from './Wrapper';

import './App.css';
import InputSample from "./InputSample";
import UserList from "./UserList";

function App() {
  return (
    <Wrapper>
    <Hello name="react" color="red" isSpecial={true} />
    <Hello color ="pink"/>
    <Counter/>
    <br></br> <br></br> <br></br>
    <InputSample/>
    <UserList/>
    </Wrapper>
  );
}

export default App;
