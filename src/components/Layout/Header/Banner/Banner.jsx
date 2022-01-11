import React from "react"

const Banner = () => {
  const bannerDupe = () => {
    var bannerList = []
    for (var i = 0; i < 4; i++) {
      bannerList.push(<span key={i}>available now -</span>)
    }
    return bannerList
  }
  return (
    <div className="banner">
      <div className="banner-inner">{bannerDupe()}</div>
    </div>
  )
}

export default Banner
