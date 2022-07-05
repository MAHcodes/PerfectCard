import styled from "styled-components"

const Button = ({val, action}) => {
  return (
    <Btn type="button" onClick={action}>
      {val}
    </Btn>
  )
}


const Btn = styled.button`
  cursor: pointer;
  padding: .25rem;
  display: grid;
  place-items: center;
`


export default Button
