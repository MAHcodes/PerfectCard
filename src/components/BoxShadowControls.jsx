import styled from "styled-components";
import Draggable from "react-draggable";
import { CardCssContext } from "../hooks/CardCSS";
import { useContext} from "react";
import RangeInput from "./RangeInput";

const BoxShadowControls = () => {
  const { cardCss, setCardCss } = useContext(CardCssContext);

  const handleDrag = (data) => {
    const currentX = data.x;
    const currentY = data.y;
    const newBoxShadow = {
      ...cardCss.boxShadow[cardCss.activeBoxShadow],
      x: Math.round(currentX / 3),
      y: Math.round(currentY / 3),
      // deg: (Math.atan2(currentY, currentX) * 180) / Math.PI,
    };

    setCardCss({
      ...cardCss,
      boxShadow: {
        ...cardCss.boxShadow,
        [cardCss.activeBoxShadow]: newBoxShadow,
      },
      lightSource: {
        x: data.x,
        y: data.y,
      },
    });
  };

  const handleBlur = (e) => {
    setCardCss({
      ...cardCss,
      boxShadow: {
        ...cardCss.boxShadow,
        [cardCss.activeBoxShadow]: {
          ...cardCss.boxShadow[cardCss.activeBoxShadow],
          blur: e.target.value,
        },
      },
    });
  };

  return (
    <Draggable
      onDrag={(_, data) => handleDrag(data)}
      position={{ x: cardCss.lightSource.x, y: cardCss.lightSource.y }}
      handle="#handle"
    >
      <Div>
        <LightIcon cardCss={cardCss} />
        <RangeInput
          onChange={handleBlur}
          value={cardCss.boxShadow[cardCss.activeBoxShadow].blur}
          min="0"
          max="100"
        />
      </Div>
    </Draggable>
  );
};

const LightIcon = ({ cardCss }) => (
  <Svg
    style={{
      filter: `drop-shadow(0px 0px ${
        cardCss.boxShadow[cardCss.activeBoxShadow].blur > 20
          ? cardCss.boxShadow[cardCss.activeBoxShadow].blur / 3
          : 10
      }px #fff)`,
    }}
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    id="handle"
  >
    <g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.9121 7.62633C11.3805 7.99191 8.76143 10.2393 7.98361 13.5712C7.8072 14.3269 7.80659 15.7972 7.9824 16.5376C8.34517 18.0654 9.01226 19.2687 10.2702 20.6643C10.5979 21.0278 10.9528 21.4507 11.0589 21.6039C11.29 21.9377 11.73 22.7961 11.8617 23.17C11.9137 23.3177 12.0209 23.5097 12.1 23.5967C12.2689 23.7825 12.6169 23.9411 12.8591 23.9427C12.9533 23.9433 14.2756 23.7718 15.7975 23.5616C17.3193 23.3513 18.8484 23.1448 19.1954 23.1027C19.9686 23.0088 20.131 22.9222 20.4861 22.414C20.6259 22.214 21.0468 21.6552 21.4216 21.1723C23.1513 18.9433 23.6966 17.9708 24.0405 16.5024C24.2142 15.7608 24.2147 14.3327 24.0415 13.5934C23.4984 11.2759 22.0247 9.50509 19.7728 8.46417C18.3096 7.78786 16.4493 7.46718 14.9121 7.62633ZM17.08 11.2815C17.1719 11.3755 17.1739 11.4576 17.115 12.6417C17.0805 13.3347 17.0373 14.0676 17.0192 14.2704L16.9863 14.639H17.7585C18.4943 14.639 18.5348 14.6443 18.6163 14.752C18.6633 14.8142 18.7018 14.9073 18.7018 14.9589C18.7018 15.0105 17.9555 16.2318 17.0434 17.6728C15.8473 19.5626 15.3497 20.3054 15.2582 20.3376C15.086 20.3982 14.8634 20.2981 14.8208 20.1409C14.8022 20.0724 14.8897 19.3384 15.0154 18.5099C15.141 17.6813 15.2432 16.9748 15.2427 16.9398C15.2419 16.8916 15.0294 16.8762 14.366 16.8762C13.5234 16.8762 13.4871 16.872 13.4048 16.7632C13.3578 16.7011 13.3193 16.6082 13.3193 16.5568C13.3193 16.4598 16.4577 11.3849 16.598 11.2551C16.7113 11.1502 16.9652 11.1641 17.08 11.2815ZM16.1479 24.7606C14.1844 25.0359 12.5593 25.2623 12.5367 25.2635C12.4157 25.2702 12.6848 26.5621 12.8509 26.7724C12.9144 26.8527 13.1652 26.825 16.4009 26.38L19.8826 25.9011L19.9458 25.5454C19.9811 25.3469 19.9958 24.9815 19.979 24.7192C19.951 24.2816 19.9409 24.2493 19.8334 24.2545C19.7698 24.2575 18.1114 24.4853 16.1479 24.7606ZM16.9992 27.5557C15.8362 27.7188 14.6055 27.8913 14.2642 27.9388L13.6438 28.0254L13.7699 28.1501C14.0089 28.3864 14.6675 28.7528 15.0776 28.8775C15.425 28.9832 15.591 29.0021 16.1479 29C16.7214 28.9978 16.864 28.9792 17.2458 28.8567C17.8128 28.6747 18.2589 28.4231 18.6942 28.0397C19.0034 27.7673 19.3609 27.3587 19.3609 27.2778C19.3609 27.2285 19.1769 27.2501 16.9992 27.5557Z"
        fill="transparent"
        stroke="white"
      />
      <path
        d="M6 15H3"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M29 14H26"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.09401 8.15033L8.03335 7.08967L6.97269 6.02901"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24 8.12132L25.0606 7.06066L26.1213 6"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 6V4.5V3"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </Svg>
);

const Div = styled.div`
  position: absolute;
  color: rgb(var(--black));
  z-index: 100;
  cursor: grab;
  margin: auto;
  mix-blend-mode: difference;
  &:active {
    cursor: grabbing;
  }
  & > input {
    position: absolute;
    /* border: 1px solid red; */
    inset: -110% 0 auto .2rem;
    transform: rotate(-90deg);
    min-width: 5rem;
    padding-block: 2rem;
    margin-block: auto;
    opacity: 0;
    transition: opacity var(--transition-d) var(--transition-tf );
    &:hover {
      opacity: 1;
    }
  }
  &:hover > input {
    opacity: 1 !important;
  }
`;

const Svg = styled.svg`
  width: 5rem;
  height: 5rem;
`;
export default BoxShadowControls;
