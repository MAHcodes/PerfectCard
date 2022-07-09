import styled from "styled-components"

const CSSPropVal = ({prop, val}) => {
  return (
    <Div>
      <Prop>{prop}:</Prop> <Val>{val};</Val>
    </Div>
  )
}

const Div = styled.div`
  padding-inline-start: 1.5rem;
  padding-block: .125rem;
`

const Prop = styled.span`
  color: rgb(var(--accent));
`

const Val = styled.span`
color: #b9c150;
`

export default CSSPropVal
