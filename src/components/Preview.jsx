import styled from "styled-components"

const Preview = () => {
  return (
    <Box>
      <Card>
        <h2>Preview</h2>
      </Card>
    </Box>
  )
}

const Box = styled.div`
  min-height: 20rem;
  height: 50vh;
  border-radius: .4rem;
  margin-bottom: 2rem;
  display: flex;
`

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(var(--fg-main));
  color: rgb(var(--bg-main));
  resize: both;
  overflow: auto;
  margin: auto;
`

export default Preview
