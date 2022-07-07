import styled from "styled-components";
import ArrowIcon from "./ArrowIcon";

const Select = ({ title, children }) => {
  return (
    <Div>
      <Title>
        <Icon>
          <ArrowIcon fill="rgb(var(--fg-main))" />
        </Icon>
        <Text>{title}</Text>
      </Title>
      <div>{children}</div>
    </Div>
  );
};

const Div = styled.div`
  padding: 2rem 1rem;
  color: rgba(var(--fg-main), 85%);
  cursor: pointer;

  &:hover p {
    color: rgb(var(--fg-main));
  }
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  transition: color var(--transition-d) var(--transition-tf);
`;

const Icon = styled.span`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Text = styled.p`
  display: inline;
  font-size: var(--fz-base);
`;

export default Select;
