import { useEffect, useRef } from "react";
import styled from "styled-components";
import Button from "./Button";

const Aside = ({ open, setOpen }) => {
  const wrapperRef = useRef(undefined);
  useEffect(() => {
    wrapperRef.current.style.height = `${window.innerHeight}px`;
    // eslint-disable-next-line
  }, [window.innerHeight]);

  return (
    <StyledAside open={open}>
      <Button val={<Arrow open={open} />} action={() => setOpen(!open)} />
      <Wrapper ref={wrapperRef} >
        <H1>Perfect Card</H1>
        <P>Easiest way to create your Perfect Card.</P>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis reprehenderit totam debitis sit pariatur est adipisci labore veritatis laboriosam voluptatibus molestias quo inventore, voluptates corrupti quod ea quidem animi sunt veniam dolor ratione nisi at magnam? Maiores doloribus, ad obcaecati totam inventore rerum hic itaque praesentium tenetur labore, in libero nihil sunt quidem ex iusto quos laboriosam? Ipsum nobis error officia? Dolorum tempora repudiandae, officia illum rem excepturi delectus sapiente voluptatem earum repellendus ullam. Ullam blanditiis voluptates et, ipsa quisquam suscipit officiis quia necessitatibus velit sit aliquid ab amet aliquam nisi temporibus in facilis natus totam dolores! Officia, eos voluptatum!
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
  flex: ${(props) => (props.open ? ".25" : "0")};
  transform: translateX(${(props) => (props.open ? "0" : "-100%")});
  border-right: 1px solid rgb(var(--gray));
  transition: var(--transition-d) var(--transition-tf);

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
  background-color: ;
`;

export default Aside;
