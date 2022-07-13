import Draggable from "react-draggable";
import styled from "styled-components";

const BorderRadiusControls = ({ cardCss, setCardCss }) => {
  return (
    <>
      <Div
        cardCss={cardCss}
        setCardCss={setCardCss}
        bounds={{ left: 0, top: 0, right: 100, bottom: 100 }}
        className="topLeft"
      />
      <Div
        cardCss={cardCss}
        setCardCss={setCardCss}
        bounds={{ right: 0, top: 0, left: -100, bottom: 100 }}
        className="topRight"
      />
      <Div
        cardCss={cardCss}
        setCardCss={setCardCss}
        bounds={{ right: 0, top: -100, left: -100, bottom: 0 }}
        className="bottomRight"
      />
      <Div
        cardCss={cardCss}
        setCardCss={setCardCss}
        bounds={{ right: 100, top: -100, left: 0, bottom: 0 }}
        className="bottomLeft"
      />
    </>
  );
};

const Div = ({ bounds, className, cardCss, setCardCss }) => {
  const track = (data) => {
    setCardCss({
      ...cardCss,
      allBorderRadius: 0,
      borderRadius: {
        ...cardCss.borderRadius,
        [className]: { x: data.x, y: data.y },
      },
    });
  };

  return (
    <Draggable
      onDrag={(_, data) => track(data)}
      bounds={bounds}
      position={{
        x: cardCss.borderRadius[className].x,
        y: cardCss.borderRadius[className].y,
      }}
    >
      <BorderRadius className={className} />
    </Draggable>
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
