'use client'
import { fadeUpAnimation } from '@/data/animation'
import { motion } from 'framer-motion'
import Image from 'next/image'
import heroChartDark from '../../public/images/hero/hero-chart-dark.png'
import heroChartLight from '../../public/images/hero/hero-chart.png'
import heroCircleDark from '../../public/images/hero/hero-circle-dark.png'
import heroCircleLight from '../../public/images/hero/hero-circle.png'
import heroPolicyDark from '../../public/images/hero/hero-policy-dark.png'
import heroPolicyLight from '../../public/images/hero/hero-policy.png'
import heroRatingDark from '../../public/images/hero/hero-rating-dark.png'
import heroRatingLight from '../../public/images/hero/hero-rating.png'
import HeroLines from './HeroLines'

const Hero = () => {
  return (
    <section
      className="hero max-mb:pb-[70px] max-mb:pb-[70px] relative overflow-hidden bg-gray pb-[140px] pt-[230px] dark:bg-dark max-lg:pb-25 max-lg:pt-[160px]"
      id="scene">
      <HeroLines />
      <div className="container">
        <motion.div
          variants={fadeUpAnimation}
          initial="initial"
          animate="animate"
          className="relative z-10 grid grid-cols-12 items-center max-lg:gap-y-10">
          <div className="col-span-12 md:col-span-6 ">
            <p className="mb-8 font-medium uppercase max-lg:mb-4">Нам доверяют лучшие</p>
            <h1 className="mb-12 max-md:mb-8">
              Сделайте вашу{' '}
              <span className="inline-block rounded-[88px] border-2 border-paragraph bg-[#D9D9D900] px-5 pb-2.5 pt-0.5 font-playfair text-[0.83em] italic leading-none dark:border-[#F0F3EA]">
                IT-инфраструктуру
              </span>
              <br />
              более эффективной.
            </h1>
            <p className="mb-12 max-w-[590px] max-md:mb-8">
              Мы помогаем компаниям оптимизировать их IT-системы и достичь максимальной производительности
            </p>
            <form>
              <div className="border-borderColour grid w-full max-w-[520px] grid-cols-12 items-center rounded-[60px] border bg-white pb-1 pe-1 pl-4 pt-1 dark:border-[#31332F] dark:bg-dark-200 sm:pl-5">
                <input
                  type="text"
                  placeholder="Введите ваш email"
                  className=" placeholder:text-light text-light col-span-8 bg-transparent leading-[1.75] text-[#A1A49D] outline-none transition-all duration-300  focus:border-primary focus:outline-none dark:placeholder:text-[#A1A49D] xs:col-span-8 "
                />
                <button className="btn col-span-4 max-lg:!px-3 max-lg:!text-sm xs:col-span-4 ">Начать</button>
              </div>
            </form>
          </div>
          <div className="col-span-12 md:col-span-6">
            <div className="relative min-h-[530px] w-full max-md:min-h-[400px] lg:ml-15">
              <div className="absolute !left-1/2 !top-1/2 -translate-x-1/2 -translate-y-1/2">
                <Image src={heroCircleLight} alt="hero Image" className="inline-block h-auto w-auto  dark:hidden" />
                <Image src={heroCircleDark} alt="hero Image" className="hidden h-auto w-auto  dark:inline-block" />
              </div>
              <div className="absolute !-left-[40px] !top-15 max-lg:!left-0 max-lg:aspect-video max-lg:w-[220px] max-md:!top-5 lg:!-top-[20px]">
                <Image src={heroPolicyLight} alt="hero Image" className="inline-block h-auto w-auto dark:hidden" />
                <Image src={heroPolicyDark} alt="hero Image" className="hidden h-auto w-auto dark:inline-block" />
              </div>
              <div className="absolute !bottom-[150px] !left-[50px] max-lg:aspect-square max-lg:w-28 max-md:!bottom-[70px]  max-md:!left-[50px] lg:!bottom-0 lg:!left-[45px] xl:!left-[85px]">
                <Image src={heroRatingLight} alt="hero Image" className="inline-block h-auto w-auto  dark:hidden" />
                <Image src={heroRatingDark} alt="hero Image" className="hidden h-auto w-auto  dark:inline-block" />
              </div>
              <div className="lg:!not-sr-only-bottom-[45px] absolute !-bottom-0 !-right-5 max-lg:w-[196px] max-md:!-bottom-5 max-md:!-right-5 lg:right-0 xl:right-[30px]">
                <Image src={heroChartLight} alt="hero Image" className="inline-block dark:hidden" />
                <Image src={heroChartDark} alt="hero Image" className="hidden dark:inline-block" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
