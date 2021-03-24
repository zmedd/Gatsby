import React, { useEffect, useState } from "react"

import {
  LargeCircle,
  SmallCircle,
  Background,
  BigContainer,
  Paragraph,
  Container,
  PagesReaden,
  TextBox,
  Content,
  SecondThirdParagraphs,
  Hedgehog,
  Levels,
  Circle,
  Number,
  CityPage,
  City,
  Page,
  CurrentLevel,
  CircleOrange,
  CityPageCurrent,
  BlogImage,
  Blogs,
  CityCurrent,
  PageCurrent,
  BlogDescription,
  ReadMore,
  BlogImageWrap,
} from "./blog.style"
import { useGetImages } from "../../images/images"
import { Fragment } from "react"

const Blog = () => {
  const images = useGetImages()
  const [readers, setReaders] = useState(null)
  const [articles, setArticles] = useState(undefined)

  useEffect(() => {
    async function read() {
      const response = await fetch(
        "https://app.lesemester.no/statistics/reports"
      )
      const data = await response.json()
      setReaders(data)
    }

    function getAllArticles() {
      return new Promise(async (res, rej) => {
        try {
          const articlesWithoutImage = await fetch(
            "https://lesemester.no/wp-json/wp/v2/posts/"
          ).then(response => response.json())
          articlesWithoutImage.filter(article => article.categories.includes(7))
          const image = await fetch(
            "https://lesemester.no/wp-json/wp/v2/media/" +
              articlesWithoutImage[0].featured_media
          ).then(response => response.json())
          articlesWithoutImage[0].featured_image = image.source_url
          const finalArticles = articlesWithoutImage.reverse().map(article => {
            return {
              title: article.title.rendered
                .toString()
                .replace(/(<p>)|(<\/p>)/g, "")
                .replace(/&#[0-9]{3,4};/gi, "-")
                .replace(/\n/g, "")
                .replace(/(&hellip;)/g, ""),
              excerpt: article.excerpt.rendered
                .toString()
                .replace(/(<p>)|(<\/p>)/g, "")
                .replace(/&#[0-9]{3,4};/gi, "-")
                .replace(/\n/g, "")
                .replace(/(&hellip;)/g, ""),
              link: article.link,
              ...(article.featured_image && {
                featured_image: article.featured_image,
              }),
            }
          })
          setArticles(finalArticles)
          res(finalArticles)
        } catch (err) {
          rej(err)
        }
      })
    }

    read()
    getAllArticles()
  }, [])

  if (articles && articles.length < 15) {
    for (let i = 15 - articles.length; i > 0; i--) {
      setArticles([
        ...articles,
        {
          title: "Titlu",
          pages: "1000page",
        },
      ])
    }
  }
  console.log(articles)

  return (
    <Background>
      <BigContainer>
        <Container>
          {readers && <PagesReaden>{readers.pagesRead} Sider lest</PagesReaden>}
          <TextBox>
            <Content>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium explicabo.
            </Content>
            <SecondThirdParagraphs>
              <Paragraph>Sist oppdatert 17.04. kl 12:00</Paragraph>
              <Paragraph>Oppdateres neste gang: 18.04, kl 12:00</Paragraph>
            </SecondThirdParagraphs>
          </TextBox>
          <LargeCircle />
          <SmallCircle />
          <Hedgehog src={images.hedgehog} alt="hedgehog image" />
        </Container>
        <Container>
          {articles ? (
            articles.map((article, index) =>
              article.excerpt && article.featured_image ? (
                <Fragment key={index}>
                  <CurrentLevel>
                    <CircleOrange>
                      <Number>{index + 1}</Number>
                    </CircleOrange>
                    <CityPageCurrent>
                      <BlogImageWrap>
                        <BlogImage src={article.featured_image} />
                      </BlogImageWrap>
                      <Blogs>
                        <CityCurrent>
                          {article.title.substring(0, 50)} ...
                        </CityCurrent>

                        <PageCurrent>1000</PageCurrent>
                        <BlogDescription>
                          {article.excerpt.substring(0, 50)}
                        </BlogDescription>
                        <ReadMore href={article.link}>Read More</ReadMore>
                      </Blogs>
                    </CityPageCurrent>
                  </CurrentLevel>
                </Fragment>
              ) : article.excerpt && article.featured_image === undefined ? (
                <Fragment key={index}>
                  <Levels href={article.link}>
                    <Circle>
                      <Number>{index + 1}</Number>
                    </Circle>
                    <CityPage>
                      <City>{article.title}</City>
                      <Page>1000</Page>
                    </CityPage>
                  </Levels>
                </Fragment>
              ) : (
                <Fragment key={index}>
                  <Levels>
                    <Circle>
                      <Number>?</Number>
                    </Circle>
                    <CityPage>
                      <City>Undiscovered</City>
                      <Page>1000w</Page>
                    </CityPage>
                  </Levels>
                </Fragment>
              )
            )
          ) : (
            <>Loading </>
          )}
        </Container>
      </BigContainer>
    </Background>
  )
}

export default Blog
