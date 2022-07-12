import styled from "styled-components";
import { useContext, useEffect, useRef } from "react";
import { CardCssContext } from "../hooks/CardCSS";
import useResizeAware from "react-resize-aware";
import { useState } from "react";
import Draggable from "react-draggable";

const Preview = () => {
  const { cardCss, setCardCss } = useContext(CardCssContext);
  const [resizeListener, sizes] = useResizeAware();
  const parentRef = useRef(null);
  const [position, setPosition] = useState({
    topLeft: { x: 0, y: 0 },
    topRight: { x: 0, y: 0 },
    bottomRight: { x: 0, y: 0 },
    bottomLeft: { x: 0, y: 0 },
  });

  const trackTopLeft = (data) => {
    setPosition({ ...position, topLeft: { x: data.x, y: data.y } });
  };

  const trackTopRight = (data) => {
    setPosition({ ...position, topRight: { x: data.x, y: data.y } });
  };

  const trackBottomRight = (data) => {
    setPosition({ ...position, bottomRight: { x: data.x, y: data.y } });
  };

  const trackBottomLeft = (data) => {
    setPosition({ ...position, bottomLeft: { x: data.x, y: data.y } });
  };

  useEffect(() => {
    if (sizes.width && sizes.height) {
      const rem = parseFloat(
        getComputedStyle(document.documentElement).fontSize
      );
      const computedWidth =
        cardCss.widthUnit === "px"
          ? sizes.width
          : cardCss.widthUnit === "rem"
          ? sizes.width / rem
          : (sizes.width / parentRef.current.clientWidth) * 100;
      const computedHeight =
        cardCss.heightUnit === "px"
          ? sizes.height
          : cardCss.heightUnit === "rem"
          ? sizes.height / rem
          : (sizes.height / parentRef.current.clientHeight) * 100;

      setCardCss({ ...cardCss, width: computedWidth, height: computedHeight });
    }

    // eslint-disable-next-line
  }, [sizes]);

  return (
    <Box ref={parentRef}>
      <Card
        style={{
          width: `${cardCss.width}${cardCss.widthUnit}`,
          height: `${cardCss.height}${cardCss.heightUnit}`,
        }}
        css={cardCss}
        br={position}
      >
        <h2>Preview</h2>
        {resizeListener}

        <Draggable
          onDrag={(_, data) => trackTopLeft(data)}
          bounds={{ left: 0, top: 0, right: 100, bottom: 100 }}
        >
          <BorderRadius className="topLeft" />
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
      </Card>
    </Box>
  );
};

const Box = styled.div`
  min-height: 20rem;
  height: 65vh;
  border-radius: 0.4rem;
  margin-bottom: 2rem;
  display: flex;
  overflow: auto;
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  resize: both;
  overflow: auto;
  margin: auto;
  position: relative;
  border-radius: ${props => `${props.br.topLeft.y}% ${props.br.topRight.y}% ${-props.br.bottomRight.y}% ${-props.br.bottomLeft.y}% / ${props.br.topLeft.x}% ${-props.br.topRight.x}% ${-props.br.bottomRight.x}% ${props.br.bottomLeft.x}%`};

  background-color: ${(props) => props.css.bgColor || "rgb(var(--white))"};
  color: rgb(var(--white));
  & > h2 {
    mix-blend-mode: difference;
  }
`;

const BorderRadius = styled.div`
  position: absolute;
  width: 1.25rem;
  height: 1.25rem;
  background-color: rgb(var(--white));
  border: 1px solid rgb(var(--black));
  cursor: grab;
  outline-offset: 0.125rem;

  &:active {
    cursor: grabbing;
  }
  &:hover,
  &:active {
    outline: 1px solid rgb(var(--bg-main));
  }

  &.topLeft {
    inset: .5rem auto auto .5rem;
    border-radius: 0 0 50% 0;
  }
  &.topRight {
    inset: .5rem .5rem auto auto;
    border-radius: 0 0 0 50%;
  }
  &.bottomLeft {
    inset: auto auto .5rem .5rem;
    border-radius: 0 50% 0 0;
  }
  &.bottomRight {
    inset: auto .5rem .5rem auto;
    border-radius: 50% 0 0 0;
  }
`;

export default Preview;
