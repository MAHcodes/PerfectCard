import styled from "styled-components";
import Button from "./Button";

const Aside = ({ open, setOpen }) => {
  return (
    <StyledAside open={open}>
      <Button val={"test"} action={() => setOpen(!open)} />
      <Wrapper>
        <H1>Perfect Card</H1>
        <P>Easiest way to create your Perfect Card.</P>
      </Wrapper>
    </StyledAside>
  );
};

const StyledAside = styled.aside`
  background-color: rgb(var(--bg-main));
  position: relative;
  flex: ${props => props.open ? ".2" : "0"};
  transform: translateX(${props => props.open ? "0" : "-100%"});
  box-shadow: 0 0 1rem -.75rem #000;
  border-right: 1px solid rgb(var(--gray));
  transition: var(--transition-d) var(--transition-tf);
  padding: 2rem 1rem;

  & > button {
    position: absolute;
    inset: 1rem -1rem auto auto;
    transform: translateX(100%);
  }
`;

const H1 = styled.h1`
  font-size: var(--fz-lg);
  text-align: center;
  margin-block-end: 1rem;
`

const P = styled.p`
  text-align: center;
  border-bottom: 1px solid rgb(var(--gray));
  padding-block-end: 1.5rem;
`

const Wrapper = styled.div`
  top: 0;
  position: sticky;
  height: 100vh;
  overflow-y: auto;
  background-color: 
`;

export default Aside;
