import { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import ArrowIcon from "./ArrowIcon";
import Options from "./Options";

const Aside = ({ open, setOpen }) => {
  const [asideHeight, setAsideHeight] = useState(window.innerHeight);

  const handleResize = () => {
    setAsideHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <StyledAside open={open}>
      <Button
        val={<ArrowIcon fill="rgba(var(--fg-main), 65%)" open={open} />}
        action={() => setOpen(!open)}
      />
      <Wrapper height={asideHeight}>
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
  flex: ${(props) => (props.open ? ".3" : "0")};
  width: ${(props) => (props.open ? "auto" : "0")};
  transform: translateX(${(props) => (props.open ? "0" : "-100%")});
  border-right: 1px solid rgb(var(--gray));
  transition: var(--transition-d) var(--transition-tf);

  & > button {
    position: absolute;
    inset: 2rem -1rem auto auto;
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
  height: ${(props) => props.height}px;
`;

export default Aside;
