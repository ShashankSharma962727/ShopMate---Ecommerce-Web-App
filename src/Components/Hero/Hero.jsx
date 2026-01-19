import hero from '../../assets/hero.webp'

const Hero = () => {
  return (
    <div className="w-full">
        <img src={hero} className='w-full h-full object-contain' alt="Hero" />
    </div>
  )
}

export default Hero