import Layout from '../../Components/Layout/Layout'
import Hero from '../../Components/Hero/Hero'
import Filter from '../../Components/Filter/Filter'
import { ProductCardSection } from '../../Components/ProductCard/ProductCardSection/ProductCardSection'
import TestimonialSection from '../../Components/Testimonials/TestimonialSection'

const Home = () => {
  return (
    <Layout>
        <Hero/>
        <Filter/>
        <ProductCardSection/>
        <TestimonialSection/>
    </Layout>
  )
}

export default Home