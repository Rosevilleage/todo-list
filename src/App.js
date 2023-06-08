import "./App.css";
import Main from "./Page/Main";
import Header from "./Page/Header";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Calendar from "./Page/Calendar";
import { useSelector } from "react-redux";

const TopContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
`;

function App() {
  const isModlaOpen = useSelector((state) => state.modal.value);
  return (
    <BrowserRouter>
      <div className="App">
        <TopContainer>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/daily" element={<Main />} />
            <Route path="/done" element={<Main />} />
            <Route path="/calendar" element={<Calendar />} />
          </Routes>
        </TopContainer>
      </div>
    </BrowserRouter>
  );
}

export default App;
