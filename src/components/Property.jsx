import styled from "styled-components";

const Property = ({ title, children}) => {
  return (
    <Div>
      <p>{title}:</p>
      {children}
    </Div>
  )
}

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
`;

export default Property
