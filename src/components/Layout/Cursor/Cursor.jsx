import React from "react"

const Cursor = () => {
  const cursorRef = React.useRef(null)

  const cursorFunction = () =>
    document.addEventListener("mousemove", event => {
      setTimeout(() => {
        const { clientX, clientY } = event
        const mouseX = clientX - cursorRef.current.clientWidth / 2
        const mouseY = clientY - cursorRef.current.clientHeight / 2
        cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0 )`
      }, 100)
      cursorRef.current.style.opacity = 1
    })

  React.useEffect(() => {
    cursorRef.current.style.opacity = 0
    window.onload = cursorFunction()
  }, [cursorFunction])

  return (
    <div className="cursor" ref={cursorRef}>
      <div className="cursor-inner"></div>
    </div>
  )
}

export default Cursor
