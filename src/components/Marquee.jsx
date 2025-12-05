import Marquee from "react-fast-marquee"
import img1 from '../assets/Logo.png'
import img2 from '../assets/Logo (1).png'
import img3 from '../assets/path2.png'
import img4 from '../assets/microsoft 1.png'
import img5 from '../assets/homemainlogo (1) 1.png'
import img6 from '../assets/amazon-web-services-2 1.png'
import img7 from '../assets/10x-Genomics (1) 1@2x.png'
import img8 from '../assets/Teknopoint_DEPT®-Black 1.png'


function MarqueeStrip({ dark }) {
  return (
    <Marquee speed={60} gradient={false} className={`py-6 bg-gray-100 ${dark ? 'dark:bg-gray-800' : 'dark:bg-blue-600'}`}>

      <img src={img1} alt="" className='mr-10 sm:mr-16 md:mr-24 h-[23px]' />

      <img src={img2} alt="" className='mr-10 sm:mr-16 md:mr-24 h-[23px]' />

      <img src={img3} alt="" className='mr-10 sm:mr-16 md:mr-24 h-[23px]' />

      <img src={img4} alt="" className='mr-10 sm:mr-16 md:mr-24 h-[23px]' />

      <img src={img5} alt="" className='mr-10 sm:mr-16 md:mr-24 h-[23px]' />

      <img src={img6} alt="" className='mr-10 sm:mr-16 md:mr-24 h-[23px]' />

      <img src={img7} alt="" className='mr-10 sm:mr-16 md:mr-24 h-[23px]' />

      <img src={img8} alt="" className='mr-10 sm:mr-16 md:mr-24 h-[23px]' />

    </Marquee>
  )
}

export default MarqueeStrip