import React, { useEffect, useState } from "react"
import { Container } from "./information.style"
import Togle from "./togle"
import AOS from "aos"
import "aos/dist/aos.css"

const Information = () => {
  const [toggle, setToggle] = useState([
    { toggle: false },
    { toggle: false },
    { toggle: false },
    { toggle: false },
    { toggle: false },
    { toggle: false },
  ])

  const handleOnChangeToggle = index => {
    const falseToggle = [
      { toggle: false },
      { toggle: false },
      { toggle: false },
      { toggle: false },
      { toggle: false },
      { toggle: false },
    ]
    falseToggle[index].toggle = !toggle[index].toggle
    setToggle(falseToggle)
  }

  console.log(toggle)

  useEffect(() => {
    AOS.init({
      offset: 10,
      duration: 3000,
    })
  }, [])

  const data = [
    {
      text: "Informasjon om konkrransen",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      text: "KonKurra - nseregler",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      text: "Premier",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      text: "Slik deltar dere - Alt laeren trenger a vite",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      text: "Hjelp",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      text: "Backgrunnen for konkurransen",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ]

  return (
    <Container>
      {data.map((data, index) => (
        <div data-aos="fade-up">
          <Togle
            key={"toggle_" + index}
            text={data.text}
            paragraph={data.paragraph}
            toggle={toggle[index]}
            onChangeToggle={handleOnChangeToggle}
            index={index}
          />
        </div>
      ))}
    </Container>
  )
}

export default Information
