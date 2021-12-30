import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
  color: red;
  background: orange;
  width: 200px;
  text-align: center;
  margin: auto;
`

function Notification({ message }: { message: string }) {
  return <StyledDiv>{message}</StyledDiv>
}

export default Notification
