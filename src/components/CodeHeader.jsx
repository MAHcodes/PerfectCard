import styled from "styled-components";
import Button from "./Button";

const CodeHeader = () => {
  return (
    <Div>
      <H2>Read only code preview</H2>
      <div>
        <Button pad=".45rem" border val={<CopyIcon />} />
      </div>
    </Div>
  );
};

const CopyIcon = () => (
  <Svg width="20px" height="20px" viewBox="0 0 50.788 50.723">
    <path
      d="M8.213,49.723A8.222,8.222,0,0,1,0,41.511V17A8.222,8.222,0,0,1,8.213,8.787H32.724A8.222,8.222,0,0,1,40.936,17V41.511a8.222,8.222,0,0,1-8.212,8.213ZM4,17V41.511a4.217,4.217,0,0,0,4.214,4.212H32.724a4.217,4.217,0,0,0,4.212-4.212V17a4.218,4.218,0,0,0-4.212-4.213H8.213A4.218,4.218,0,0,0,4,17ZM41.575,36.936a4.219,4.219,0,0,0,4.214-4.213V11.245A7.254,7.254,0,0,0,38.543,4H17.064a4.217,4.217,0,0,0-4.212,4.214h-4A8.221,8.221,0,0,1,17.064,0H38.543A11.258,11.258,0,0,1,49.788,11.245V32.723a8.221,8.221,0,0,1-8.213,8.212Z"
      transform="translate(0.5 0.5)"
      stroke="rgb(var(--fg-main))"
      fill="rgb(var(--fg-main))"
      stroke-miterlimit="10"
      stroke-width="1"
    />
  </Svg>
);

const Div = styled.div`
  padding: 2rem;
  border-bottom: 1px solid rgb(var(--gray));
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const H2 = styled.h2``;

const Svg = styled.svg`
  & > path {
    transition: fill var(--transition-d) var(--transition-tf),
    stroke var(--transition-d) var(--transition-tf);
  }
`;

export default CodeHeader;
