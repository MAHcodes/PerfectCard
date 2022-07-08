import { useEffect, useRef } from "react";
import styled from "styled-components";
import Button from "./Button";
import ArrowIcon from "./ArrowIcon";
import Options from "./Options";

const Aside = ({ open, setOpen }) => {
  const wrapperRef = useRef(undefined);
  useEffect(() => {
    wrapperRef.current.style.height = `${window.innerHeight}px`;
    // eslint-disable-next-line
  }, [window.innerHeight]);

  return (
    <StyledAside open={open}>
      <Button val={<ArrowIcon fill="rgba(var(--fg-main), 65%)" open={open} />} action={() => setOpen(!open)} />
      <Wrapper ref={wrapperRef} >
        <H1>PerfectCard</H1>
        <P>Easiest way to create your Perfect Card.</P>
        <Options />
      </Wrapper>
    </StyledAside>
  );
};

const StyledAside = styled.aside`
  background-color: rgb(var(--bg-main));
  position: relative;
  flex: ${(props) => (props.open ? ".25" : "0")};
  transform: translateX(${(props) => (props.open ? "0" : "-100%")});
  border-right: 1px solid rgb(var(--gray));
  transition: var(--transition-d) var(--transition-tf);
  margin-left: ${props => props.open ? "0" : "-10rem"};

  & > button {
    position: absolute;
    inset: 2rem ${props => props.open ? "-1rem" : "-11rem"} auto auto;
    transform: translateX(100%);
  }
`;

const H1 = styled.h1`
  font-size: var(--fz-lg);
  text-align: center;
  margin-block-end: 1rem;
  font-weight: bold;
  padding-inline: 1rem;
`;

const P = styled.p`
  text-align: center;
  border-bottom: 1px solid rgb(var(--gray));
  padding-block-end: 2rem;
  padding-inline: 1rem;
`;

const Wrapper = styled.div`
  padding-block: 2rem;
  top: 0;
  position: sticky;
  max-height: 100vh;
  overflow-y: auto;
`;

export default Aside;
