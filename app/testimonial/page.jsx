import Clients from '@/components/Clients'
import NewsLetter from '@/components/NewsLetter'
import PageHero from '@/components/heros/PageHero'
import Pricing from '@/components/Pricing'
import TestimonialSingle from '@/components/TestimonialSingle'

const Testimonial = () => {
  return (
    <>
      <PageHero
        title="Что говорят наши клиенты <br/> о нашей компании"
        paragraph="Отзывы наших клиентов о качестве наших услуг и уровне обслуживания"
      />
      <TestimonialSingle />
      <Clients sectionTitle={false} spacing={'pt-0 pb-0'} />
      <Pricing spacing={'pt-150 max-md:pt-20'} />
      <NewsLetter />
    </>
  )
}

export default Testimonial
