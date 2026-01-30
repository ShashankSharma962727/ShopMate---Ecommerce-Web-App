import { NavLink } from 'react-router';
import model from '../../assets/model.png';

const Hero = () => {
  return (
    <div className="w-full pt-5 bg-[#fdfdfc]">
      <div className="w-[90%] m-auto rounded-4xl bg-gray-200 flex flex-col lg:flex-row justify-around items-center p-5 pb-0">
        <div className="flex flex-col gap-2">
          <h1 className="font-extrabold text-3xl md:text-5xl lg:text-8xl text-[#020101] -rotate-1 bg-white">LET'S</h1>
          <h1 className="font-extrabold text-3xl md:text-5xl lg:text-8xltext-3xl lg:text-8xltext-3xl lg:text-8xl text-[#020101]">EXPLORE</h1>
          <h1 className="font-extrabold text-3xl md:text-5xl lg:text-8xl text-[#020101] -rotate-2 bg-yellow-200">UNIQUE</h1>
          <h1 className="font-extrabold text-3xl md:text-5xl lg:text-8xl text-[#020101]">CLOTHES.</h1>
          <p className="text-[#020101] text-xl md:text-2xl lg:text-3xl mt-5">Live for Influential and Innovation Faison!</p>
          <NavLink to={'/allproducts'} className="bg-[#020101] w-full cursor-pointer max-w-40 text-center p-2 rounded-lg text-base md:text-xl">Shop Now</NavLink>
        </div>
        <div className="overflow-hidden">
          <img src={model} className="h-full max-h-100 md:max-h-150 w-full object-contain" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Hero