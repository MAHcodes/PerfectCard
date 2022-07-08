import styled from "styled-components";
import ArrowIcon from "./ArrowIcon";

const Select = ({ title, open, children, setOpen }) => {
  const active = open === title;
  return (
    <Div>
      <Title active={active} onClick={() => {active ? setOpen("") : setOpen(title)} }>
        <Icon active={active}>
          <ArrowIcon fill={active ? "rgba(var(--accent), 80%)" : "rgb(var(--fg-main))"} />
        </Icon>
        <Text active={active}>{title}</Text>
      </Title>
      <div>{children}</div>
    </Div>
  );
};

const Div = styled.div`
  padding: 2rem 1rem;
  color: rgba(var(--fg-main), 85%);
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  transition: color var(--transition-d) var(--transition-tf);
  cursor: pointer;

  &:hover p {
    color: ${props => !props.active &&  "rgba(var(--accent), 85%)"};
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
  color: ${props => props.active ? "rgb(var(--accent))" : "rgb(var(--fg-main), 85%)"};
`;

export default Select;
