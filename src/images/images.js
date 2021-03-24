import { graphql, useStaticQuery } from "gatsby"

export function useGetImages() {
  const images = useStaticQuery(graphql`
    query allImages {
      map: file(relativePath: { eq: "map.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            src
          }
        }
      }
      hero: file(relativePath: { eq: "hero.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            src
          }
        }
      }
      hedgehog: file(relativePath: { eq: "hedgehog.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            src
          }
        }
      }
      fylker: file(relativePath: { eq: "fylker.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            src
          }
        }
      }
      kommuner: file(relativePath: { eq: "kommuner.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            src
          }
        }
      }
      skoler: file(relativePath: { eq: "skoler.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            src
          }
        }
      }
    }
  `)

  const websiteImages = {
    hero: images.hero.childImageSharp.fluid.src,
    map: images.map.childImageSharp.fluid.src,
    hedgehog: images.hedgehog.childImageSharp.fluid.src,
    fylker: images.fylker.childImageSharp.fluid.src,
    kommuner: images.kommuner.childImageSharp.fluid.src,
    skoler: images.skoler.childImageSharp.fluid.src,
  }

  return websiteImages
}
