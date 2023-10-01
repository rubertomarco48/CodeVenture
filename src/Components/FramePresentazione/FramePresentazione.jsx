import React, { useRef } from 'react'
import './FramePresentazione.css'
import imageBorder from '../../assets/image/Screenshot_2023-09-29_alle_17.59.12__2_-removebg-preview.png'
import imageBg1 from '../../assets/image/Screenshot_2023-09-29_alle_18.23.38__2_-removebg-preview.png'
import imageBg2 from '../../assets/image/IMG_4255.png'

export const FramePresentazione = () => {
  const videoRef = useRef(null)

  const handleOverlayClick = () => {
    if (videoRef.current.paused) {
      videoRef.current.play()
    } else {
      videoRef.current.pause()
    }
  }

  return (
    <div className='frame-container' onClick={handleOverlayClick}>
      <img src={imageBorder} alt='Border' className='border-image' />
      <div className='bg-images'>
        <img src={imageBg1} alt='Background1' className='bg-image left' />
        <img src={imageBg2} alt='Background2' className='bg-image right' />
      </div>
      <div className='flex justify-center p-12'>
        <video
          ref={videoRef}
          className='video w-2/3 rounded-3xl'
          controls
          src='./src/assets/video/presentazioneCodeVenture.mp4'
        ></video>
      </div>
    </div>
  )
}
