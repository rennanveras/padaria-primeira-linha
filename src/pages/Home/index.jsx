import Experience from '../../components/Experience'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import Infos from '../../components/Info'
import Slide from '../../components/Slider'
import Footer from '../../container/Footer'
import SlideProducts from '../../container/SlideProducts'
import SectionKitParty from '../../container/sectionKitParty'

const Home = () => {
  return (
    <>
      <Header />
      <div className='container'>
        <Hero />
        <Slide />
        <Infos />
        <SlideProducts />
        <Experience />
      </div>
      <SectionKitParty />
      <Footer />
    </>
  )
}

export default Home
