import styled from "styled-components";
import { useContext, useEffect, useRef, useState } from "react";
import { CardCssContext } from "../hooks/CardCSS";
import useResizeAware from "react-resize-aware";
import BorderRadiusControls from "./BorderRadiusControls";
import BoxShadowControls from "./BoxShadowControls";
import SpreadControl from "./SpreadControl";

const Preview = () => {
  const { cardCss, setCardCss, optionOpen } = useContext(CardCssContext);
  const [resizeListener, sizes] = useResizeAware();
  const [genBoxS, setGenBoxS] = useState(0);
  const parentRef = useRef(null);

  useEffect(() => {
    setGenBoxS(
      Object.values(cardCss.boxShadow)
        .map((shadow, i) => {
          return `${shadow.inset ? "inset " : ""}${shadow.x}px ${shadow.y}px ${
            shadow.blur
          }px ${shadow.spread}px ${shadow.color}${
            i >= Object.values(cardCss.boxShadow).length - 1 ? "" : ","
          }`;
        })
        .join("")
    );
  }, [cardCss.boxShadow]);

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
      <ResizeBox>
        <Card
          style={{
            width: `${cardCss.width}${cardCss.widthUnit}`,
            height: `${cardCss.height}${cardCss.heightUnit}`,
            borderRadius: +cardCss.allBorderRadius
              ? `${cardCss.allBorderRadius}${cardCss.allBorderRadiusUnit}`
              : `${borderRadiusCSSValue}`,
            backgroundColor: cardCss.bgColor || "rgb(var(--white))",
            overflow: optionOpen === "Basic Styles" ? "scroll" : "visible",
            boxShadow: genBoxS,
          }}
        >
          <h2>Preview</h2>
          {resizeListener}

          {optionOpen === "Border Radius" && (
            <BorderRadiusControls cardCss={cardCss} setCardCss={setCardCss} />
          )}

          {optionOpen === "Box Shadow" && cardCss.activeBoxShadow !== "" ? (
            <>
              <BoxShadowControls cardCss={cardCss} setCardCss={setCardCss} />
              <SpreadControl cardCss={cardCss} setCardCss={setCardCss} />
            </>
          ) : undefined}
        </Card>

        {optionOpen === "Basic Styles" && <ResizeIndicator />}
      </ResizeBox>
    </Box>
  );
};

const ResizeIndicator = () => (
  <Resize>
    <p>resize me</p>

    <svg width="45" height="50" viewBox="0 0 52 57" fill="none">
      <path
        d="M3 3C14.2417 18.3749 26.6451 31.7107 39.4178 45.7647C40.1391 46.5584 47.861 54.6835 47.861 53.9537C47.861 47.7689 41.1725 42.3527 40.5368 36.6658C39.8585 30.5995 44.6964 48.4818 48.7765 53.0438C50.2515 54.6929 43.9756 51.5723 43.0799 51.224C37.732 49.1442 32.4587 49.4043 26.8038 49.4043"
        stroke="#FFFFFF"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  </Resize>
);

const ResizeBox = styled.div`
  display: flex;
  position: relative;
  margin: auto;
`;

const Resize = styled.div`
  position: absolute;
  inset: auto 2px 0 auto;
  mix-blend-mode: difference;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  pointer-events: none;
  & > p {
    padding-inline-end: 1rem;
    color: #fff;
  }
  & > svg {
    width 30px;
    height: 35px;
  }
`;

const Box = styled.div`
  min-height: 20rem;
  height: 65vh;
  border-radius: 0.4rem;
  margin-bottom: 2rem;
  display: flex;
  overflow: auto;
  position: relative;
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
