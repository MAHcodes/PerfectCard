import styled from "styled-components";

const Button = ({ val, action, pad }) => {
  return (
    <Btn pad={pad} type="button" onClick={action}>
      {val}
    </Btn>
  );
};

const Btn = styled.button`
  cursor: pointer;
  padding: ${props => props.pad || "0.25rem" };
  display: flex;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  transition: border var(--transition-d) var(--transition-tf),
    box-shadow var(--transition-d) var(--transition-tf),
    background-color var(--transition-d) var(--transition-tf);
  border: 2px solid transparent;

  &:focus,
  &:hover {
    border: 2px solid rgba(var(--fg-main), 50%);
  }
  &:active {
    box-shadow: 0 0 0.5rem -0.25rem rgb(var(--fg-main));
    background-color: rgba(var(--fg-main), 10%);
  }
`;

export default Button;
