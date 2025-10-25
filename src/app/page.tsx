import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Programs from '@/components/Programs'
import WhyChooseUs from '@/components/WhyChooseUs'
import Testimonials from '@/components/Testimonials'
import ClassSchedule from '@/components/ClassSchedule'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main style={{ minHeight: '100vh' }}>
      <Header />
      <Hero />
      <Programs />
      <About />
      <WhyChooseUs />
      <Testimonials />
      <ClassSchedule />
      <Contact />
      <Footer />
    </main>
  )
}