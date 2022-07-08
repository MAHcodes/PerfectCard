import { useContext } from "react";
import styled from "styled-components"
import { CardCssContext } from "../hooks/CardCSS";

const BoxModel = ({active}) => {
  const {cardCss, setCardCss} = useContext(CardCssContext);

  return (
    <Div active={active}>
      width: 
      <input type="range" min="5" max="1000" value={cardCss.width} onChange={e => setCardCss( {...cardCss, width: e.target.value})} />
      {cardCss.width}px

      <br />

      height: 
      <input type="range" min="5" max="1000" value={cardCss.height} onChange={e => setCardCss( {...cardCss, height: e.target.value})} />
      {cardCss.height}px
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
