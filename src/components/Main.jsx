import Header from "./Header";
import Code from "./Code";
import Preview from "./Preview";
import styled from "styled-components";

const Main = ({ asideOpen }) => {
  return (
    <StyledMain asideOpen={asideOpen}>
      <Header />
      <Preview />
      <Code />
    </StyledMain>
  )
}

const StyledMain = styled.main`
  flex: ${props => props.asideOpen ? ".75" : "1"};
  padding: 1rem 5rem;
`

export default Main
