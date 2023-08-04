import React from "react";
import Counter from './Counter';
import Hello from './Hello';
import Wrapper from './Wrapper';
import './App.css';

function App() {
  return (
   

    <Wrapper>
    <Hello name="react" color="red" isSpecial={true} />
    <Hello color ="pink"/>
    <Counter/>
    </Wrapper>
  );
}

export default App;
