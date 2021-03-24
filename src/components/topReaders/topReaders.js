import React, { useEffect, useState } from "react"
import {
  Background,
  Title,
  SubTitle,
  BigContainer,
  Top10Image,
  Top10Title,
  Container,
  TopContainer,
  TopName,
  TopPages,
  AllThreeTop,
} from "./topReaders.style"

import { Fragment } from "react"
import { useGetImages } from "../../images/images"

const TopReaders = () => {
  const images = useGetImages()
  const [readers, setReaders] = useState(undefined)

  useEffect(() => {
    function getTopReaders() {
      return new Promise(async (res, rej) => {
        try {
          const topReaders = await fetch(
            "https://app.lesemester.no/statistics/reports"
          ).then(response => response.json())

          setReaders(topReaders)
          res(topReaders)
        } catch (err) {
          rej(err)
        }
      })
    }
    getTopReaders()
  }, [])

  return (
    <Background>
      {readers && <Title>Dagens statistikk</Title>}
      <SubTitle>Average pages read per student</SubTitle>
      <BigContainer>
        <Container>
          <Top10Image src={images.fylker} alt="fylker image" />
          <Top10Title>Topp 10 fylker</Top10Title>
          <AllThreeTop>
            {readers &&
              readers.topAvgSchools.map((school, index) => (
                <Fragment key={index}>
                  <TopContainer>
                    <TopName>{school.name}</TopName>
                    <TopPages>{school.pages}</TopPages>
                  </TopContainer>
                </Fragment>
              ))}
          </AllThreeTop>
        </Container>
        <Container>
          <Top10Image src={images.kommuner} alt="kommuner image" />
          <Top10Title>Topp 10 kommuner</Top10Title>
          <AllThreeTop>
            {readers &&
              readers.topSchools.map((school, index) => (
                <Fragment key={index}>
                  <TopContainer>
                    <TopName>{school.name}</TopName>
                    <TopPages>{school.pages}</TopPages>
                  </TopContainer>
                </Fragment>
              ))}
          </AllThreeTop>
        </Container>
        <Container>
          <Top10Image src={images.skoler} alt="skoler image" />
          <Top10Title>Topp 10 skoler</Top10Title>
          <AllThreeTop>
            {readers &&
              readers.topMunicipalities.map((school, index) => (
                <Fragment key={index}>
                  <TopContainer>
                    <TopName>{school.name}</TopName>
                    <TopPages>{school.pages}</TopPages>
                  </TopContainer>
                </Fragment>
              ))}
          </AllThreeTop>
        </Container>
      </BigContainer>
    </Background>
  )
}

export default TopReaders
