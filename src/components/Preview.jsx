import styled from "styled-components";
import { useContext, useEffect, useRef } from "react";
import { CardCssContext } from "../hooks/CardCSS";
import useResizeAware from "react-resize-aware";
import BorderRadiusControls from "./BorderRadiusControls";

const Preview = () => {
  const { cardCss, setCardCss, optionOpen } = useContext(CardCssContext);
  const [resizeListener, sizes] = useResizeAware();
  const parentRef = useRef(null);

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
          borderRadius: cardCss.allBorderRadius
            ? `${cardCss.allBorderRadius}${cardCss.allBorderRadiusUnit}`
            : `${cardCss.borderRadius.topLeft.y}% ${
                cardCss.borderRadius.topRight.y
              }% ${-cardCss.borderRadius.bottomRight.y}% ${-cardCss
                .borderRadius.bottomLeft.y}% / ${
                cardCss.borderRadius.topLeft.x
              }% ${-cardCss.borderRadius.topRight.x}% ${-cardCss
                .borderRadius.bottomRight.x}% ${
                cardCss.borderRadius.bottomLeft.x
              }%`,
          backgroundColor: cardCss.bgColor || "rgb(var(--white))",
          overflow: optionOpen === "Basic Styles" ? "scroll" : "visible"
        }}
      >
        <h2>Preview</h2>
        {resizeListener}

        {optionOpen === "Border Radius" ? (
          <BorderRadiusControls cardCss={cardCss} setCardCss={setCardCss} />
        ) : undefined}
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

  color: rgb(var(--white));
  & > h2 {
    mix-blend-mode: difference;
  }
`;

export default Preview;
