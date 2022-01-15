import { useStaticQuery, graphql } from "gatsby"

export const useProjectImageQuery = () => {
  const data = useStaticQuery(graphql`
    query ProjectImageQuery {
      allImageSharp {
        edges {
          node {
            id
            gatsbyImageData(layout: CONSTRAINED, width: 200)
          }
        }
      }
    }
  `)
  return data
}
