import styled from "styled-components";
import Aside from "./components/Aside";
import Main from "./components/Main";
import Github from "./components/Github";

function App() {
  return (
    <>
      <StyledApp>
        <Aside />
        <Main />
      </StyledApp>

      <a
        href="https://github.com/mhmdali102/PerfectCard"
        target="_blank"
        rel="noreferrer noopener"
      >
        <Github />
      </a>
    </>
  );
}

const StyledApp = styled.div`
  display: flex;
  align-items: stretch;

  @media (max-width: 1000px) {
    & {
      flex-direction: column;
    }
  }
`;

export default App;
