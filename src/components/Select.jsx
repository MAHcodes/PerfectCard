import styled from "styled-components";
import ArrowIcon from "./ArrowIcon";
import Button from "./Button";

const Select = ({ title, open, setOpen, children, onClick, pad, close }) => {
  const active = open === title;
  return (
    <Div pad={pad}>
      <Title
        active={active}
        onClick={(e) => {
          active ? setOpen("") : setOpen(title);
          onClick && onClick(e);
        }}
      >
        <Icon active={active}>
          <ArrowIcon
            fill={active ? "rgba(var(--accent), 80%)" : "rgb(var(--fg-main))"}
          />
        </Icon>
        <Text active={active}>
          <p>{title}</p>
          { close && <Button val={close.val} action={close.action} pad={close.pad} />}
        </Text>
      </Title>
      <Options active={active}>{children}</Options>
    </Div>
  );
};

const Div = styled.div`
  padding: ${(props) => props.pad || "2rem 1rem 0"};
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
  transform: ${(props) => props.active && "rotate(90deg)"};
`;

const Text = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
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
