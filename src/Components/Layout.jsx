import NavBar from './NavBar/NavBar'
import Button from './ButtonPlay/Button'
import imageSrc from '../assets/image/Screenshot_2023-09-29_alle_16.40.03__2_-removebg-preview-2-removebg-preview-transformed.png'
import imageLine from '../assets/image/Screenshot_2023-09-29_alle_17.41.31__2_-removebg-preview.png'

function Layout({ children }) {
  return (
    <div className='w-full flex flex-col'>
      <NavBar />
      <div className='flex justify-center'>
        <img src={imageSrc} className='w-full h-auto max-w-xl' />
      </div>
      <div className='flex justify-center mt-4'>
        <Button />
      </div>
      <div
        className='w-80 text-left text-red-500 mt-20 mb-5 ml-20 pr-5 pixelFont font-bold text-xl '
        style={{ letterSpacing: '2px', lineHeight: '1.5' }}
      >
        <p className='text-center'>Unlock the Magic of</p>
        <p className='text-center'>Coding</p>
        <p className='text-center'>Through the Joy of</p>
        <p className='text-center'>Adventure</p>
      </div>
      <div className='ml-80 w-80 h-auto'>
        <img src={imageLine} />
      </div>
      <div className='w-full flex flex-col items-center'>{children}</div>
    </div>
  )
}

export default Layout
