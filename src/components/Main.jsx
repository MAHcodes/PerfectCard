import Preview from "./Preview";
import Code from "./Code";
import styled from "styled-components";

const Main = () => {
  return (
    <StyledMain>
      <Preview />
      <Code />
    </StyledMain>
  )
}

const StyledMain = styled.main`
  flex: .8;
`

export default Main
