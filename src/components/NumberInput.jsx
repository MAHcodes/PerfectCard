import styled from "styled-components";

const NumberInput = (props) => {
  return (
    <Number
      min={props.min}
      max={props.max}
      type="number"
      value={Math.round(props.value)}
      onChange={props.onChange}
    />
  );
};

const Number = styled.input`
  width: 8ch;
  background-color: rgba(var(--accent), 50%);
  border-radius: 0.25rem;
  padding: 0.25rem 0.5rem;
  color: rgb(var(--fg-main));

  &:focus {
    background-color: rgba(var(--accent), 75%);
  }

  &:focus,
  &:hover,
  &:active {
    outline: 1px solid rgb(var(--fg-main));
    outline-offset: 0.125rem;
  }
`;

export default NumberInput;
