import Draggable from "react-draggable";
import styled from "styled-components";

const BorderRadiusControls = ({ cardCss, setCardCss}) => {

  const trackTopLeft = (data) => {
    setCardCss({ ...cardCss, borderRadius: { ...cardCss.borderRadius, topLeft: { x: data.x, y: data.y } } } );
  };

  const trackTopRight = (data) => {
    setCardCss({ ...cardCss, borderRadius: { ...cardCss.borderRadius, topRight: { x: data.x, y: data.y } } });
  };

  const trackBottomRight = (data) => {
    setCardCss({ ...cardCss, borderRadius: { ...cardCss.borderRadius, bottomRight: { x: data.x, y: data.y } } });
  };

  const trackBottomLeft = (data) => {
    setCardCss({ ...cardCss, borderRadius: { ...cardCss.borderRadius, bottomLeft: { x: data.x, y: data.y } } });
  };

  return (
    <>
      <Draggable
        onDrag={(_, data) => trackTopLeft(data)}
        bounds={{ left: 0, top: 0, right: 100, bottom: 100 }}
      >
        <BorderRadius className="topLeft" positionx={cardCss.borderRadius.topLeft.x || 0} />
      </Draggable>

      <Draggable
        onDrag={(_, data) => trackTopRight(data)}
        bounds={{ right: 0, top: 0, left: -100, bottom: 100 }}
      >
        <BorderRadius className="topRight" />
      </Draggable>

      <Draggable
        onDrag={(_, data) => trackBottomRight(data)}
        bounds={{ right: 0, top: -100, left: -100, bottom: 0 }}
      >
        <BorderRadius className="bottomRight" />
      </Draggable>

      <Draggable
        onDrag={(_, data) => trackBottomLeft(data)}
        bounds={{ right: 100, top: -100, left: 0, bottom: 0 }}
      >
        <BorderRadius className="bottomLeft" />
      </Draggable>
    </>
  );
};

const BorderRadius = styled.div`
  position: absolute;
  width: 1.25rem;
  height: 1.25rem;
  background-color: rgb(var(--white));
  border: 1px solid rgb(var(--black));
  cursor: grab;
  outline-offset: 0.125rem;
  z-index: 4;

  &:active {
    cursor: grabbing;
  }
  &:hover,
  &:active {
    outline: 1px solid rgb(var(--black));
  }

  &.topLeft {
    inset: 0.5rem auto auto 0.5rem;
    border-radius: 0 0 50% 0;
  }
  &.topRight {
    inset: 0.5rem 0.5rem auto auto;
    border-radius: 0 0 0 50%;
  }
  &.bottomLeft {
    inset: auto auto 0.5rem 0.5rem;
    border-radius: 0 50% 0 0;
  }
  &.bottomRight {
    inset: auto 0.5rem 0.5rem auto;
    border-radius: 50% 0 0 0;
  }
`;

export default BorderRadiusControls;
