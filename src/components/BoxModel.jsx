import styled from "styled-components"

const BoxModel = ({active}) => {
  return (
    <Div active={active} >
      BoxModel
    </Div>
  )
}

const Div = styled.div`
  padding: ${props => props.active ? "1rem" : "0"} 1rem;
  margin-inline-start: .65rem;
  margin-block-start: .65rem;
  border-inline-start: 1px solid ${props => props.active ? "rgba(var(--accent), 50%)" : "rgb(var(--fg-main))"};
  transition: padding var(--transition-d) var(--transition-tf);
  overflow: hidden;
  height: ${props => props.active ? "auto" : "0"};
` 

export default BoxModel
