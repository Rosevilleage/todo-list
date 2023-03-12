import './App.css';
import Main from './Main';
import Header from './Header';
import styled from 'styled-components';
import { dumyData } from './dumydata';
import { useState } from 'react';

const TopContainer = styled.div`
  width: 90%;
  height: 90%;
  border: 2px solid black;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
`

function App() {
  const [todos, setTodos] = useState(dumyData);

  return (
    <div className="App">
      <TopContainer>
        <Header/>
        <Main todos={todos} setTodos={setTodos}/>
      </TopContainer>
    </div>
  );
}

export default App;
