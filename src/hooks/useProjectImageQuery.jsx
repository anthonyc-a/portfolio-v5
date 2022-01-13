import { useStaticQuery, graphql } from "gatsby"

export const useProjectImageQuery = () => {
  const data = useStaticQuery(graphql`
    query ProjectImageQuery {
      allFile {
        edges {
          node {
            absolutePath
            publicURL
          }
        }
      }
    }
  `)
  return data
}
