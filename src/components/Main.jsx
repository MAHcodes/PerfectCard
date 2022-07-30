import Header from "./Header";
import Code from "./Code";
import Preview from "./Preview";
import styled from "styled-components";
import { CardCssContext } from "../hooks/CardCSS";
import { useContext } from "react";

const Main = () => {
  const { asideOpen } = useContext(CardCssContext);

  return (
    <StyledMain asideOpen={asideOpen}>
      <Header />
      <Preview />
      <Code />
    </StyledMain>
  )
}

const StyledMain = styled.main`
  flex: ${props => props.asideOpen ? ".65" : "1"};
  padding: 1rem 5rem;
  overflow: auto;
  @media (max-width: 650px) {
    padding-inline: 2rem;
  }
  @media (max-width: 350px) {
    padding-inline: 1rem;
  }

`

export default Main
