import { useContext, useRef } from "react";
import styled from "styled-components";
import { CardCssContext } from "../hooks/CardCSS";
import CSSPropVal from "./CSSPropVal";
import CodeHeader from "./CodeHeader";

const Code = () => {
  const { cardCss } = useContext(CardCssContext);
  const codeRef = useRef(null);
  const ifBorderRadius = () => {
    const br = cardCss.borderRadius;
    return (
      br.topLeft.x ||
      br.topLeft.y ||
      br.topRight.x ||
      br.topRight.y ||
      br.bottomRight.x ||
      br.bottomRight.y ||
      br.bottomLeft.x ||
      br.bottomLeft.y
    );
  };

  return (
    <Div>
      <CodeHeader codeRef={codeRef} />
      <Pre>
        <code ref={codeRef}>
          .card {"{"}
          <Comment>{"/* Basic Styles */"}</Comment>
          <CSSPropVal
            prop="width"
            val={`${Math.round(cardCss.width)}${cardCss.widthUnit}`}
          />
          <CSSPropVal
            prop="height"
            val={`${Math.round(cardCss.height)}${cardCss.heightUnit}`}
          />
          <CSSPropVal prop="background-color" val={cardCss.bgColor} />
          {ifBorderRadius() ? (
            <>
              <br />
              <Comment>{"/* Border Radius */"}</Comment>
              <CSSPropVal
                prop="border-radius"
                val={`${cardCss.borderRadius.topLeft.y}% ${
                  cardCss.borderRadius.topRight.y
                }% ${-cardCss.borderRadius.bottomRight.y}% ${-cardCss
                  .borderRadius.bottomLeft.y}% / ${
                  cardCss.borderRadius.topLeft.x
                }% ${-cardCss.borderRadius.topRight.x}% ${-cardCss.borderRadius
                  .bottomRight.x}% ${cardCss.borderRadius.bottomLeft.x}%`}
              />
            </>
          ) : undefined}
          {"}"}
        </code>
      </Pre>
    </Div>
  );
};

const Div = styled.div`
  background-color: rgb(var(--bg-main));
  border-radius: 0.5rem;
  border: 1px solid rgb(var(--gray));
`;

const Comment = styled.div`
  color: rgb(var(--gray));
  padding-inline-start: 1.5rem;
`;

const Pre = styled.pre`
  padding: 1.5rem;
`;

export default Code;
