import React from 'react';
import MyFirstComponent from './components/myfirstcomponent/MyFirstComponent';
import Store from "./pages/store";
import Header from "./components/common/header";
import styled from 'styled-components';

const Wrapper = styled.div`
display: flex; 
flex-flow: row;
`;
const AppBody = styled.div`
width: 100%;
display: flex; 
flex-flow: row; 
flex: 1 auto;
background-color: #EEEEEE;
position: absolute;
top: 8vh;
min-height: 92vh;
overflow-x: hidden;
`;

/*
function App() {
  return (
    
    <div className="App">
      <Store/>
    </div>
  );
}
*/
function App() {
  debugger
  return (
    <Wrapper >
      <Header/>
      <AppBody>
        <Store/>
      </AppBody>
    </Wrapper>
  );
}


export default App;
