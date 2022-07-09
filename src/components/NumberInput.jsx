import styled from "styled-components";

const NumberInput = (props) => {
  return <Number min={props.min} type="number" value={props.value} onChange={props.onChange} />;
};

const Number = styled.input`
  width: 7ch;
  background-color: rgba(var(--accent), 50%);
  border-radius: 0.25rem;
  padding: 0.25rem .5rem;
  color: rgb(var(--fg-main));

  &:hover,
  &:active {
    background-color: rgba(var(--accent), 75%);
  }

  &:focus {
    outline: 1px solid rgb(var(--fg-main));
    outline-offset: 0.125rem;
  }
`;

export default NumberInput;
