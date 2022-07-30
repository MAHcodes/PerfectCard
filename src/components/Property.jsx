import styled from "styled-components";

const Property = ({ title, children }) => {
  return (
    <Div>
      <p>{title}:</p>
      {children}
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;

  @media (max-width: 600px) {
    flex-direction: column;
  }

  & > .hue-picker {
    flex: 1;
    cursor: pointer;
    width: auto !important;

    &
      div[style="width: 18px; height: 18px; border-radius: 50%; transform: translate(-9px, -1px); background-color: rgb(248, 248, 248); box-shadow: rgba(0, 0, 0, 0.37) 0px 1px 4px 0px;"] {
      transform: translate(-9px, -35%) !important;

      &:hover,
      &:focus,
      &:active {
        outline: 1px solid rgb(var(--fg-main));
        outline-offset: 0.125rem;
      }
    }
  }
`;

export default Property;
