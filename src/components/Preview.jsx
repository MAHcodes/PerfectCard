import styled from "styled-components";
import { useContext, useEffect, useRef } from "react";
import { CardCssContext } from "../hooks/CardCSS";
import useResizeAware from "react-resize-aware";

const Preview = () => {
  const { cardCss, setCardCss } = useContext(CardCssContext);
  const [resizeListener, sizes] = useResizeAware();
  const parentRef = useRef(null);

  useEffect(() => {
    if (sizes.width && sizes.height) {
    const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);
    const computedWidth = cardCss.widthUnit === "px" ? sizes.width : cardCss.widthUnit === "rem" ? (sizes.width / rem) : (sizes.width / parentRef.current.clientWidth) * 100;
    const computedHeight = cardCss.heightUnit === "px" ? sizes.height : cardCss.heightUnit === "rem" ? (sizes.height / rem) : (sizes.height / parentRef.current.clientHeight) * 100;

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
      >
        <h2>Preview</h2>
        {resizeListener}
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

  background-color: rgb(var(--white));
  color: rgb(var(--black));
`;

export default Preview;
