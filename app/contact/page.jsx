import ContactForm from '@/components/ContactForm'
import ContactInfo from '@/components/ContactInfo'
import NewsLetter from '@/components/NewsLetter'
import PageHero from '@/components/heros/PageHero'
import React from 'react'

const page = () => {
  return (
    <>
      <PageHero
        subtitle="СВЯЗАТЬСЯ С НАМИ"
        title="Свяжитесь с нашей службой <br/> поддержки"
        paragraph="Наша команда готова помочь вам с любыми вопросами и предоставить профессиональную консультацию"
      />
      <ContactInfo />
      <ContactForm />
      <NewsLetter />
    </>
  )
}

export default page
