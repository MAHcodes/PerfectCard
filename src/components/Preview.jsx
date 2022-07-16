import styled from "styled-components";
import { useContext, useEffect, useRef } from "react";
import { CardCssContext } from "../hooks/CardCSS";
import useResizeAware from "react-resize-aware";
import BorderRadiusControls from "./BorderRadiusControls";
import BoxShadowControls from "./BoxShadowControls";

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

  const borderRadiusCSSValue = `${cardCss.borderRadius.topLeft.y.value}${
    cardCss.borderRadius.topLeft.y.unit
  } ${cardCss.borderRadius.topRight.y.value}${
    cardCss.borderRadius.topRight.y.unit
  } ${-cardCss.borderRadius.bottomRight.y.value}${
    cardCss.borderRadius.bottomRight.y.unit
  } ${-cardCss.borderRadius.bottomLeft.y.value}${
    cardCss.borderRadius.bottomLeft.y.unit
  } / ${cardCss.borderRadius.topLeft.x.value}${
    cardCss.borderRadius.topLeft.x.unit
  } ${-cardCss.borderRadius.topRight.x.value}${
    cardCss.borderRadius.topRight.x.unit
  } ${-cardCss.borderRadius.bottomRight.x.value}${
    cardCss.borderRadius.bottomRight.x.unit
  } ${cardCss.borderRadius.bottomLeft.x.value}${
    cardCss.borderRadius.bottomLeft.x.unit
  }`;

  return (
    <Box boxShadow={optionOpen === "Box Shadow"} ref={parentRef}>
      <Card
        style={{
          width: `${cardCss.width}${cardCss.widthUnit}`,
          height: `${cardCss.height}${cardCss.heightUnit}`,
          borderRadius: +cardCss.allBorderRadius
            ? `${cardCss.allBorderRadius}${cardCss.allBorderRadiusUnit}`
            : `${borderRadiusCSSValue}`,
          backgroundColor: cardCss.bgColor || "rgb(var(--white))",
          overflow: optionOpen === "Basic Styles" ? "scroll" : "visible",
        }}
      >
        <h2>Preview</h2>
        {resizeListener}

        {optionOpen === "Border Radius" ? (
          <BorderRadiusControls cardCss={cardCss} setCardCss={setCardCss} />
        ) : undefined}

        {optionOpen === "Box Shadow" ? (
          <BoxShadowControls cardCss={cardCss} setCardCss={setCardCss} />
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
  overflow: ${(props) => (props.boxShadow ? "visible" : "auto")};
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
