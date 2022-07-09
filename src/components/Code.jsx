import { useContext } from "react";
import styled from "styled-components";
import { CardCssContext } from "../hooks/CardCSS";
import CSSPropVal from "./CSSPropVal";
import CodeHeader from "./CodeHeader";

const Code = () => {
  const { cardCss } = useContext(CardCssContext);
  return (
    <Div>
      <CodeHeader />
      <Pre>
        <code>
          .card {"{"} <br />
            {cardCss.width &&<CSSPropVal prop="width" val={`${Math.round(cardCss.width)}${cardCss.widthUnit}`} />}
            {cardCss.height &&<CSSPropVal prop="height" val={`${Math.round(cardCss.height)}${cardCss.heightUnit}`} />}
          {"}"}
        </code>
      </Pre>
    </Div>
  );
};

const Div = styled.div`
  background-color: rgb(var(--bg-main));
  border-radius: .75rem;
  border: 1px solid rgb(var(--gray));
`;

const Pre = styled.pre`
  padding: 2rem;
`

export default Code;
