import React from "react"
import styled from "styled-components"

const ContentWraper = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Lato", sans-serif;
`

const Layout = ({ children }) => {
  return <ContentWraper>{children}</ContentWraper>
}

export default Layout
