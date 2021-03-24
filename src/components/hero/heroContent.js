import React from "react"
import {
  BigContainer,
  Container1,
  Lesereisen,
  Nasjonal,
  Paragraph,
  Button,
  Container2,
  HeroImage,
  ButtonText,
  Background,
} from "./heroContent.style"
import { useGetImages } from "../../images/images"

const HeroContent = () => {
  const images = useGetImages()
  return (
    <Background>
      <BigContainer>
        <Container1>
          <Lesereisen>Lesereisen 2021</Lesereisen>
          <Nasjonal color="pink">
            Nasjonal lesekonkurranse <br /> 7. april - 26. april
          </Nasjonal>
          <Paragraph>
            Vi inviterer elever ved alle barneskoler i Norge til Blir du med oss
            up pa em lesereise?
          </Paragraph>
          <Button>
            <ButtonText>Finne ut mer</ButtonText>
          </Button>
        </Container1>
        <Container2>
          <HeroImage src={images.hero} />
        </Container2>
      </BigContainer>
    </Background>
  )
}

export default HeroContent
