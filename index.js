import Header from '../components/Header'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Portfolio from '../components/Portfolio'
import Pricing from '../components/Pricing'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

export default function Home(){
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Pricing />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
