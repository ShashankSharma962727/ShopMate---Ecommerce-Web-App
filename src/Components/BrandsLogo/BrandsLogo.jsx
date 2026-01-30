import hm from '../../assets/BrandsLogo/h&m.png'
import gucci from '../../assets/BrandsLogo/gucci.png'
import levi from '../../assets/BrandsLogo/levi.png'
import lv from '../../assets/BrandsLogo/lv.png'
import zara from '../../assets/BrandsLogo/zara.png'

const BrandsLogo = () => {
  return (
    <div className='w-full flex bg-yellow-200 items-center justify-evenly  mt-20'>
        <img src={hm} className='h-10 lg:h-20' alt="h&m" />
        <img src={gucci} className='h-10 lg:h-20' alt="gucci" />
        <img src={levi} className='h-10 lg:h-25' alt="levi's" />
        <img src={lv} className='h-10 lg:h-20' alt="lv" />
        <img src={zara} className='h-5 lg:h-10' alt="zara" />
    </div>
  )
}

export default BrandsLogo