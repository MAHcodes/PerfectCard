import styled from "styled-components";

const Switch = ({ title, onClick, on }) => {
  return (
    <Div>
      <span>{title}:</span>
      <SwitchInput on={on} onClick={onClick}>
        <Toggle />
      </SwitchInput>
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

const SwitchInput = styled.div`
  display: inline-flex;
  width: 3.5rem;
  height: 1.5rem;
  border-radius: 100vmax;
  padding: 0.25rem;
  background-color: rgba(var(--accent), 50%);
  cursor: pointer;
  justify-content: ${(props) => (props.on ? "flex-end" : "flex-start")};
  overflow: hidden;

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

const Toggle = styled.div`
  aspect-ratio: 1;
  background-color: rgb(var(--fg-main));
  border-radius: 50%;
  position: relative;

  &::before,
  &::after {
    font-weight: bold;
    position: absolute;
  }

  &::before {
    content: "on";
    inset: 50% auto auto -100%;
    transform: translate(-50%, -55%);
    color: rgb(var(--success));
  }
  &::after {
    content: "off";
    inset: 50% -100% auto auto;
    transform: translate(50%, -55%);
    color: rgb(var(--danger));
  }
`;

export default Switch;
