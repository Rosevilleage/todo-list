import './App.css';
import Main from './Page/Main';
import Header from './Page/Header';
import styled from 'styled-components';
import { dumyData } from './dumydata';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const TopContainer = styled.div`
  width: 90%;
  height: 90%;
  border: 2px solid #7c8087;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
`

function App() {
  // const [todos, setTodos] = useState(dumyData);
  // const handleList = (str) => {
  //   let filtered;
  //   if(str==='all') filtered = todos.slice()
  //   if(str==='daily') filtered = todos.filter(e=> e.daily===true)
  //   if(str==='done') filtered = todos.filter(e=>e.done===true)
  //   setTodos(filtered);
  // }
  // console.log(typeof todos)
  // console.log(todos.filter(x=>x.id===0)[0])

  return (
    <BrowserRouter>
      <div className="App">
        <TopContainer>
          <Header/>
          <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='/daily' element={<Main/>}/>
            <Route path='/done' element={<Main/>}/>
          </Routes>
          {/* <Main todos={todos} setTodos={setTodos}/> */}
        </TopContainer>
      </div>
    </BrowserRouter>
  );
}

export default App;
