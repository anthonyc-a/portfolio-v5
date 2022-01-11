import React from "react"
import "../fonts/webfonts/light/ii-vorkurs-light.css"
import "../fonts/webfonts/medium/ii-vorkurs-medium.css"
import "../fonts/webfonts/bold/ii-vorkurs-bold.css"
import "../styles/Index.css"
import Seo from "../components/SEO/SEO"
import Layout from "../components/Layout/Layout"

export default function Home() {
  const [infoActive, setInfoActive] = React.useState(false)
  return (
    <Layout infoActive={infoActive} setInfoActive={setInfoActive}>
      <div>
        <Seo />
      </div>
    </Layout>
  )
}
