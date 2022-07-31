import styled from "styled-components"

const Tooltip = ({text, error}) => {
  return (
    <Div error={error}>
      {text}
    </Div>
  )
}

const Div = styled.div`
  position: absolute;
  margin: auto;
  white-space: nowrap;
  top: -50%;
  right: 0;
  transform: translateY(-100%);
  background-color: rgba(var(--accent), 80%);
  padding: .75em;
  border-radius: .4em;
  font-weight: bold;
  box-shadow: .25rem .25rem 1rem -.75rem rgb(var(--black));
  color: ${props => props.error ? "rgb(var(--danger))" : "rgb(var(--success))"};

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    right: 6px;
    transform: translateY(100%);
    width: 0;
    height: 0;
    border-width: 10px;
    border-style: solid;
    border-color: rgba(var(--accent), 80%) transparent transparent transparent;
  }
`

export default Tooltip
