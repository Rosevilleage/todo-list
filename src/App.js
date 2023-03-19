import './App.css';
import Main from './Main';
import Header from './Header';
import styled from 'styled-components';
import { dumyData } from './dumydata';
import { useState } from 'react';

const TopContainer = styled.div`
  width: 90%;
  height: 90%;
  border: 2px solid #7c8087;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
`

function App() {
  const [todos, setTodos] = useState(dumyData);
  // console.log(typeof todos)
  // console.log(todos.filter(x=>x.id===0)[0])

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
