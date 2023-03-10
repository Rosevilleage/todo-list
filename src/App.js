import './App.css';
import Main from './Main';
import Header from './Header';
import styled from 'styled-components';

const TopContainer = styled.div`
  width: 90%;
  height: 90%;
  border: 2px solid black;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
`

function App() {
  return (
    <div className="App">
      <TopContainer>
        <Header/>
        <Main/>
      </TopContainer>
    </div>
  );
}

export default App;
