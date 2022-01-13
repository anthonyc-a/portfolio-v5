import React from "react"

const Scrollbar = ({ refHeight }) => {
  const [scrollTop, setScrollTop] = React.useState(0)

  const onScroll = () => {
    const winScroll = refHeight.current.scrollTop
  console.log(winScroll)

    const height = refHeight.current.scrollHeight
    const scrolled = (winScroll / height) * 100
    setScrollTop(scrolled)
  }


  React.useEffect(() => {
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onscroll)
  })

  return (
    <div className="scrollbar">
      <div className="scrollbar-inner" style={{ width: `${scrollTop}%` }}></div>
    </div>
  )
}

export default Scrollbar
