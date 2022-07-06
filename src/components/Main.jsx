import Header from "./Header";
import Code from "./Code";
import styled from "styled-components";

const Main = ({ asideOpen }) => {
  return (
    <StyledMain asideOpen={asideOpen}>
      <Header />
      <Code />
    </StyledMain>
  )
}

const StyledMain = styled.main`
  flex: ${props => props.asideOpen ? ".8" : "1"};
  padding-inline: 2rem;
`

export default Main
