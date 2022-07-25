import styled from "styled-components";
import ArrowIcon from "./ArrowIcon";

const Select = ({ title, open, children, setOpen, onClick  }) => {
  const active = open === title;
  return (
    <Div>
      <Title active={active} onClick={() => {active ? setOpen("") : setOpen(title); onClick && onClick()} }>
        <Icon active={active}>
          <ArrowIcon fill={active ? "rgba(var(--accent), 80%)" : "rgb(var(--fg-main))"} />
        </Icon>
        <Text active={active}>{title}</Text>
      </Title>
      <Options active={active}>{children}</Options>
    </Div>
  );
};

const Div = styled.div`
  padding: 2rem 1rem 0;
  color: rgb(var(--fg-main));
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  transition: color var(--transition-d) var(--transition-tf);
  cursor: pointer;

  &:hover p {
    color: rgba(var(--accent), 85%);
  }
`;

const Icon = styled.span`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  transition: transform var(--transition-d) var(--transition-tf);
  transform: ${props => props.active && "rotate(90deg)"};
`;

const Text = styled.p`
  display: inline;
  font-size: var(--fz-base);
  transition: color var(--transition-d) var(--transition-tf);
`;

const Options = styled.div`
  padding: ${(props) => (props.active ? "1rem" : "0")} 1rem;
  margin-inline-start: 0.65rem;
  margin-block-start: 0.65rem;
  border-inline-start: 1px solid
    ${(props) =>
      props.active ? "rgba(var(--accent), 50%)" : "rgb(var(--fg-main))"};
  transition: transform var(--transition-d) var(--transition-tf),
    padding var(--transition-d) var(--transition-tf);
  transform-origin: center top;
  overflow: hidden;
  height: ${(props) => (props.active ? "auto" : "0")};
  transform: ${(props) => (props.active ? "0" : "rotateX(90deg)")};
`;

export default Select;
