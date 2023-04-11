import './App.css';
import Main from './Page/Main';
import Header from './Page/Header';
import styled from 'styled-components';
import { dumyData } from './dumydata';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Calendar from './Page/Calendar';

const TopContainer = styled.div`
  width: 90%;
  height: 90%;
  border: 2px solid #7c8087;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
`

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <TopContainer>
          <Header/>
          <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='/daily' element={<Main/>}/>
            <Route path='/done' element={<Main/>}/>
            <Route path='/calendar' element={<Calendar />}/>
          </Routes>
          {/* <Main todos={todos} setTodos={setTodos}/> */}
        </TopContainer>
      </div>
    </BrowserRouter>
  );
}

export default App;
