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
  background: red;
  border-radius: .4rem;
  background: rgb(var(--bg-main));
  margin-bottom: 2rem;
`

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(var(--fg-main));
  color: rgb(var(--bg-main));
`

export default Preview
