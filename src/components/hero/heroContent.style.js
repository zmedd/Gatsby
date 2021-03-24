import styled from "styled-components"

export const Background = styled.div`
  background-color: #f8f9f7;
  padding-top: 100px;
  padding-bottom: 80px;
`

export const BigContainer = styled.div`
  margin: auto;
  display: flex;
  max-width: 1200px;
  align-items: center;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`

export const Container1 = styled.div`
  width: 50%;
  @media (max-width: 1024px) {
    width: 100%;
    text-align: center;
  }
`

export const Lesereisen = styled.p`
  font-family: "Lato", sans-serif;
  line-height: 58px;
  margin-bottom: 20px;
  font-size: 68px;
  font-weight: 700;
  color: #353e55;
`

export const Nasjonal = styled.p`
  font-family: "Lato", sans-serif;
  line-height: 44px;
  margin-bottom: 20px;
  font-size: 36px;
  font-weight: 700;
  color: #ff7710;
`

export const Paragraph = styled.p`
  font-family: "Lato", sans-serif;
  line-height: 24px;
  margin-bottom: 40px;
  font-size: 16px;
  font-weight: 400;
  color: #353e55;
`

export const Button = styled.button`
  background-color: #4e78dd;
  border: none;
  border-radius: 69px;
`

export const ButtonText = styled.div`
  font-family: "Lato", sans-serif;
  color: #ffffff;
  line-height: 24px;
  font-size: 16px;
  font-weight: 400;
  padding: 8px 20px;
  width: 140px;
`

export const Container2 = styled.div`
  width: 50%;
  @media (max-width: 1024px) {
    margin-top: 80px;
    width: 100%;
    text-align: center;
  }
`

export const HeroImage = styled.img`
  max-width: 100%;
`
