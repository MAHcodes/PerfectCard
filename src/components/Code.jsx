import { useContext, useRef } from "react";
import styled from "styled-components";
import { CardCssContext } from "../hooks/CardCSS";
import CSSPropVal from "./CSSPropVal";
import CodeHeader from "./CodeHeader";

const Code = () => {
  const { cardCss } = useContext(CardCssContext);
  const codeRef = useRef(null);

  return (
    <Div>
      <CodeHeader codeRef={codeRef} />
      <Pre>
        <code ref={codeRef} >
          .card {"{"}
          <Comment>{"/* Basic Styles */"}</Comment>
          {cardCss.width && (
            <CSSPropVal
              prop="width"
              val={`${Math.round(cardCss.width)}${cardCss.widthUnit}`}
            />
          )}
          {cardCss.height && (
            <CSSPropVal
              prop="height"
              val={`${Math.round(cardCss.height)}${cardCss.heightUnit}`}
            />
          )}
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
