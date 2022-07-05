import styled from "styled-components";
import Button from "./Button";

const Aside = ({ open, setOpen }) => {
  return (
    <StyledAside open={open}>
      <Button val={<Arrow open={open} />} action={() => setOpen(!open)} />
      <Wrapper>
        <H1>Perfect Card</H1>
        <P>Easiest way to create your Perfect Card.</P>
      </Wrapper>
    </StyledAside>
  );
};

const Arrow = ({open}) => (
  <svg
    width="20px"
    height="20px"
    fill="rgba(var(--fg-main), 65%)"
    viewBox="0 0 1024 1024"
    version="1.1"
    style={{transform: `rotate(${open ? "90deg" : "-90deg"})`, transition: "var(--transition-d) var(--transition-tf)"}}
  >
    <path d="M573.056 752l308.8-404.608A76.8 76.8 0 0 0 820.736 224H203.232a76.8 76.8 0 0 0-61.056 123.392l308.8 404.608a76.8 76.8 0 0 0 122.08 0z" />
  </svg>
);

const StyledAside = styled.aside`
  background-color: rgb(var(--bg-main));
  position: relative;
  flex: ${(props) => (props.open ? ".2" : "0")};
  transform: translateX(${(props) => (props.open ? "0" : "-100%")});
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
`;

const P = styled.p`
  text-align: center;
  border-bottom: 1px solid rgb(var(--gray));
  padding-block-end: 1.5rem;
`;

const Wrapper = styled.div`
  top: 0;
  position: sticky;
  height: 100vh;
  overflow-y: auto;
  background-color: ;
`;

export default Aside;
