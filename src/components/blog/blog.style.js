import styled from "styled-components"

export const Background = styled.div`
  margin-top: -4px;
  background-color: #e7eae6;
`
export const BigContainer = styled.div`
  padding-top: 80px;
  margin: auto;
  display: flex;
  max-width: 1200px;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`
export const Container = styled.div`
  width: 50%;
  padding-bottom: 86px;
  @media (max-width: 1024px) {
    width: 90%;
    margin: auto;
  }
`
export const PagesReaden = styled.div`
  font-family: "Lato", sans-serif;
  line-height: 58px;
  margin-bottom: 20px;
  font-size: 48px;
  font-weight: 700;
  color: #353e55;
`
export const TextBox = styled.div`
  font-family: "Lato", sans-serif;
  display: flex;
  flex-direction: column;
  max-width: 480px;
  background-color: #f6f6f6;
  border-radius: 25px;
`
export const Content = styled.div`
  line-height: 24px;
  max-width: 400px;
  font-size: 16px;
  font-weight: 700;
  margin: 20px 40px 10px;
`
export const SecondThirdParagraphs = styled.div`
  line-height: 18px;
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0px 40px 20px;
`
export const Paragraph = styled.span`
  color: #696d77;
  font-size: 12px;
  font-weight: 400;
`
export const LargeCircle = styled.div`
  margin-top: 20px;
  margin-left: 20px;
  display: block;
  background-color: #f6f6f6;
  width: 40px;
  height: 40px;
  border-radius: 50%;
`
export const SmallCircle = styled.div`
  margin-top: 20px;
  margin-left: 60px;
  display: block;
  background-color: #f6f6f6;
  width: 20px;
  height: 20px;
  border-radius: 50%;
`
export const Hedgehog = styled.img`
  max-width: 280px;
  @media (max-width: 1024px) {
    margin-bottom: 20px;
  }
`

export const Levels = styled.a`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  text-decoration: none;
`

export const Circle = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  color: #ffffff;
  background-color: #848d81;
  margin-right: 32px;
  font-size: 12px;
`

export const Number = styled.div``

export const CityPage = styled.div`
  flex: 1;
`

export const City = styled.p`
  line-height: 24px;
  font-size: 16px;
  font-weight: 700;
  color: #353e55;
`

export const Page = styled.span`
  line-height: 18px;
  font-size: 12px;
  font-weight: 400;
  color: #353e55;
`

export const CurrentLevel = styled.div`
  display: flex;
`

export const CircleOrange = styled.span`
  font-size: 12px;
  margin-top: 12px;
  margin-right: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  color: #ffffff;
  background-color: rgba(255, 119, 16);
  position: relative;
  z-index: 1;
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 36px;
    height: 36px;
    background-color: rgba(255, 119, 16, 0.4);
    border-radius: 50%;
    z-index: -1;
  }

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 48px;
    height: 48px;
    background-color: rgba(255, 119, 16, 0.1);
    border-radius: 50%;
    z-index: -2;
  }
`

export const CityPageCurrent = styled.div`
  display: flex;
  flex: 1;
  margin-bottom: 20px;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`

export const BlogImageWrap = styled.div`
  width: 180px;
  height: 180px;
  position: relative;
  margin-right: 20px;
  overflow: hidden;
`

export const BlogImage = styled.img`
  max-height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
`

export const Blogs = styled.div`
  flex: 1;
`

export const CityCurrent = styled.div`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 10px;
  color: #353e55;
`

export const PageCurrent = styled.span`
  display: inline-block;
  font-size: 12px;
  font-weight: 400;
  color: #353e55;
  margin-bottom: 10px;
`

export const BlogDescription = styled.p`
  max-width: 312px;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #353e55;
  margin-bottom: 10px;
`

export const ReadMore = styled.a`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-decoration: none;
  color: #4e78dd;
  border: none;
  background-color: #e7eae6;
`
