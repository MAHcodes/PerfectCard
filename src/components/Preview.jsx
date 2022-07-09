import styled from "styled-components";
import { useContext, useEffect } from "react";
import { CardCssContext } from "../hooks/CardCSS";
import useResizeAware from "react-resize-aware";

const Preview = () => {
  const { cardCss, setCardCss } = useContext(CardCssContext);
  const [resizeListener, sizes] = useResizeAware();

  useEffect(() => {
    if (sizes.width && sizes.height) {
      setCardCss({ ...cardCss, width: sizes.width, height: sizes.height });
    }
    // eslint-disable-next-line
  }, [sizes]);

  return (
    <Box>
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
  background-color: rgb(var(--fg-main));
  color: rgb(var(--bg-main));
  resize: both;
  overflow: auto;
  margin: auto;
  position: relative;
`;

export default Preview;
