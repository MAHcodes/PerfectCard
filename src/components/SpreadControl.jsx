import { useState } from "react";
import styled from "styled-components";

const SpreadControl = ({ cardCss, setCardCss }) => {
  const [startY, setStartY] = useState(undefined);
  const [isDown, setIsDown] = useState(false);

  const handleDown = (e) => {
    setIsDown(true);
    setStartY(e.pageY + cardCss.boxShadow[cardCss.activeBoxShadow].spread);
  };

  const handleMove = (e) => {
    if (!isDown) return;

    setCardCss({
      ...cardCss,
      boxShadow: {
        ...cardCss.boxShadow,
        [cardCss.activeBoxShadow]: {
          ...cardCss.boxShadow[cardCss.activeBoxShadow],
          spread: (e.pageY - startY) * -1,
        },
      },
    });
  };

  const handleUp = () => {
    setIsDown(false);
  };

  return (
    <Div
      onMouseDown={handleDown}
      onMouseMove={handleMove}
      onMouseLeave={handleUp}
      onMouseUp={handleUp}
    />
  );
};

const Div = styled.div`
  position: absolute;
  inset: 0;
  cursor: ns-resize;
`;

export default SpreadControl;
