import styled from "styled-components";

const Preview = () => {
  return (
    <div>
      Preview
      <Box />
    </div>
  )
}

const Box = styled.div`
  width: 60%;
  height: 300px;
  background-color: rgb(var(--bg-main));

`

export default Preview
