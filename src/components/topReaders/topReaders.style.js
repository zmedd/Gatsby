import styled from "styled-components"

export const Background = styled.div`
  background-color: #353e55;
  padding-top: 80px;
`

export const Title = styled.div`
  font-family: "Lato", sans-serif;
  font-size: 36px;
  line-height: 44px;
  font-weight: 700;
  color: #ffffff;
  text-align: center;
  margin-bottom: 10px;
`

export const SubTitle = styled.div`
  font-family: "Lato", sans-serif;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  color: #aeb2bb;
  text-align: center;
  margin-bottom: 40px;
`

export const BigContainer = styled.div`
  margin: auto;
  display: flex;
  max-width: 1200px;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`
export const Container = styled.div`
  width: 33.3333%;
  @media (max-width: 1024px) {
    width: 80%;
    margin: auto;
    margin-bottom: 20px;
  }
`

export const Top10Image = styled.img`
  display: block;
  margin: 0 auto 10px auto;
  width: 80px;
`

export const Top10Title = styled.div`
  font-family: "Lato", sans-serif;
  font-size: 24px;
  line-height: 36px;
  font-weight: 700;
  color: #ffffff;
  text-align: center;
  margin-bottom: 24px;
`
export const AllThreeTop = styled.div`
  margin-right: 20px;
  padding-bottom: 80px;
  @media (max-width: 1024px) {
    margin-right: 0px;
  }
`
export const TopContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  &:nth-child(odd) {
    background-color: rgb(255, 255, 255, 0.05);
  }
`

export const TopName = styled.p`
  margin-bottom: 4px;
  margin-top: 4px;
  margin-left: 20px;
  flex: 1;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  color: #ffffff;
`

export const TopPages = styled.p`
  margin-bottom: 4px;
  margin-top: 4px;
  margin-right: 20px;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  color: #ffffff;
`

// <div class="lsm-top-line">
//                 <span class="lsm-top-name">
//                   ${data.name}
//                 </span>
//                 <span class="lsm-top-pages">${data.pages}</span>
//         </div>
