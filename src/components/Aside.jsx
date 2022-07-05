import styled from "styled-components";

const Aside = () => {
  return (
    <StyledAside>
      <Wrapper>Aside</Wrapper>
    </StyledAside>
  );
};

const StyledAside = styled.aside`
  position: relative;
  flex: 0.2;
`;

const Wrapper = styled.div`
  top: 0;
  position: sticky;
  height: 100vh;
  overflow-y: auto;
  background-color: 
`;

export default Aside;
