import React from "react"
import {
  Text,
  TogleOn,
  TogleOf,
  Paragraph,
  Button,
  TextButtonWrapper,
} from "./togle.style"

const Togle = ({ text, paragraph, onChangeToggle, index, toggle }) => {
  function handleClick() {
    onChangeToggle(index)
  }

  return (
    <div>
      {toggle.toggle ? (
        <TogleOn>
          <TextButtonWrapper>
            <Text>{text}</Text>
            <Button onClick={() => handleClick()}>Of</Button>
          </TextButtonWrapper>
          <Paragraph>{paragraph}</Paragraph>
        </TogleOn>
      ) : (
        <TogleOf>
          <Text>{text}</Text>
          <Button onClick={() => handleClick()}>On</Button>
        </TogleOf>
      )}
    </div>
  )
}

export default Togle
