import styled from "styled-components"

export const Container = styled.div`
  margin: auto;
  background-color: #ffffff;
  max-width: 1100px;
  margin-bottom: 100px;
`

export const Title = styled.div`
  padding-top: 180px;
  font-family: "Lato", sans-serif;
  line-height: 50px;
  margin-bottom: 20px;
  font-size: 40px;
  font-weight: 700;
  color: #353e55;
  text-align: center;
  margin-bottom: 50px;
`

export const ImageWrapper = styled.div`
  display: flex;
  @media (max-width: 1024px) {
    display: block;
    text-align: center;
  }
`

export const Image = styled.img`
  width: 16.6666%;
  margin-right: 35px;
  @media (max-width: 1024px) {
    width: 25.2222%;
    margin-left: 10px;
    margin-right: 10px;
  }
`
