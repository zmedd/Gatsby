import React from "react"
import { Container, Title, ImageWrapper, Image } from "./partners.style"

import { useGetImages } from "../../images/images"

export const Partners = () => {
  const images = useGetImages()
  return (
    <Container>
      <Title>Lesereisen 2021 Partners</Title>
      <ImageWrapper>
        <Image src={images.skoler} alt="skoler image" />
        <Image src={images.skoler} alt="skoler image" />
        <Image src={images.skoler} alt="skoler image" />
        <Image src={images.skoler} alt="skoler image" />
        <Image src={images.skoler} alt="skoler image" />
        <Image src={images.skoler} alt="skoler image" />
      </ImageWrapper>
    </Container>
  )
}

export default Partners
