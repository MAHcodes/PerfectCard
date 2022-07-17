import styled from "styled-components";
import Draggable from "react-draggable";
import { CardCssContext } from "../hooks/CardCSS";
import { useContext, useEffect, useRef } from "react";

const BoxShadowControls = ({ cardRef }) => {
  const controlRef = useRef(null);
  const { cardCss, setCardCss } = useContext(CardCssContext);

  useEffect(() => {
    const newBoxShadow = cardCss.boxShadow.map((item, i) => i === 0 ? { ...cardCss.boxShadow[i], x: 100 + cardRef.current.clientWidth / 2 - controlRef.current.clientWidth / 2, } : item);
    setCardCss({
      ...cardCss,
      boxShadow: newBoxShadow,
    });
    //eslint-disable-next-line
  }, []);

  const handleDrag = (data) => {
    const currentX =
      data.x +
      100 +
      cardRef.current.clientWidth / 2 -
      controlRef.current.clientWidth / 2;
    const currentY = data.y;

    setCardCss({
      ...cardCss,
      boxShadow: [
        {
          x: currentX,
          y: currentY,
          deg: (Math.atan2(currentY, currentX) * 180) / Math.PI,
        },
      ],
    });
  };

  return (
    <Draggable
      onDrag={(_, data) => handleDrag(data)}
      // position={{x: cardCss.boxShadow[0].x, y: cardCss.boxShadow[0].y}}
    >
      <Div ref={controlRef}>controls</Div>
    </Draggable>
  );
};

const Div = styled.div`
  position: absolute;
  background-color: red;
  z-index: 100;
  right: -100px;
`;

export default BoxShadowControls;
