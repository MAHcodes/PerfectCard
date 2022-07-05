import Preview from "./Preview";
import Code from "./Code";
import styled from "styled-components";

const Main = ({ asideOpen }) => {
  return (
    <StyledMain asideOpen={asideOpen}>
      <Preview />
      <Code />
    </StyledMain>
  )
}

const StyledMain = styled.main`
  flex: ${props => props.asideOpen ? ".8" : "1"};
  padding: 4rem;
`

export default Main
