import React, { useEffect, useState } from 'react'
import { useStateContext } from '../Context'
//images
import Clear from '../assets/images/Clear.jpg'
import Fog from '../assets/images/fog.png'
import cloudy from '../assets/images/cloudy.jfif'
import rainy from '../assets/images/rainy.jfif'
import Snow from '../assets/images/snow.jpg'
import Stormy from '../assets/images/Stormy.jpg'
import Sunny from '../assets/images/Sunny.jpg'
//import overcast from '../assets/images/overcast.jfif'

const BackgroundLayout = () => {

  const { weather } = useStateContext()
  const [image, setImage] = useState(Clear)

  useEffect(() => {
    if (weather.conditions) {
      let imageString = weather.conditions
      if (imageString.toLowerCase().includes('clear')) {
        setImage(Clear)
      } else if (imageString.toLowerCase().includes('cloud')) {
        setImage(cloudy)
      } else if (imageString.toLowerCase().includes('rain') || imageString.toLowerCase().includes('shower')) {
        setImage(rainy)
      } else if (imageString.toLowerCase().includes('snow')) {
        setImage(Snow)
      } else if (imageString.toLowerCase().includes('fog')) {
        setImage(Fog)
      } else if (imageString.toLowerCase().includes('thunder') || imageString.toLowerCase().includes('storm')) {
        setImage(Stormy)
      //}
        //else if (imageString.toLowerCase().includes('Overcast')) {
        //setImage(overcast)
      }
    }
  }, [weather])

  return (
    <img src={image} alt="weather_image" className='h-screen w-full fixed left-0 top-0 -z-[10]' />
  )
}

export default BackgroundLayout