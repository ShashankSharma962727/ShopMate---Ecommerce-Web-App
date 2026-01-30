import Layout from '../../Components/Layout/Layout'
import Hero from '../../Components/Hero/Hero'
import TestimonialSection from '../../Components/Testimonials/TestimonialSection'
import BrandsLogo from '../../Components/BrandsLogo/BrandsLogo'

const Home = () => {
  return (
    <Layout>
        <Hero/>
        <BrandsLogo/>
        <TestimonialSection/>
    </Layout>
  )
}

export default Home