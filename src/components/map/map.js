import React from "react"

import { MapImage } from "./map.style"

import { useGetImages } from "../../images/images"

const Map = () => {
  const images = useGetImages()
  return (
    <>
      <MapImage src={images.map} alt="map image" />
    </>
  )
}

export default Map
