import styled from 'styled-components';
import Aside from "./components/Aside";
import Main from "./components/Main";

function App() {
  return (
    <StyledApp>
      <Aside />
      <Main />
    </StyledApp>
  );
}

const StyledApp = styled.div`
  display: flex;
  align-items: stretch;
`

export default App;
