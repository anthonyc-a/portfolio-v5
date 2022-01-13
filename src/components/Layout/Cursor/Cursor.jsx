import React from "react"

const Cursor = ({ cursorExpand }) => {
  const cursorRef = React.useRef(null)

  React.useEffect(() => {
    var mouseX = window.innerWidth / 2,
      mouseY = window.innerHeight / 2

    var circle = {
      el: cursorRef,
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      w: 40,
      h: 40,
      update: function () {
        let l = this.x - this.w / 2
        let t = this.y - this.h / 2
        this.el.current.style.transform = `translate3d(${l}px, ${t}px, 0 )`
      },
    }

    document.addEventListener("mousemove", event => {
      const { clientX, clientY } = event
      mouseX = clientX
      mouseY = clientY
    })

    setInterval(move, 1000 / 50)
    function move() {
      circle.x = lerp(circle.x, mouseX, 0.175)
      circle.y = lerp(circle.y, mouseY, 0.175)
      circle.update()
    }

    function lerp(start, end, amt) {
      return (1 - amt) * start + amt * end
    }
  }, [cursorRef])

  return (
    <div className="cursor" ref={cursorRef}>
      <div
        className={cursorExpand ? "cursor-inner expand" : "cursor-inner"}
      ></div>
    </div>
  )
}

export default Cursor
