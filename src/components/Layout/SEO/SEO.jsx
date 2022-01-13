import React from "react"
import { Helmet } from "react-helmet"
import { ThemeStateContext } from "../../context/ToggleThemeProveide"

const Seo = () => {
  const theme = React.useContext(ThemeStateContext)
  const themeClass = theme.lightMode === false ? "dark-theme" : "light-theme"
  return (
    <Helmet>
      <html lang="en" className={themeClass} />
      <title>Anthony Animba - Freelance Designer & Web Developer in London</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no"
      />
    </Helmet>
  )
}

export default Seo
